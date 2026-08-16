/**
 * Pure In-Memory Synchronous Web Audio Sound Engine
 * Synchronous Float32Array AudioBuffer synthesis (zero external files, zero fetch, zero async decode)
 * Instantaneous zero-latency playback across all browsers and iOS / iPadOS Safari.
 */
export type CrossingSoundType = 'standard_electronic' | 'soft_electronic' | 'mechanical_bell';
export type TrainHornType = 'japanese_train_horn' | 'music_horn' | 'soft_whistle';

export class SoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isMuted: boolean = false;
  private alarmInterval: number | null = null;
  private trainNoiseTimer: number | null = null;

  // Sound selections
  public currentSoundType: CrossingSoundType = 'standard_electronic';
  public currentHornType: TrainHornType = 'japanese_train_horn';

  // Synchronous in-memory AudioBuffers
  private bufferCrossingStandard: AudioBuffer | null = null;
  private bufferCrossingSoft: AudioBuffer | null = null;
  private bufferCrossingMechanical: AudioBuffer | null = null;
  private bufferTrainHorn: AudioBuffer | null = null;
  private bufferMusicHorn: AudioBuffer | null = null;
  private bufferTrainWhistle: AudioBuffer | null = null;
  private bufferCarHorn: AudioBuffer | null = null;
  private bufferTapSound: AudioBuffer | null = null;
  private bufferStationMelody: AudioBuffer | null = null;
  private bufferStationBrake: AudioBuffer | null = null;
  private bufferDogBark: AudioBuffer | null = null;
  private bufferBarrierMotor: AudioBuffer | null = null;
  private soundTrainJointBuffer: AudioBuffer | null = null;
  private bufferFruitPluck: AudioBuffer | null = null;
  private bufferFruitDrop: AudioBuffer | null = null;

  constructor() {
    this.attachUserGestureUnlock();
  }

  public attachUserGestureUnlock(): void {
    const unlock = () => {
      this.init();
      if (this.ctx && this.ctx.state === 'running') {
        window.removeEventListener('touchstart', unlock);
        window.removeEventListener('touchend', unlock);
        window.removeEventListener('pointerdown', unlock);
        window.removeEventListener('click', unlock);
      }
    };

    window.addEventListener('touchstart', unlock, { passive: true });
    window.addEventListener('touchend', unlock, { passive: true });
    window.addEventListener('pointerdown', unlock, { passive: true });
    window.addEventListener('click', unlock, { passive: true });
  }

  public init(): void {
    if (!this.ctx) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.value = 1.0;
        this.masterGain.connect(this.ctx.destination);

        // MediaStream Destination Bridge (Routes Web Audio through HTML5 Media Stream on iPad/iOS Safari)
        try {
          if (typeof this.ctx.createMediaStreamDestination === 'function') {
            const streamDest = this.ctx.createMediaStreamDestination();
            this.masterGain.connect(streamDest);
            const audioEl = document.createElement('audio');
            audioEl.setAttribute('x-webkit-airplay', 'deny');
            audioEl.setAttribute('playsinline', 'true');
            audioEl.srcObject = streamDest.stream;
            audioEl.play().catch(() => {});
          }
        } catch {
          // Ignore
        }

        this.createAllSynchronousBuffers();
      } catch {
        // Ignore
      }
    }

    if (this.ctx && (this.ctx.state === 'suspended' || (this.ctx.state as string) === 'interrupted')) {
      this.ctx.resume().catch(() => {});
    }

    // Direct iOS hardware speaker unlock burst
    if (this.ctx) {
      try {
        const unlockBuffer = this.ctx.createBuffer(1, 1, 22050);
        const unlockSource = this.ctx.createBufferSource();
        unlockSource.buffer = unlockBuffer;
        unlockSource.connect(this.ctx.destination);
        unlockSource.start(0);
      } catch {
        // Ignore
      }
    }
  }

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
    if (this.masterGain) {
      this.masterGain.gain.value = this.isMuted ? 0.0 : 1.0;
    }
    if (this.isMuted) {
      this.stopCrossingAlarm();
      this.stopTrainSound();
    }
  }

  public toggleMute(): boolean {
    this.setMuted(!this.isMuted);
    return this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  /**
   * Play an in-memory AudioBuffer instantly with dedicated gain node
   */
  private playBuffer(buffer: AudioBuffer | null, volume: number = 1.0): void {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || !this.masterGain) return;

    if (!buffer) {
      this.createAllSynchronousBuffers();
      return;
    }

    if (this.ctx.state !== 'running') {
      this.ctx.resume().catch(() => {});
    }

    try {
      const source = this.ctx.createBufferSource();
      source.buffer = buffer;

      const gain = this.ctx.createGain();
      gain.gain.value = Math.max(0, Math.min(1.0, volume));

      source.connect(gain);
      gain.connect(this.masterGain);

      source.start(0);
    } catch {
      // Ignore
    }
  }

  public startCrossingAlarm(): void {
    if (this.isMuted) return;
    this.init();
    if (this.alarmInterval !== null) return;

    const playDing = () => {
      if (this.isMuted) return;
      this.playCrossingBell();
    };

    playDing();
    this.alarmInterval = window.setInterval(playDing, 445);
  }

  public stopCrossingAlarm(): void {
    if (this.alarmInterval !== null) {
      clearInterval(this.alarmInterval);
      this.alarmInterval = null;
    }
  }

  public playCrossingBell(): void {
    let buf = this.bufferCrossingStandard;
    if (this.currentSoundType === 'soft_electronic') buf = this.bufferCrossingSoft;
    if (this.currentSoundType === 'mechanical_bell') buf = this.bufferCrossingMechanical;

    this.playBuffer(buf, 0.90);
  }

  public playTrainHorn(): void {
    let buf = this.bufferTrainHorn;
    if (this.currentHornType === 'music_horn') buf = this.bufferMusicHorn;
    if (this.currentHornType === 'soft_whistle') buf = this.bufferTrainWhistle;

    this.playBuffer(buf, 0.85);
  }

  public startTrainSound(): void {
    if (this.isMuted) return;
    this.init();
    if (this.trainNoiseTimer !== null) return;

    const playJoint = () => {
      if (this.isMuted) return;
      this.playBuffer(this.soundTrainJointBuffer, 0.35);
    };

    playJoint();
    this.trainNoiseTimer = window.setInterval(playJoint, 260);
  }

  public stopTrainSound(): void {
    if (this.trainNoiseTimer !== null) {
      clearInterval(this.trainNoiseTimer);
      this.trainNoiseTimer = null;
    }
  }

  public playCarHorn(): void {
    this.playBuffer(this.bufferCarHorn, 0.80);
  }

  public playTapSound(): void {
    this.playBuffer(this.bufferTapSound, 0.70);
  }

  public playBarrierMotor(): void {
    this.playBuffer(this.bufferBarrierMotor, 0.40);
  }

  public playStationBrakeSound(): void {
    this.playBuffer(this.bufferStationBrake, 0.70);
  }

  public playStationDepartureMelody(): void {
    this.playBuffer(this.bufferStationMelody, 0.80);
  }

  public playDogBark(): void {
    this.playBuffer(this.bufferDogBark, 0.90);
  }

  public playFruitPluck(): void {
    this.playBuffer(this.bufferFruitPluck, 0.85);
  }

  public playFruitDrop(): void {
    this.playBuffer(this.bufferFruitDrop, 0.65);
  }

  // =========================================================================
  // Synchronous Float32Array AudioBuffer Generator
  // =========================================================================

  private createBuffer(sampleRate: number, duration: number, generator: (t: number) => number): AudioBuffer | null {
    if (!this.ctx) return null;
    const numSamples = Math.floor(sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, numSamples, sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < numSamples; i++) {
      const t = i / sampleRate;
      data[i] = Math.max(-1.0, Math.min(1.0, generator(t)));
    }
    return buffer;
  }

  private createAllSynchronousBuffers(): void {
    if (!this.ctx) return;
    const sr = this.ctx.sampleRate || 44100;

    // 1. Standard Crossing Bell (700Hz + 1400Hz)
    this.bufferCrossingStandard = this.createBuffer(sr, 0.44, (t) => {
      const env = Math.exp(-t * 8.0);
      const s1 = Math.sin(2 * Math.PI * 700 * t);
      const s2 = Math.sin(2 * Math.PI * 1400 * t) * 0.35 * Math.exp(-t * 24.0);
      return (s1 + s2) * env * 0.85;
    });

    // 2. Soft Electronic Bell (650Hz)
    this.bufferCrossingSoft = this.createBuffer(sr, 0.46, (t) => {
      const env = Math.exp(-t * 7.5);
      const s1 = Math.sin(2 * Math.PI * 650 * t);
      const s2 = Math.sin(2 * Math.PI * 1300 * t) * 0.20 * Math.exp(-t * 20.0);
      return (s1 + s2) * env * 0.80;
    });

    // 3. Mechanical Bell (780Hz)
    this.bufferCrossingMechanical = this.createBuffer(sr, 0.52, (t) => {
      const env = Math.exp(-t * 6.5);
      const s1 = Math.sin(2 * Math.PI * 780 * t);
      const s2 = Math.sin(2 * Math.PI * 1560 * t) * 0.40 * Math.exp(-t * 18.0);
      const s3 = Math.sin(2 * Math.PI * 2340 * t) * 0.15 * Math.exp(-t * 30.0);
      return (s1 + s2 + s3) * env * 0.75;
    });

    // 4. Japanese Train Air Horn (AW-2 / AW-5)
    this.bufferTrainHorn = this.createBuffer(sr, 0.36, (t) => {
      let env = 0;
      if (t < 0.015) env = t / 0.015;
      else if (t < 0.25) env = 1.0;
      else env = Math.exp(-(t - 0.25) * 25.0);

      const p1 = Math.sin(2 * Math.PI * 330 * t) * 0.65 + Math.sin(2 * Math.PI * 660 * t) * 0.25;
      const p2 = Math.sin(2 * Math.PI * 392 * t) * 0.65 + Math.sin(2 * Math.PI * 784 * t) * 0.25;
      return Math.tanh((p1 + p2) * env * 0.85);
    });

    // 5. Express Train Music Horn ("♪ ファ・ラ・シ・レ・ファ〜")
    this.bufferMusicHorn = this.createBuffer(sr, 1.45, (t) => {
      const notes = [
        { f: 349.23, s: 0.0, d: 0.16 },
        { f: 440.00, s: 0.16, d: 0.16 },
        { f: 493.88, s: 0.32, d: 0.16 },
        { f: 587.33, s: 0.48, d: 0.20 },
        { f: 698.46, s: 0.68, d: 0.70 }
      ];
      let sample = 0;
      for (const n of notes) {
        if (t >= n.s && t < n.s + n.d + 0.1) {
          const nt = t - n.s;
          const env = nt < 0.02 ? nt / 0.02 : Math.exp(-(nt - 0.02) * 5.0);
          sample += (Math.sin(2 * Math.PI * n.f * nt) * 0.7 + Math.sin(2 * Math.PI * n.f * 2 * nt) * 0.2) * env * 0.5;
        }
      }
      return Math.tanh(sample);
    });

    // 6. High Train Whistle ("ピーッ！")
    this.bufferTrainWhistle = this.createBuffer(sr, 0.55, (t) => {
      let env = t < 0.03 ? t / 0.03 : (t < 0.38 ? 1.0 : Math.exp(-(t - 0.38) * 20.0));
      const s1 = Math.sin(2 * Math.PI * 1046.5 * t) * 0.65;
      const s2 = Math.sin(2 * Math.PI * 1318.5 * t) * 0.35;
      return (s1 + s2) * env * 0.70;
    });

    // 7. Car Horn ("プップー！")
    this.bufferCarHorn = this.createBuffer(sr, 0.35, (t) => {
      let env = 0;
      if (t >= 0 && t < 0.12) {
        env = Math.sin((t / 0.12) * Math.PI);
      } else if (t >= 0.16 && t < 0.34) {
        env = Math.sin(((t - 0.16) / 0.18) * Math.PI);
      }
      return Math.sin(2 * Math.PI * 580 * t) * env * 0.75;
    });

    // 8. Tap Sound (Pop chime)
    this.bufferTapSound = this.createBuffer(sr, 0.10, (t) => {
      const f = 400 + (t / 0.10) * 400;
      const env = Math.exp(-t * 30.0);
      return Math.sin(2 * Math.PI * f * t) * env * 0.75;
    });

    // 9. Station Departure Melody ("ピンポンパンポーン♪")
    this.bufferStationMelody = this.createBuffer(sr, 1.15, (t) => {
      const notes = [
        { f: 659.25, s: 0.0, d: 0.20 },
        { f: 830.61, s: 0.22, d: 0.20 },
        { f: 987.77, s: 0.44, d: 0.20 },
        { f: 1318.51, s: 0.66, d: 0.45 }
      ];
      let sample = 0;
      for (const n of notes) {
        if (t >= n.s && t < n.s + n.d + 0.08) {
          const nt = t - n.s;
          const env = nt < 0.02 ? nt / 0.02 : Math.exp(-(nt - 0.02) * 6.5);
          sample += Math.sin(2 * Math.PI * n.f * nt) * env * 0.55;
        }
      }
      return Math.tanh(sample);
    });

    // 10. Station Air Brake ("プシューッ…")
    this.bufferStationBrake = this.createBuffer(sr, 0.75, (t) => {
      const env = t < 0.08 ? t / 0.08 : Math.exp(-(t - 0.08) * 4.5);
      const whiteNoise = Math.random() * 2 - 1;
      const toneMod = Math.sin(2 * Math.PI * (1200 - t * 800) * t);
      return (whiteNoise * 0.7 + toneMod * 0.3) * env * 0.65;
    });

    // 11. Shiba Dog Bark ("ワンワン！バウッ！🐶")
    this.bufferDogBark = this.createBuffer(sr, 0.36, (t) => {
      let sample = 0;
      const barks = [0, 0.16];
      for (const b of barks) {
        if (t >= b && t < b + 0.15) {
          const nt = t - b;
          const env = nt < 0.02 ? nt / 0.02 : Math.exp(-(nt - 0.02) * 22.0);
          const f = 580 - (nt / 0.15) * 290;
          const s1 = Math.sin(2 * Math.PI * f * nt);
          const s2 = Math.sin(2 * Math.PI * f * 1.5 * nt) * 0.4;
          sample += (s1 + s2) * env * 0.8;
        }
      }
      return Math.tanh(sample);
    });

    // 12. Barrier Motor
    this.bufferBarrierMotor = this.createBuffer(sr, 0.40, (t) => {
      const env = t < 0.05 ? t / 0.05 : Math.exp(-(t - 0.05) * 7.0);
      const f = 120 + t * 50;
      return Math.sin(2 * Math.PI * f * t) * env * 0.4;
    });

    // 13. Train Joint ("ガタンゴトン")
    this.soundTrainJointBuffer = this.createBuffer(sr, 0.22, (t) => {
      let sample = 0;
      if (t >= 0 && t < 0.08) {
        const env1 = Math.exp(-t * 35.0);
        sample += Math.sin(2 * Math.PI * 120 * t) * env1 * 0.8;
      }
      if (t >= 0.065 && t < 0.15) {
        const nt = t - 0.065;
        const env2 = Math.exp(-nt * 38.0);
        sample += Math.sin(2 * Math.PI * 100 * nt) * env2 * 0.65;
      }
      return sample;
    });

    // 14. Fruit Pluck ("ぷちっ！ / ぽこっ！" Cute upward pop)
    this.bufferFruitPluck = this.createBuffer(sr, 0.12, (t) => {
      const f = 520 + (t / 0.12) * 440;
      const env = Math.exp(-t * 32.0);
      const s1 = Math.sin(2 * Math.PI * f * t);
      const s2 = Math.sin(2 * Math.PI * f * 2 * t) * 0.3;
      return (s1 + s2) * env * 0.85;
    });

    // 15. Fruit Drop / Bounce ("ぽとん！ / ころん" Soft impact)
    this.bufferFruitDrop = this.createBuffer(sr, 0.15, (t) => {
      const f = 320 - (t / 0.15) * 120;
      const env = Math.exp(-t * 26.0);
      const s1 = Math.sin(2 * Math.PI * f * t);
      return s1 * env * 0.75;
    });
  }
}
