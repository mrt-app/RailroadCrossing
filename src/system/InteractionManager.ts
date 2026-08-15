import * as THREE from 'three';
import { CrossingController } from './CrossingController';
import { TrafficManager } from './TrafficManager';
import { CrossingModel } from '../models/CrossingModel';
import { EnvironmentModel } from '../models/EnvironmentModel';
import { DogHouseModel } from '../models/DogHouseModel';
import { SoundEngine } from '../audio/SoundEngine';

export class InteractionManager {
  private camera: THREE.PerspectiveCamera;
  private crossingController: CrossingController;
  private trafficManager: TrafficManager;
  private crossingModel: CrossingModel;
  private envModel: EnvironmentModel;
  private dogHouseModel: DogHouseModel;
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
    dogHouseModel: DogHouseModel,
    soundEngine: SoundEngine
  ) {
    this.camera = camera;
    this.crossingController = crossingController;
    this.trafficManager = trafficManager;
    this.crossingModel = crossingModel;
    this.envModel = envModel;
    this.dogHouseModel = dogHouseModel;
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

      // 1. Check DogHouse & Dog clickable meshes
      const dogHouseIntersects = this.raycaster.intersectObjects(this.dogHouseModel.clickableMeshes, true);
      if (dogHouseIntersects.length > 0) {
        this.createTapEffect(clientX, clientY, '🐶');
        const triggered = this.dogHouseModel.triggerDogBark();
        if (triggered) {
          const dogBarks = [
            'ワンワン！🐶 ボクの おうち だよ！わん！',
            'ワンッ！ワンワン！🦴 でんしゃ だいすき！',
            'バウッ！ワンワン！🐕 きょうも 元気いっぱい！'
          ];
          const msg = dogBarks[Math.floor(Math.random() * dogBarks.length)];
          this.showGuideMessage(msg);
        }
        return;
      }

      // 2. Check Crossing clickable meshes
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

      // 3. Check Road meshes
      const roadIntersects = this.raycaster.intersectObjects(this.envModel.roadMeshes, true);
      if (roadIntersects.length > 0) {
        const hitPoint = roadIntersects[0].point;
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

      // 4. If tapped anywhere near crossing zone
      const allEnvIntersects = this.raycaster.intersectObject(this.envModel.group, true);
      if (allEnvIntersects.length > 0) {
        const pt = allEnvIntersects[0].point;
        if (Math.abs(pt.x) < 8 && Math.abs(pt.z) < 8) {
          this.createTapEffect(clientX, clientY, '⚠️');
          this.soundEngine.playTapSound();
          this.crossingController.triggerCrossingSequence();
          this.showGuideMessage('カンカンカン！ふみきり スタート！🚊');
        } else if (Math.abs(pt.x) < 10) {
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

    window.addEventListener('click', (e: MouseEvent) => {
      handleTap(e.clientX, e.clientY, e.target);
    });

    window.addEventListener('touchend', (e: TouchEvent) => {
      if (e.changedTouches.length > 0) {
        const t = e.changedTouches[0];
        handleTap(t.clientX, t.clientY, e.target);
      }
    });
  }

  public showGuideMessage(text: string, durationMs: number = 3200): void {
    if (!this.guideTextEl) return;

    this.guideTextEl.textContent = text;
    const banner = document.getElementById('guide-banner');
    if (banner) {
      banner.classList.add('visible');
    }

    if (this.guideTimer) {
      clearTimeout(this.guideTimer);
    }

    this.guideTimer = window.setTimeout(() => {
      if (banner) {
        banner.classList.remove('visible');
      }
    }, durationMs);
  }

  private createTapEffect(x: number, y: number, emoji: string): void {
    if (!this.tapEffectsLayer) return;

    const el = document.createElement('div');
    el.className = 'tap-popup';
    el.textContent = emoji;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    this.tapEffectsLayer.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 1000);
  }
}
