/**
 * Dual-Engine Procedural Railroad Crossing & Train Sound System
 * 100% self-contained in-memory synthesized Base64 WAV HTML5 Audio & Web Audio buffers
 * Guaranteed native hardware playback across iPadOS / iOS Safari, Mac, Windows, and Android.
 */
export type CrossingSoundType = 'standard_electronic' | 'soft_electronic' | 'mechanical_bell';
export type TrainHornType = 'japanese_train_horn' | 'music_horn' | 'soft_whistle';

interface SoundItem {
  dataUri: string;
  buffer: AudioBuffer | null;
}

export class SoundEngine {
  private isMuted: boolean = false;
  private alarmInterval: number | null = null;
  private trainNoiseTimer: number | null = null;
  private ctx: AudioContext | null = null;

  // Sound selections
  public currentSoundType: CrossingSoundType = 'standard_electronic';
  public currentHornType: TrainHornType = 'japanese_train_horn';

  // Sound Assets (Base64 Data URIs & AudioBuffers)
  private soundCrossingStandard: SoundItem = { dataUri: '', buffer: null };
  private soundCrossingSoft: SoundItem = { dataUri: '', buffer: null };
  private soundCrossingMechanical: SoundItem = { dataUri: '', buffer: null };
  private soundTrainHorn: SoundItem = { dataUri: '', buffer: null };
  private soundMusicHorn: SoundItem = { dataUri: '', buffer: null };
  private soundTrainWhistle: SoundItem = { dataUri: '', buffer: null };
  private soundCarHorn: SoundItem = { dataUri: '', buffer: null };
  private soundTapSound: SoundItem = { dataUri: '', buffer: null };
  private soundStationMelody: SoundItem = { dataUri: '', buffer: null };
  private soundStationBrake: SoundItem = { dataUri: '', buffer: null };
  private soundDogBark: SoundItem = { dataUri: '', buffer: null };
  private soundBarrierMotor: SoundItem = { dataUri: '', buffer: null };
  private soundTrainJoint: SoundItem = { dataUri: '', buffer: null };

  constructor() {
    this.synthesizeAllSounds();
    this.attachUserGestureUnlock();
  }

