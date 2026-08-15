import { SoundEngine } from '../audio/SoundEngine';
import { CrossingController } from '../system/CrossingController';
import { TrafficManager } from '../system/TrafficManager';
import { CameraController, CameraPreset } from '../core/CameraController';
import { SceneManager } from '../core/SceneManager';
import { EnvironmentModel } from '../models/EnvironmentModel';
import { InteractionManager } from '../system/InteractionManager';

export class UIManager {
  private soundEngine: SoundEngine;
  private crossingController: CrossingController;
  private trafficManager: TrafficManager;
  private cameraController: CameraController;
  private sceneManager: SceneManager;
  private envModel: EnvironmentModel;
  private interactionManager: InteractionManager;

  constructor(
    soundEngine: SoundEngine,
    crossingController: CrossingController,
    trafficManager: TrafficManager,
    cameraController: CameraController,
    sceneManager: SceneManager,
    envModel: EnvironmentModel,
    interactionManager: InteractionManager
  ) {
    this.soundEngine = soundEngine;
    this.crossingController = crossingController;
    this.trafficManager = trafficManager;
    this.cameraController = cameraController;
    this.sceneManager = sceneManager;
    this.envModel = envModel;
    this.interactionManager = interactionManager;

    this.bindEvents();
  }

  private bindEvents(): void {
    // 1. Start Button (User interaction requirement for audio)
    const btnStart = document.getElementById('btn-start');
    const startOverlay = document.getElementById('start-overlay');
    if (btnStart && startOverlay) {
      const handleStart = () => {
        this.soundEngine.init();
        this.soundEngine.playTapSound();
        startOverlay.classList.add('hidden');
        this.interactionManager.showGuideMessage('ようこそ！ふみきり や どうろ を タップしてみてね！');
      };

      btnStart.addEventListener('click', handleStart);
      btnStart.addEventListener('pointerdown', handleStart);
      btnStart.addEventListener('touchend', handleStart);
    }

    // 2. Train Action Button
    const btnTrain = document.getElementById('btn-train');
    if (btnTrain) {
      btnTrain.addEventListener('click', () => {
        this.soundEngine.init();
        this.soundEngine.playTapSound();
        if (this.crossingController.state === 'IDLE') {
          this.crossingController.triggerCrossingSequence();
          this.interactionManager.showGuideMessage('でんしゃ が くるよ！カンカンカン！🚃');
        } else {
          this.interactionManager.showGuideMessage('まもなく でんしゃ が つうか します！⚠️');
        }
      });
    }

    // 3. Car Action Button
    const btnCar = document.getElementById('btn-car');
    if (btnCar) {
      btnCar.addEventListener('click', () => {
        this.soundEngine.init();
        this.soundEngine.playTapSound();
        const dir = Math.random() > 0.5 ? 1 : -1;
        const car = this.trafficManager.spawnVehicle(dir);
        if (car) {
          const name = this.trafficManager.getVehicleDisplayName(car.type);
          this.interactionManager.showGuideMessage(`${name} が はしりだしたよ！`);
        } else {
          this.interactionManager.showGuideMessage('くるま が いっぱい はしっているよ！🚗');
        }
      });
    }

    // 4. Camera Preset Button
    const btnCamera = document.getElementById('btn-camera');
    if (btnCamera) {
      const presetLabels: Record<CameraPreset, string> = {
        overview: '全体',
        crossing_close: 'ふみきり',
        driver_view: '運転手',
        train_follow: '電車追尾'
      };

      btnCamera.addEventListener('click', () => {
        this.soundEngine.playTapSound();
        const nextPreset = this.cameraController.cyclePreset();
        const labelEl = btnCamera.querySelector('.sub-label');
        if (labelEl) {
          labelEl.textContent = presetLabels[nextPreset] || 'カメラ';
        }
        this.interactionManager.showGuideMessage(`カメラ: ${presetLabels[nextPreset]} ビュー 🎥`);
      });
    }

    // 5. Time of Day Button
    const btnTime = document.getElementById('btn-time');
    if (btnTime) {
      btnTime.addEventListener('click', () => {
        this.soundEngine.playTapSound();
        const nextTime = this.sceneManager.cycleTimeOfDay();
        const iconEl = btnTime.querySelector('.btn-icon');
        const textEl = btnTime.querySelector('.btn-subtext');

        // Turn house lights on at night and off during daytime/sunset
        this.envModel.setNightMode(nextTime === 'night');

        if (nextTime === 'day') {
          if (iconEl) iconEl.textContent = '☀️';
          if (textEl) textEl.textContent = 'ひる';
          this.interactionManager.showGuideMessage('あかるい おひる になったよ！☀️');
        } else if (nextTime === 'sunset') {
          if (iconEl) iconEl.textContent = '🌅';
          if (textEl) textEl.textContent = 'ゆうがた';
          this.interactionManager.showGuideMessage('きれいな ゆうやけ だね！🌅');
        } else {
          if (iconEl) iconEl.textContent = '🌙';
          if (textEl) textEl.textContent = 'よる';
          this.interactionManager.showGuideMessage('おうちの まど に あかり が ともったよ！🏠✨');
        }
      });
    }

    // 6. Sound Type Selector Button
    const btnSoundType = document.getElementById('btn-sound-type');
    if (btnSoundType) {
      btnSoundType.addEventListener('click', () => {
        this.soundEngine.init();
        this.soundEngine.playTapSound();
        const types: Array<{ id: 'standard_electronic' | 'soft_electronic' | 'mechanical_bell'; label: string; icon: string; name: string }> = [
          { id: 'standard_electronic', label: 'ひょうじゅん', icon: '🔔', name: '日本の標準的な単音電子警報音（700Hz）' },
          { id: 'soft_electronic', label: 'やさしい音', icon: '🎵', name: 'やわらかい単音電子音（650Hz）' },
          { id: 'mechanical_bell', label: 'でんれい式', icon: '🔕', name: '懐かしい電鈴式（鐘の音）' }
        ];

        const curIdx = types.findIndex(t => t.id === this.soundEngine.currentSoundType);
        const nextType = types[(curIdx + 1) % types.length];
        this.soundEngine.currentSoundType = nextType.id;

        const iconEl = btnSoundType.querySelector('.btn-icon');
        const textEl = btnSoundType.querySelector('.btn-subtext');
        if (iconEl) iconEl.textContent = nextType.icon;
        if (textEl) textEl.textContent = nextType.label;

        this.interactionManager.showGuideMessage(`ふみきりの音: ${nextType.name}`);
      });
    }

    // 7. Sound Mute Toggle Button
    const btnSound = document.getElementById('btn-sound');
    if (btnSound) {
      btnSound.addEventListener('click', () => {
        const isMuted = !this.soundEngine.getIsMuted();
        this.soundEngine.setMuted(isMuted);
        const iconEl = btnSound.querySelector('.btn-icon');
        const textEl = btnSound.querySelector('.btn-subtext');

        if (isMuted) {
          if (iconEl) iconEl.textContent = '🔇';
          if (textEl) textEl.textContent = 'ミュート';
          this.interactionManager.showGuideMessage('おと を けしたよ 🔇');
        } else {
          this.soundEngine.playTapSound();
          if (iconEl) iconEl.textContent = '🔊';
          if (textEl) textEl.textContent = 'おと ON';
          this.interactionManager.showGuideMessage('おと を だしたよ 🔊');
        }
      });
    }
  }
}
