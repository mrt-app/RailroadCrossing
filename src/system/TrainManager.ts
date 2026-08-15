import * as THREE from 'three';
import { TrainModel, TrainType, TRAIN_THEMES } from '../models/TrainModel';
import { SoundEngine } from '../audio/SoundEngine';

export interface ActiveTrain {
  model: TrainModel;
  trackZ: number;
  direction: number; // 1 = Left to Right (-X to +X), -1 = Right to Left (+X to -X)
  posX: number;
  speed: number;
  maxSpeed: number;
  type: TrainType;
  name: string;
  hasPlayedHorn: boolean;
}

export class TrainManager {
  private scene: THREE.Scene;
  private soundEngine: SoundEngine;
  public activeTrain: ActiveTrain | null = null;

  private trainTypes: TrainType[] = [
    'yamanote',
    'freight',
    'hayabusa',
    'komachi',
    'doctor_yellow',
    'express',
    'chuo',
    'steam',
    'shonan'
  ];
  private currentTypeIndex: number = 0;
  private trackToggle: boolean = false;

  constructor(scene: THREE.Scene, soundEngine: SoundEngine) {
    this.scene = scene;
    this.soundEngine = soundEngine;
  }

  public isTrainRunning(): boolean {
    return this.activeTrain !== null;
  }

  public spawnTrain(): ActiveTrain {
    if (this.activeTrain) {
      return this.activeTrain;
    }

    const type = this.trainTypes[this.currentTypeIndex];
    this.currentTypeIndex = (this.currentTypeIndex + 1) % this.trainTypes.length;
    const theme = TRAIN_THEMES[type];

    // Alternate track and direction
    this.trackToggle = !this.trackToggle;
    const direction = this.trackToggle ? 1 : -1;
    const trackZ = this.trackToggle ? -2.2 : 2.2;

    const startX = -90 * direction;
    const trainModel = new TrainModel(type, direction);
    trainModel.group.position.set(startX, 0, trackZ);
    this.scene.add(trainModel.group);

    // Speed setting based on train category
    let maxSpeed = 25.0;
    if (theme.category === 'shinkansen') maxSpeed = 34.0;
    if (theme.category === 'express') maxSpeed = 28.0;
    if (theme.category === 'freight') maxSpeed = 20.0;
    if (theme.category === 'steam') maxSpeed = 18.0;

    this.activeTrain = {
      model: trainModel,
      trackZ,
      direction,
      posX: startX,
      speed: 0,
      maxSpeed,
      type,
      name: theme.name,
      hasPlayedHorn: false
    };

    this.soundEngine.startTrainSound();
    return this.activeTrain;
  }

  public update(delta: number): void {
    if (!this.activeTrain) return;

    const t = this.activeTrain;

    // Acceleration
    if (t.speed < t.maxSpeed) {
      const accelRate = t.type === 'hayabusa' || t.type === 'komachi' || t.type === 'doctor_yellow' ? 24.0 : 16.0;
      t.speed = Math.min(t.maxSpeed, t.speed + accelRate * delta);
    }

    const deltaDistance = t.speed * delta * t.direction;
    t.posX += deltaDistance;
    t.model.group.position.x = t.posX;
    t.model.rotateWheels(Math.abs(deltaDistance));

    // Play horn when approaching crossing (approx 35 units away)
    if (!t.hasPlayedHorn) {
      const distToCrossing = -t.posX * t.direction;
      if (distToCrossing <= 35 && distToCrossing > 0) {
        this.soundEngine.playTrainHorn();
        t.hasPlayedHorn = true;
      }
    }

    // Check if train has completely exited the scene (beyond |X| > 95)
    if (Math.abs(t.posX) > 95 && (t.posX * t.direction > 0)) {
      this.removeTrain();
    }
  }

  public removeTrain(): void {
    if (this.activeTrain) {
      this.scene.remove(this.activeTrain.model.group);
      this.activeTrain = null;
      this.soundEngine.stopTrainSound();
    }
  }
}
