import * as THREE from 'three';
import { CrossingController } from './CrossingController';
import { TrafficManager } from './TrafficManager';
import { CrossingModel } from '../models/CrossingModel';
import { EnvironmentModel } from '../models/EnvironmentModel';
import { SoundEngine } from '../audio/SoundEngine';

export class InteractionManager {
  private camera: THREE.PerspectiveCamera;
  private crossingController: CrossingController;
  private trafficManager: TrafficManager;
  private crossingModel: CrossingModel;
  private envModel: EnvironmentModel;
  private soundEngine: SoundEngine;

  private raycaster: THREE.Raycaster;
  private pointer: THREE.Vector2;
  private tapEffectsLayer: HTMLElement | null;
  private guideTextEl: HTMLElement | null;
  private guideTimer: number | null = null;

  constructor(
    camera: THREE.PerspectiveCamera,
    crossingController: CrossingController,
    trafficManager: TrafficManager,
    crossingModel: CrossingModel,
    envModel: EnvironmentModel,
    soundEngine: SoundEngine
  ) {
    this.camera = camera;
    this.crossingController = crossingController;
    this.trafficManager = trafficManager;
    this.crossingModel = crossingModel;
    this.envModel = envModel;
    this.soundEngine = soundEngine;

    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.tapEffectsLayer = document.getElementById('tap-effects-layer');
    this.guideTextEl = document.getElementById('guide-text');

    this.setupListeners();
  }

  private setupListeners(): void {
    const handleTap = (clientX: number, clientY: number, target: EventTarget | null) => {
      // If tapped on UI element, don't raycast
      if (target && ((target as HTMLElement).closest('button') || (target as HTMLElement).closest('.start-overlay'))) {
        return;
      }

      this.pointer.x = (clientX / window.innerWidth) * 2 - 1;
      this.pointer.y = -(clientY / window.innerHeight) * 2 + 1;

      this.raycaster.setFromCamera(this.pointer, this.camera);

      // 1. Check Crossing clickable meshes
      const crossingIntersects = this.raycaster.intersectObjects(this.crossingModel.clickableMeshes, true);
      if (crossingIntersects.length > 0) {
        this.createTapEffect(clientX, clientY, '⭐');
        this.soundEngine.playTapSound();
        const started = this.crossingController.triggerCrossingSequence();
        if (started) {
          this.showGuideMessage('カンカンカン！でんしゃが くるよ！🚃');
        }
        return;
      }

      // 2. Check Road meshes
      const roadIntersects = this.raycaster.intersectObjects(this.envModel.roadMeshes, true);
      if (roadIntersects.length > 0) {
        const hitPoint = roadIntersects[0].point;
        // If tapped on South road (Z > 0), spawn car going South to North (+Z to -Z, direction = 1)
        // If tapped on North road (Z < 0), spawn car going North to South (-Z to +Z, direction = -1)
        const preferDirection = (hitPoint.z > 0) ? 1 : -1;

        this.createTapEffect(clientX, clientY, '✨');
        this.soundEngine.playTapSound();
        const car = this.trafficManager.spawnVehicle(preferDirection);
        if (car) {
          const name = this.trafficManager.getVehicleDisplayName(car.type);
          this.showGuideMessage(`${name} が きたよ！`);
        }
        return;
      }

      // 3. If tapped anywhere near crossing zone
      const allEnvIntersects = this.raycaster.intersectObject(this.envModel.group, true);
      if (allEnvIntersects.length > 0) {
        const pt = allEnvIntersects[0].point;
        if (Math.abs(pt.x) < 8 && Math.abs(pt.z) < 8) {
          // Tapped center crossing area
          this.createTapEffect(clientX, clientY, '⚠️');
          this.soundEngine.playTapSound();
          this.crossingController.triggerCrossingSequence();
          this.showGuideMessage('カンカンカン！ふみきり スタート！🚊');
        } else if (Math.abs(pt.x) < 10) {
          // Tapped road vicinity
          this.createTapEffect(clientX, clientY, '🚙');
          this.soundEngine.playTapSound();
          const preferDir = (pt.z > 0) ? 1 : -1;
          const car = this.trafficManager.spawnVehicle(preferDir);
          if (car) {
            const name = this.trafficManager.getVehicleDisplayName(car.type);
            this.showGuideMessage(`${name} が はしるよ！`);
          }
        }
      }
    };

    window.addEventListener('click', (e) => {
      handleTap(e.clientX, e.clientY, e.target);
    });

    window.addEventListener('touchend', (e) => {
      if (e.changedTouches.length > 0) {
        const t = e.changedTouches[0];
        handleTap(t.clientX, t.clientY, e.target);
      }
    }, { passive: true });
  }

  public showGuideMessage(msg: string, durationMs: number = 3000): void {
    if (!this.guideTextEl) return;
    this.guideTextEl.textContent = msg;

    if (this.guideTimer !== null) {
      clearTimeout(this.guideTimer);
    }

    this.guideTimer = window.setTimeout(() => {
      if (this.guideTextEl) {
        this.guideTextEl.textContent = 'ふみきり や どうろ を タップしてみてね！';
      }
    }, durationMs);
  }

  private createTapEffect(x: number, y: number, emoji: string): void {
    if (!this.tapEffectsLayer) return;

    // Create floating star/emoji
    const star = document.createElement('div');
    star.className = 'tap-star';
    star.textContent = emoji;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    // Create expanding ripple
    const ripple = document.createElement('div');
    ripple.className = 'tap-ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    this.tapEffectsLayer.appendChild(star);
    this.tapEffectsLayer.appendChild(ripple);

    setTimeout(() => {
      star.remove();
      ripple.remove();
    }, 700);
  }
}
