import { CrossingModel } from '../models/CrossingModel';
import { TrainManager } from './TrainManager';
import { SoundEngine } from '../audio/SoundEngine';

export type CrossingState =
  | 'IDLE'
  | 'WARNING'
  | 'LOWERING_BARRIER'
  | 'TRAIN_PASSING'
  | 'RAISING_BARRIER'
  | 'CLEARING';

export class CrossingController {
  private crossingModel: CrossingModel;
  private trainManager: TrainManager;
  private soundEngine: SoundEngine;

  public state: CrossingState = 'IDLE';
  private stateTimer: number = 0;

  constructor(
    crossingModel: CrossingModel,
    trainManager: TrainManager,
    soundEngine: SoundEngine
  ) {
    this.crossingModel = crossingModel;
    this.trainManager = trainManager;
    this.soundEngine = soundEngine;
  }

  /**
   * Returns true if cars are allowed to cross the tracks safely
   */
  public isSafeForCars(): boolean {
    return this.state === 'IDLE' && this.crossingModel.isBarrierFullyUp();
  }

  /**
   * Triggers the crossing sequence (Alarm -> Barrier Down -> Train -> Barrier Up -> Alarm Off)
   */
  public triggerCrossingSequence(): boolean {
    if (this.state !== 'IDLE') {
      return false; // Already running sequence
    }

    this.state = 'WARNING';
    this.stateTimer = 1.8; // 1.8s of warning bell & lights before barrier starts dropping

    this.crossingModel.setBlinking(true);
    this.soundEngine.startCrossingAlarm();
    return true;
  }

  public update(delta: number): void {
    // Always update crossing model animations (lights, barrier rotation)
    this.crossingModel.update(delta);

    switch (this.state) {
      case 'IDLE':
        // Nothing active
        break;

      case 'WARNING':
        this.stateTimer -= delta;
        if (this.stateTimer <= 0) {
          this.state = 'LOWERING_BARRIER';
          this.crossingModel.setTargetBarrierAngle(true); // Close barriers
          this.soundEngine.playBarrierMotor();
        }
        break;

      case 'LOWERING_BARRIER':
        if (this.crossingModel.isBarrierFullyDown()) {
          this.state = 'TRAIN_PASSING';
          // Spawn and launch the train!
          const train = this.trainManager.spawnTrain();
          this.crossingModel.setTrainDirection(train.direction);
        }
        break;

      case 'TRAIN_PASSING':
        // Train is running. Once train has exited, trainManager.isTrainRunning() becomes false
        if (!this.trainManager.isTrainRunning()) {
          this.state = 'RAISING_BARRIER';
          this.crossingModel.setTargetBarrierAngle(false); // Open barriers
          this.crossingModel.setTrainDirection(0);
          this.soundEngine.playBarrierMotor();
        }
        break;

      case 'RAISING_BARRIER':
        if (this.crossingModel.isBarrierFullyUp()) {
          this.state = 'CLEARING';
          this.stateTimer = 0.4; // Short delay before turning off alarm
        }
        break;

      case 'CLEARING':
        this.stateTimer -= delta;
        if (this.stateTimer <= 0) {
          this.crossingModel.setBlinking(false);
          this.soundEngine.stopCrossingAlarm();
          this.state = 'IDLE';
        }
        break;
    }
  }
}
