import * as THREE from 'three';
import { SceneManager } from './core/SceneManager';
import { CameraController } from './core/CameraController';
import { SoundEngine } from './audio/SoundEngine';
import { EnvironmentModel } from './models/EnvironmentModel';
import { CrossingModel } from './models/CrossingModel';
import { DogHouseModel } from './models/DogHouseModel';
import { TrainManager } from './system/TrainManager';
import { TrafficManager } from './system/TrafficManager';
import { CrossingController } from './system/CrossingController';
import { InteractionManager } from './system/InteractionManager';
import { UIManager } from './ui/UIManager';

class App {
  private sceneManager: SceneManager;
  private cameraController: CameraController;
  private soundEngine: SoundEngine;
  private envModel: EnvironmentModel;
  private crossingModel: CrossingModel;
  private dogHouseModel: DogHouseModel;
  private trainManager: TrainManager;
  private trafficManager: TrafficManager;
  private crossingController: CrossingController;
  private interactionManager: InteractionManager;

  private clock: THREE.Clock;

  // Idle Timers
  private idleCrossingTimer: number = 0;
  private readonly IDLE_CROSSING_INTERVAL = 180.0; // 3 minutes (180s)

  private idleCarTimer: number = 0;
  private readonly IDLE_CAR_INTERVAL = 30.0; // 30 seconds

  constructor() {
    const container = document.getElementById('canvas-container')!;

    // Core Managers
    this.sceneManager = new SceneManager(container);
    this.cameraController = new CameraController();
    this.soundEngine = new SoundEngine();

    // 3D Models
    this.envModel = new EnvironmentModel();
    this.sceneManager.scene.add(this.envModel.group);

    this.crossingModel = new CrossingModel();
    this.sceneManager.scene.add(this.crossingModel.group);

    this.dogHouseModel = new DogHouseModel(this.soundEngine);
    this.sceneManager.scene.add(this.dogHouseModel.group);

    // Systems
    this.trainManager = new TrainManager(this.sceneManager.scene, this.soundEngine);
    this.trafficManager = new TrafficManager(this.sceneManager.scene, this.soundEngine);
    this.crossingController = new CrossingController(
      this.crossingModel,
      this.trainManager,
      this.soundEngine
    );

    // Interactions & UI
    this.interactionManager = new InteractionManager(
      this.cameraController.camera,
      this.crossingController,
      this.trafficManager,
      this.crossingModel,
      this.envModel,
      this.dogHouseModel,
      this.soundEngine
    );

    new UIManager(
      this.soundEngine,
      this.crossingController,
      this.trafficManager,
      this.cameraController,
      this.sceneManager,
      this.envModel,
      this.interactionManager
    );

    this.clock = new THREE.Clock();

    // Listen to user interactions to reset idle crossing timer
    window.addEventListener('pointerdown', () => {
      this.idleCrossingTimer = 0;
    });

    // Spawn an initial friendly car from each direction after a short delay
    setTimeout(() => {
      this.trafficManager.spawnVehicle(1);
    }, 600);

    setTimeout(() => {
      this.trafficManager.spawnVehicle(-1);
    }, 2500);

    // Start animation loop
    this.animate();
  }

  private animate = (): void => {
    requestAnimationFrame(this.animate);

    const delta = Math.min(this.clock.getDelta(), 0.1);

    // 1. Auto-Crossing Timer (3分操作がなければ自動作動)
    this.idleCrossingTimer += delta;
    if (this.idleCrossingTimer >= this.IDLE_CROSSING_INTERVAL) {
      this.idleCrossingTimer = 0;
      if (this.crossingController.state === 'IDLE') {
        this.soundEngine.init();
        this.crossingController.triggerCrossingSequence();
        this.interactionManager.showGuideMessage('カンカンカン！でんしゃ が くるよ！🚊');
      }
    }

    // 2. Auto-Car Spawn Timer (約30秒間隔で車を自動出現)
    this.idleCarTimer += delta;
    if (this.idleCarTimer >= this.IDLE_CAR_INTERVAL) {
      this.idleCarTimer = 0;
      if (this.trafficManager.vehicles.length < 6) {
        const car = this.trafficManager.spawnVehicle();
        if (car) {
          const name = this.trafficManager.getVehicleDisplayName(car.type);
          this.interactionManager.showGuideMessage(`${name} が はしってきたよ！🚗`);
        }
      }
    }

    // Update Systems
    const isCrossingSafe = this.crossingController.isSafeForCars();
    this.crossingController.update(delta);
    this.trainManager.update(delta);
    this.trafficManager.update(delta, isCrossingSafe);
    this.dogHouseModel.update(delta);

    // Update Camera
    const activeTrainX = this.trainManager.activeTrain ? this.trainManager.activeTrain.posX : undefined;
    this.cameraController.update(delta, activeTrainX);

    // Render Scene
    this.sceneManager.renderer.render(this.sceneManager.scene, this.cameraController.camera);
  };
}

// Bootstrap
window.addEventListener('DOMContentLoaded', () => {
  new App();
});
