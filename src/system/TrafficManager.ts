import * as THREE from 'three';
import { VehicleModel, VehicleType } from '../models/VehicleModel';
import { SoundEngine } from '../audio/SoundEngine';

export class TrafficManager {
  private scene: THREE.Scene;
  private soundEngine: SoundEngine;
  public vehicles: VehicleModel[] = [];

  private vehicleTypes: VehicleType[] = [
    'sports_car',
    'garbage_truck',
    'semi_truck',
    'kei_car',
    'minivan',
    'kei_truck',
    'suv',
    'ambulance',
    'fire_engine',
    'police',
    'bus',
    'truck',
    'sedan'
  ];
  private typeIndex: number = 0;
  private laneToggle: boolean = false;

  // Stop line Z positions (absolute value)
  private readonly STOP_LINE_Z = 6.4;

  constructor(scene: THREE.Scene, soundEngine: SoundEngine) {
    this.scene = scene;
    this.soundEngine = soundEngine;
  }

  /**
   * Spawn a vehicle.
   * If preferDirection is given (1: South->North, -1: North->South), use it, otherwise alternate.
   */
  public spawnVehicle(preferDirection?: number): VehicleModel | null {
    // Determine direction and lane
    let direction: number;
    if (preferDirection !== undefined) {
      direction = preferDirection;
    } else {
      this.laneToggle = !this.laneToggle;
      direction = this.laneToggle ? 1 : -1;
    }

    // Lane X coordinate:
    // When direction === 1 (from +Z to -Z, South to North), drive on left-hand side (Japan traffic) -> X = -2.2
    // When direction === -1 (from -Z to +Z, North to South), drive on left-hand side -> X = 2.2
    const laneX = (direction === 1) ? -2.2 : 2.2;
    const startZ = 65 * direction;

    // Check if spawn point is already blocked by a car
    const isSpawnBlocked = this.vehicles.some(v =>
      v.direction === direction &&
      Math.abs(v.group.position.z - startZ) < (v.length + 3.0)
    );
    if (isSpawnBlocked) {
      return null;
    }

    const type = this.vehicleTypes[this.typeIndex];
    this.typeIndex = (this.typeIndex + 1) % this.vehicleTypes.length;

    const vehicle = new VehicleModel(type, direction, laneX);
    vehicle.group.position.set(laneX, 0, startZ);
    this.scene.add(vehicle.group);
    this.vehicles.push(vehicle);

    this.soundEngine.playCarHorn();
    return vehicle;
  }

  public getVehicleDisplayName(type: VehicleType): string {
    const names: Record<VehicleType, string> = {
      sports_car: 'スポーツカー 🏎️',
      garbage_truck: 'ゴミ収集車（パッカー車）🗑️',
      semi_truck: 'トレーラートラック 🚛',
      kei_car: '軽自動車（けいじどうしゃ）🚗',
      minivan: 'ミニバン 🚐',
      kei_truck: '軽トラック（けいトラ）🛻',
      suv: 'SUV 🚙',
      ambulance: '救急車（きゅうきゅうしゃ）🚑',
      fire_engine: '消防車（しょうぼうしゃ）🚒',
      police: 'パトカー 🚓',
      bus: 'バス 🚌',
      truck: 'トラック 🚚',
      sedan: '乗用車（セダン）🚗'
    };
    return names[type] || 'くるま 🚗';
  }

  public update(delta: number, isCrossingSafe: boolean): void {
    // Separate into two lane queues to handle spacing cleanly
    const southToNorth = this.vehicles.filter(v => v.direction === 1).sort((a, b) => a.group.position.z - b.group.position.z);
    const northToSouth = this.vehicles.filter(v => v.direction === -1).sort((a, b) => b.group.position.z - a.group.position.z);

    this.updateLaneQueue(southToNorth, delta, isCrossingSafe);
    this.updateLaneQueue(northToSouth, delta, isCrossingSafe);

    // Clean up vehicles that exited the map
    for (let i = this.vehicles.length - 1; i >= 0; i--) {
      const v = this.vehicles[i];
      if (Math.abs(v.group.position.z) > 75) {
        this.scene.remove(v.group);
        this.vehicles.splice(i, 1);
      }
    }
  }

