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

  // Station Behavior Configuration
  hasStationOnTrack: boolean;
  stationState: 'approaching' | 'decelerating' | 'stopped' | 'departing' | 'exiting';
  stationTimer: number;
  hasPlayedChime: boolean;
  hasPlayedBrakeSound: boolean;
}

export class TrainManager {
  private scene: THREE.Scene;
  private soundEngine: SoundEngine;
  public activeTrain: ActiveTrain | null = null;

  // Station platform center position in world space
  private readonly STATION_CENTER_X = 18.0;

  // Station track: -2.2 has the platform. Non-station track: 2.2 has NO platform.
  private readonly STATION_TRACK_Z = -2.2;
  private readonly NON_STATION_TRACK_Z = 2.2;

  // Trains tailored for local station stopping (2-car local trains)
  private localStationTrainTypes: TrainType[] = ['yamanote', 'chuo', 'shonan'];
  private localTypeIndex: number = 0;

  // Trains for non-stopping track (Express, Shinkansen, Freight, Steam, Through-trains)
  private throughTrainTypes: TrainType[] = [
    'hayabusa',
    'komachi',
    'doctor_yellow',
    'express',
    'freight',
    'steam'
  ];
  private throughTypeIndex: number = 0;

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

    // Toggle between the station track (Z = -2.2) and non-station track (Z = 2.2)
    this.trackToggle = !this.trackToggle;
    const trackZ = this.trackToggle ? this.STATION_TRACK_Z : this.NON_STATION_TRACK_Z;
    const hasStationOnTrack = (trackZ === this.STATION_TRACK_Z);

    // Direction: Alternate or randomize
    const direction = this.trackToggle ? 1 : -1;

    let type: TrainType;
    let numCars = 2;

    if (hasStationOnTrack) {
      // 2-Car Local Train stopping at station platform
      type = this.localStationTrainTypes[this.localTypeIndex];
      this.localTypeIndex = (this.localTypeIndex + 1) % this.localStationTrainTypes.length;
      numCars = 2;
    } else {
      // Express / Shinkansen / Freight through-train on non-station track
      type = this.throughTrainTypes[this.throughTypeIndex];
      this.throughTypeIndex = (this.throughTypeIndex + 1) % this.throughTrainTypes.length;
      numCars = 3;
    }

    const theme = TRAIN_THEMES[type];
    const startX = -48 * direction;
    const trainModel = new TrainModel(type, direction, numCars);
    trainModel.group.position.set(startX, 0, trackZ);
    this.scene.add(trainModel.group);

    // Speed setting based on train category
    let maxSpeed = 19.0;
    if (theme.category === 'shinkansen') maxSpeed = 27.0;
    if (theme.category === 'express') maxSpeed = 23.0;
    if (theme.category === 'freight') maxSpeed = 17.0;
    if (theme.category === 'steam') maxSpeed = 15.0;

    this.activeTrain = {
      model: trainModel,
      trackZ,
      direction,
      posX: startX,
      speed: 0,
      maxSpeed,
      type,
      name: theme.name,
      hasPlayedHorn: false,
      hasStationOnTrack,
      stationState: hasStationOnTrack ? 'approaching' : 'exiting', // Through-trains never stop!
      stationTimer: 3.5,
      hasPlayedChime: false,
      hasPlayedBrakeSound: false
    };

    this.soundEngine.startTrainSound();
    return this.activeTrain;
  }

  public update(delta: number): void {
    if (!this.activeTrain) return;

    const t = this.activeTrain;
    const targetX = this.STATION_CENTER_X;

    // Handle station stop state machine ONLY if this track has a station
    if (t.hasStationOnTrack) {
      const distToStation = (targetX - t.posX) * t.direction;

      switch (t.stationState) {
        case 'approaching':
          if (t.speed < t.maxSpeed) {
            t.speed = Math.min(t.maxSpeed, t.speed + 16.0 * delta);
          }

          // Approaching station: Start decelerating when within 14m of platform
          if (distToStation > 0 && distToStation < 15.0) {
            t.stationState = 'decelerating';
          }
          break;

        case 'decelerating':
          // Smooth deceleration to arrive neatly at station center
          const brakeProgress = Math.max(0.05, distToStation / 15.0);
          const targetBrakeSpeed = t.maxSpeed * Math.pow(brakeProgress, 0.85);

          if (t.speed > targetBrakeSpeed) {
            t.speed = Math.max(targetBrakeSpeed, t.speed - 18.0 * delta);
          }

          // Complete stop centered on station platform (posX = 18.0m)
          // 2-car train length is 18m, perfectly positioned from X = 9m to 27m on 22m platform!
          // Crossing is at X = 0 (bounds -4.5m to +4.5m), giving 4.5m clear buffer with zero overhang!
          if (distToStation <= 0.4 || t.speed <= 0.6) {
            t.speed = 0;
            t.posX = targetX;
            t.stationState = 'stopped';
            t.stationTimer = 3.5;

            if (!t.hasPlayedBrakeSound) {
              this.soundEngine.playStationBrakeSound();
              t.hasPlayedBrakeSound = true;
            }
          }
          break;

        case 'stopped':
          t.speed = 0;
          t.stationTimer -= delta;

          // Play departure melody 1.2s before departing
          if (t.stationTimer <= 1.2 && !t.hasPlayedChime) {
            this.soundEngine.playStationDepartureMelody();
            t.hasPlayedChime = true;
          }

          // Depart from station platform
          if (t.stationTimer <= 0) {
            t.stationState = 'departing';
            this.soundEngine.playTrainHorn();
          }
          break;

        case 'departing':
          if (t.speed < t.maxSpeed) {
            t.speed = Math.min(t.maxSpeed, t.speed + 14.0 * delta);
          }

          if (distToStation < -5.0) {
            t.stationState = 'exiting';
          }
          break;

        case 'exiting':
          if (t.speed < t.maxSpeed) {
            t.speed = Math.min(t.maxSpeed, t.speed + 16.0 * delta);
          }
          break;
      }
    } else {
      // Non-station track (Through train): Full cruising speed without stopping
      if (t.speed < t.maxSpeed) {
        const accelRate = t.type === 'hayabusa' || t.type === 'komachi' || t.type === 'doctor_yellow' ? 24.0 : 16.0;
        t.speed = Math.min(t.maxSpeed, t.speed + accelRate * delta);
      }
    }

    // Move train along X
    const deltaDistance = t.speed * delta * t.direction;
    t.posX += deltaDistance;
    t.model.group.position.x = t.posX;
    t.model.rotateWheels(Math.abs(deltaDistance));

    // Play horn when approaching crossing (approx 22 units away from X = 0)
    if (!t.hasPlayedHorn && t.stationState !== 'stopped') {
      const distToCrossing = -t.posX * t.direction;
      if (distToCrossing <= 22 && distToCrossing > 0) {
        this.soundEngine.playTrainHorn();
        t.hasPlayedHorn = true;
      }
    }

    // Check if train has completely exited the scene (beyond |X| > 50)
    if (Math.abs(t.posX) > 50 && (t.posX * t.direction > 0)) {
      this.removeTrain();
    }
  }

  public removeTrain(): void {
    if (this.activeTrain) {
      this.scene.remove(this.activeTrain.model.group);
      this.activeTrain.model.dispose(); // Free train GPU resources
      this.activeTrain = null;
      this.soundEngine.stopTrainSound();
    }
  }
}