  public attachUserGestureUnlock(): void {
    const unlock = () => {
      this.init();
      // Play 1-sample tap sound on first user touch to wake audio hardware
      this.playTapSound();

      window.removeEventListener('touchstart', unlock);
      window.removeEventListener('touchend', unlock);
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('click', unlock);
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
        this.populateAudioBuffers();
      } catch {
        // Ignore
      }
    }
    if (this.ctx && (this.ctx.state === 'suspended' || (this.ctx.state as string) === 'interrupted')) {
      this.ctx.resume().catch(() => {});
    }
  }

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
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
   * Universal audio player:
   * 1. Plays Base64 Data URI through HTML5 Audio element (works on iOS Safari regardless of WebKit Web Audio state).
   * 2. Plays AudioBuffer through Web Audio API if running.
   */
  private playSound(item: SoundItem, volume: number = 1.0): void {
    if (this.isMuted || !item || !item.dataUri) return;

    // 1. HTML5 Audio (Base64 WAV)
    try {
      const audio = new Audio(item.dataUri);
      audio.volume = Math.max(0, Math.min(1.0, volume));
      audio.play().catch(() => {});
    } catch {
      // Ignore
    }

    // 2. Web Audio API (if active)
    if (this.ctx && this.ctx.state === 'running' && item.buffer) {
      try {
        const source = this.ctx.createBufferSource();
        source.buffer = item.buffer;
        const gain = this.ctx.createGain();
        gain.gain.value = volume;
        source.connect(gain);
        gain.connect(this.ctx.destination);
        source.start(0);
      } catch {
        // Ignore
      }
    }
  }

  /**
   * Crossing Alarm Bell ("カン・カン・カン・カン")
   */
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

  /**
   * Electronic Crossing Bell ("カン！" 700Hz)
   */
  public playCrossingBell(): void {
    let item = this.soundCrossingStandard;
    if (this.currentSoundType === 'soft_electronic') item = this.soundCrossingSoft;
    if (this.currentSoundType === 'mechanical_bell') item = this.soundCrossingMechanical;

    this.playSound(item, 0.90);
  }

  /**
   * Train Horn ("プァーーーーーーン！" AW-2/AW-5 / Music Horn / Whistle)
   */
  public playTrainHorn(): void {
    let item = this.soundTrainHorn;
    if (this.currentHornType === 'music_horn') item = this.soundMusicHorn;
    if (this.currentHornType === 'soft_whistle') item = this.soundTrainWhistle;

    this.playSound(item, 0.85);
  }

  /**
   * Train Wheel Joint Sound ("ガタンゴトン")
   */
  public startTrainSound(): void {
    if (this.isMuted) return;
    if (this.trainNoiseTimer !== null) return;

    const playJoint = () => {
      if (this.isMuted) return;
      this.playSound(this.soundTrainJoint, 0.35);
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
    this.playSound(this.soundCarHorn, 0.80);
  }

  public playTapSound(): void {
    this.playSound(this.soundTapSound, 0.70);
  }

  public playBarrierMotor(): void {
    this.playSound(this.soundBarrierMotor, 0.40);
  }

  public playStationBrakeSound(): void {
    this.playSound(this.soundStationBrake, 0.70);
  }

  public playStationDepartureMelody(): void {
    this.playSound(this.soundStationMelody, 0.80);
  }

  public playDogBark(): void {
    this.playSound(this.soundDogBark, 0.90);
  }

  // =========================================================================
  // Pure JavaScript Procedural Base64 WAV Synthesis
  // =========================================================================

  private synthesizeAllSounds(): void {
    const sr = 22050; // Standard 22.05kHz 16-bit PCM

    // 1. Standard Crossing Bell ("カン！" 700Hz + 1400Hz)
    this.soundCrossingStandard = this.createSound(sr, 0.44, (t) => {
      const env = Math.exp(-t * 8.0);
      const s1 = Math.sin(2 * Math.PI * 700 * t);
      const s2 = Math.sin(2 * Math.PI * 1400 * t) * 0.35 * Math.exp(-t * 24.0);
      return (s1 + s2) * env * 0.85;
    });

    // 2. Soft Electronic Bell (650Hz)
    this.soundCrossingSoft = this.createSound(sr, 0.46, (t) => {
      const env = Math.exp(-t * 7.5);
      const s1 = Math.sin(2 * Math.PI * 650 * t);
      const s2 = Math.sin(2 * Math.PI * 1300 * t) * 0.20 * Math.exp(-t * 20.0);
      return (s1 + s2) * env * 0.80;
    });

    // 3. Mechanical Bell (780Hz)
    this.soundCrossingMechanical = this.createSound(sr, 0.52, (t) => {
      const env = Math.exp(-t * 6.5);
      const s1 = Math.sin(2 * Math.PI * 780 * t);
      const s2 = Math.sin(2 * Math.PI * 1560 * t) * 0.40 * Math.exp(-t * 18.0);
      const s3 = Math.sin(2 * Math.PI * 2340 * t) * 0.15 * Math.exp(-t * 30.0);
      return (s1 + s2 + s3) * env * 0.75;
    });

    // 4. Authentic Japanese Train Air Horn (AW-2 / AW-5 "プァーーーン！")
    this.soundTrainHorn = this.createSound(sr, 0.36, (t) => {
      let env = 0;
      if (t < 0.015) env = t / 0.015;
      else if (t < 0.25) env = 1.0;
      else env = Math.exp(-(t - 0.25) * 25.0);

      const p1 = Math.sin(2 * Math.PI * 330 * t) * 0.65 + Math.sin(2 * Math.PI * 660 * t) * 0.25;
      const p2 = Math.sin(2 * Math.PI * 392 * t) * 0.65 + Math.sin(2 * Math.PI * 784 * t) * 0.25;
      return Math.tanh((p1 + p2) * env * 0.85);
    });

    // 5. Express Train Music Horn ("♪ ファ・ラ・シ・レ・ファ〜")
    this.soundMusicHorn = this.createSound(sr, 1.45, (t) => {
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
    this.soundTrainWhistle = this.createSound(sr, 0.55, (t) => {
      let env = t < 0.03 ? t / 0.03 : (t < 0.38 ? 1.0 : Math.exp(-(t - 0.38) * 20.0));
      const s1 = Math.sin(2 * Math.PI * 1046.5 * t) * 0.65;
      const s2 = Math.sin(2 * Math.PI * 1318.5 * t) * 0.35;
      return (s1 + s2) * env * 0.70;
    });

    // 7. Car Horn ("プップー！")
    this.soundCarHorn = this.createSound(sr, 0.35, (t) => {
      let env = 0;
      if (t >= 0 && t < 0.12) {
        env = Math.sin((t / 0.12) * Math.PI);
      } else if (t >= 0.16 && t < 0.34) {
        env = Math.sin(((t - 0.16) / 0.18) * Math.PI);
      }
      return Math.sin(2 * Math.PI * 580 * t) * env * 0.75;
    });

    // 8. Tap Sound (Pop chime)
    this.soundTapSound = this.createSound(sr, 0.10, (t) => {
      const f = 400 + (t / 0.10) * 400;
      const env = Math.exp(-t * 30.0);
      return Math.sin(2 * Math.PI * f * t) * env * 0.75;
    });

    // 9. Station Departure Melody ("ピンポンパンポーン♪")
    this.soundStationMelody = this.createSound(sr, 1.15, (t) => {
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
    this.soundStationBrake = this.createSound(sr, 0.75, (t) => {
      const env = t < 0.08 ? t / 0.08 : Math.exp(-(t - 0.08) * 4.5);
      const whiteNoise = Math.random() * 2 - 1;
      const toneMod = Math.sin(2 * Math.PI * (1200 - t * 800) * t);
      return (whiteNoise * 0.7 + toneMod * 0.3) * env * 0.65;
    });

    // 11. Shiba Dog Bark ("ワンワン！バウッ！🐶")
    this.soundDogBark = this.createSound(sr, 0.36, (t) => {
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
    this.soundBarrierMotor = this.createSound(sr, 0.40, (t) => {
      const env = t < 0.05 ? t / 0.05 : Math.exp(-(t - 0.05) * 7.0);
      const f = 120 + t * 50;
      return Math.sin(2 * Math.PI * f * t) * env * 0.4;
    });

    // 13. Train Joint ("ガタンゴトン")
    this.soundTrainJoint = this.createSound(sr, 0.22, (t) => {
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
  }

  private populateAudioBuffers(): void {
    if (!this.ctx) return;
    const allSounds = [
      this.soundCrossingStandard,
      this.soundCrossingSoft,
      this.soundCrossingMechanical,
      this.soundTrainHorn,
      this.soundMusicHorn,
      this.soundTrainWhistle,
      this.soundCarHorn,
      this.soundTapSound,
      this.soundStationMelody,
      this.soundStationBrake,
      this.soundDogBark,
      this.soundBarrierMotor,
      this.soundTrainJoint
    ];

    allSounds.forEach(item => {
      if (item && item.dataUri) {
        this.decodeDataUriToBuffer(item.dataUri).then(buf => {
          item.buffer = buf;
        }).catch(() => {});
      }
    });
  }

  private async decodeDataUriToBuffer(dataUri: string): Promise<AudioBuffer | null> {
    if (!this.ctx) return null;
    try {
      const res = await fetch(dataUri);
      const arrayBuf = await res.arrayBuffer();
      return await this.ctx.decodeAudioData(arrayBuf);
    } catch {
      return null;
    }
  }

  private createSound(sampleRate: number, duration: number, generator: (t: number) => number): SoundItem {
    const numSamples = Math.floor(sampleRate * duration);
    const buffer = new ArrayBuffer(44 + numSamples * 2);
    const view = new DataView(buffer);

    // RIFF header
    this.writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + numSamples * 2, true);
    this.writeString(view, 8, 'WAVE');

    // fmt chunk
    this.writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true); // PCM
    view.setUint16(22, 1, true); // Mono
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);

    // data chunk
    this.writeString(view, 36, 'data');
    view.setUint32(40, numSamples * 2, true);

    // 16-bit PCM samples
    let offset = 44;
    for (let i = 0; i < numSamples; i++, offset += 2) {
      const t = i / sampleRate;
      const s = Math.max(-1.0, Math.min(1.0, generator(t)));
      view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
    }

    // Convert to Base64 in safe chunks
    const bytes = new Uint8Array(buffer);
    let binary = '';
    const chunkSize = 8192;
    for (let i = 0; i < bytes.length; i += chunkSize) {
      const chunk = bytes.subarray(i, i + chunkSize);
      binary += String.fromCharCode.apply(null, Array.from(chunk));
    }
    const dataUri = 'data:audio/wav;base64,' + btoa(binary);

    return { dataUri, buffer: null };
  }

  private writeString(view: DataView, offset: number, string: string): void {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }
}
