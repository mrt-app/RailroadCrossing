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
      // If tapped on UI button, don't raycast
      if (target && ((target as HTMLElement).closest('button') || (target as HTMLElement).closest('.start-overlay'))) {
        return;
      }

      this.soundEngine.init();

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

      // 2. Check Crossing specific meshes (warning lights, signs, barriers)
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

      // 3. Check All Environment (Terrain, Tracks, Roads, Crossing Precinct)
      const allIntersects = this.raycaster.intersectObjects([this.envModel.group, this.crossingModel.group], true);
      if (allIntersects.length > 0) {
        const pt = allIntersects[0].point;

        // 🌟 踏切構内ゾーン判定 (X: ±9.0m, Z: ±6.8m の広大な踏切・線路交差エリア全域)
        // 踏切の遮断機の内側、線路、道路の交差部、踏板、警報機周辺など「踏切構内」のタップはすべて踏切として作動！
        if (Math.abs(pt.x) <= 9.0 && Math.abs(pt.z) <= 6.8) {
          this.createTapEffect(clientX, clientY, '⚠️');
          this.soundEngine.playTapSound();
          const started = this.crossingController.triggerCrossingSequence();
          if (started) {
            this.showGuideMessage('カンカンカン！でんしゃが くるよ！🚃');
          } else {
            this.showGuideMessage('ふみきり ちゅうい！まもなく でんしゃ が きます！');
          }
          return;
        }

        // 🚗 踏切の外側の道路タップ (Z > 6.8 または Z < -6.8)
        if (Math.abs(pt.x) <= 5.8) {
          this.createTapEffect(clientX, clientY, '✨');
          this.soundEngine.playTapSound();
          const preferDirection = (pt.z > 0) ? 1 : -1;
          const car = this.trafficManager.spawnVehicle(preferDirection);
          if (car) {
            const name = this.trafficManager.getVehicleDisplayName(car.type);
            this.showGuideMessage(`${name} が きたよ！🚗`);
          }
          return;
        }

        // 線路の遠くをタップした場合も電車・踏切を作動
        if (Math.abs(pt.z) <= 4.0) {
          this.createTapEffect(clientX, clientY, '🚊');
          this.soundEngine.playTapSound();
          this.crossingController.triggerCrossingSequence();
          this.showGuideMessage('カンカンカン！でんしゃ が はしるよ！');
          return;
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