  private updateLaneQueue(laneVehicles: VehicleModel[], delta: number, isCrossingSafe: boolean): void {
    for (let i = 0; i < laneVehicles.length; i++) {
      const car = laneVehicles[i];
      const carAhead = (i > 0) ? laneVehicles[i - 1] : null;

      // Distance to car ahead
      let distToAhead = 999;
      if (carAhead) {
        if (car.direction === 1) {
          distToAhead = (car.group.position.z - carAhead.group.position.z) - (car.length / 2 + carAhead.length / 2);
        } else {
          distToAhead = (carAhead.group.position.z - car.group.position.z) - (car.length / 2 + carAhead.length / 2);
        }
      }

      // Stop Line Distance
      // For direction === 1 (traveling towards -Z), car is before stop line when position.z > 6.4
      // For direction === -1 (traveling towards +Z), car is before stop line when position.z < -6.4
      const distToStopLine = (car.direction === 1)
        ? (car.group.position.z - this.STOP_LINE_Z)
        : (-this.STOP_LINE_Z - car.group.position.z);

      // State Machine for each car
      switch (car.state) {
        case 'approaching':
          // Decelerate if close to car ahead
          if (distToAhead < 4.0) {
            car.targetSpeed = 0;
          } else if (distToStopLine > 0 && distToStopLine < 8.0) {
            // Approaching stop line -> slow down smoothly
            const progress = distToStopLine / 8.0;
            car.targetSpeed = Math.max(1.5, 9.0 * progress);

            if (distToStopLine <= 0.3) {
              // Reached stop line -> Full STOP!
              car.speed = 0;
              car.targetSpeed = 0;
              car.state = 'stopping_at_line';
              car.stopWaitTimer = 1.4; // 1.4 seconds mandatory pause
              car.lookTimer = 0;
            }
          } else {
            car.targetSpeed = 9.5;
          }
          break;

        case 'stopping_at_line':
          car.speed = 0;
          car.targetSpeed = 0;
          car.stopWaitTimer -= delta;
          car.lookTimer += delta;

          // Cute left-right look animation during stop
          const lookProgress = Math.min(1.0, car.lookTimer / 1.4);
          car.updateLookingAnimation(lookProgress);

          if (car.stopWaitTimer <= 0) {
            car.resetLookingAnimation();
            // Check if crossing is open and safe
            if (isCrossingSafe) {
              car.state = 'crossing';
              car.targetSpeed = 8.5;
            } else {
              car.state = 'waiting_crossing';
            }
          }
          break;

        case 'waiting_crossing':
          car.speed = 0;
          car.targetSpeed = 0;
          // Wait until crossing is completely safe and open
          if (isCrossingSafe && distToAhead > 4.0) {
            car.state = 'crossing';
            car.targetSpeed = 8.5;
          }
          break;

        case 'crossing':
          // Car is now crossing the tracks
          if (distToAhead < 4.0) {
            car.targetSpeed = 0;
          } else {
            car.targetSpeed = 9.0;
          }

          // Once past the crossing zone (|z| < 4.5), transition to exiting
          if (car.direction === 1 && car.group.position.z < -5.0) {
            car.state = 'exiting';
          } else if (car.direction === -1 && car.group.position.z > 5.0) {
            car.state = 'exiting';
          }
          break;

        case 'exiting':
          if (distToAhead < 4.0) {
            car.targetSpeed = 0;
          } else {
            car.targetSpeed = 10.0;
          }
          break;
      }

      // Smooth Acceleration / Braking
      if (car.speed < car.targetSpeed) {
        car.speed = Math.min(car.targetSpeed, car.speed + 12.0 * delta);
      } else if (car.speed > car.targetSpeed) {
        car.speed = Math.max(car.targetSpeed, car.speed - 22.0 * delta);
      }

      // Move vehicle along Z
      const moveZ = car.speed * delta * (-car.direction);
      car.group.position.z += moveZ;

      // Update vehicle internals (wheels, sirens)
      car.update(delta);
    }
  }
}
