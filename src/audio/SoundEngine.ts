/**
 * Pure Procedural Authentic Japanese Railroad Crossing & Train Sound Engine
 * 100% self-contained Web Audio procedural synthesis (zero external assets):
 * - Authentic Single-Pitch Japanese Electronic Crossing Bell ("カン・カン・カン・カン" 700Hz)
 * - Authentic Japanese Train Air Horn ("プァーーーーーーン！" AW-2/AW-5 physical acoustic model)
 * - Famous Japanese Express Music Horn ("♪ ファ・ラ・シ・レ・ファ〜")
 * - Bulletproof iOS/iPadOS Safari compatibility using setTargetAtTime
 */
export type CrossingSoundType = 'standard_electronic' | 'soft_electronic' | 'mechanical_bell';
export type TrainHornType = 'japanese_train_horn' | 'music_horn' | 'soft_whistle';

export class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private alarmInterval: number | null = null;
  private trainNoiseTimer: number | null = null;
  private masterGain: GainNode | null = null;

  // Sound selections
  public currentSoundType: CrossingSoundType = 'standard_electronic';
  public currentHornType: TrainHornType = 'japanese_train_horn';

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
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended' || (this.ctx.state as string) === 'interrupted') {
      this.ctx.resume().catch(() => {});
    }

    // Direct iOS hardware speaker unlock burst
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

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
    if (this.masterGain && this.ctx) {
      const now = this.getAudioTime();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0.0 : 1.0, now);
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

  private getAudioTime(): number {
    if (!this.ctx) return 0;
    if (this.ctx.state !== 'running') {
      this.ctx.resume().catch(() => {});
    }
    return Math.max(this.ctx.currentTime, 0.01) + 0.015;
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
   * Direct Procedural Electronic Crossing Bell ("カン！" 700Hz + Dual Resonance)
   */
  public playCrossingBell(): void {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || !this.masterGain) return;

    const now = this.getAudioTime();

    let baseFreq = 700.0;
    let decayTime = 0.44;
    if (this.currentSoundType === 'soft_electronic') {
      baseFreq = 650.0;
      decayTime = 0.46;
    } else if (this.currentSoundType === 'mechanical_bell') {
      baseFreq = 780.0;
      decayTime = 0.52;
    }

    // Fundamental Tone (純粋な700Hz正弦波)
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(baseFreq, now);

    gain1.gain.setValueAtTime(0.0001, now);
    gain1.gain.linearRampToValueAtTime(0.70, now + 0.006);
    gain1.gain.setTargetAtTime(0.0001, now + 0.006, decayTime / 4.0);

    osc1.connect(gain1);
    gain1.connect(this.masterGain);

    // Resonant Second Harmonic (硬質な金属アタック成分)
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(baseFreq * 2.02, now);

    gain2.gain.setValueAtTime(0.0001, now);
    gain2.gain.linearRampToValueAtTime(0.28, now + 0.004);
    gain2.gain.setTargetAtTime(0.0001, now + 0.004, 0.035);

    osc2.connect(gain2);
    gain2.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + decayTime + 0.08);
    osc2.stop(now + 0.20);
  }

  /**
   * Train Horn ("プァーーーーーーン！" AW-2/AW-5 Air Horn / Music Horn / Whistle)
   */
  public playTrainHorn(): void {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || !this.masterGain) return;

    const now = this.getAudioTime();

    if (this.currentHornType === 'music_horn') {
      this.playMusicHorn(now);
    } else if (this.currentHornType === 'soft_whistle') {
      this.playTrainWhistle(now);
    } else {
      this.playAirHorn(now);
    }
  }

  /**
   * Authentic Japanese Train Air Horn (AW-2 / AW-5 "プァーーーン！")
   */
  private playAirHorn(now: number): void {
    if (!this.ctx || !this.masterGain) return;

    const f1 = 330.0; // E4
    const f2 = 392.0; // G4
    const duration = 0.38;

    [f1, f2].forEach(freq => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now);

      const filter = this.ctx!.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.26, now + 0.02);
      gain.gain.setValueAtTime(0.24, now + 0.26);
      gain.gain.setTargetAtTime(0.0001, now + 0.26, 0.03);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(now);
      osc.stop(now + duration + 0.08);
    });
  }

  /**
   * Japanese Express Train Music Horn ("♪ ファ・ラ・シ・レ・ファ〜")
   */
  private playMusicHorn(now: number): void {
    if (!this.ctx || !this.masterGain) return;

    const notes = [
      { freq: 349.23, time: 0.0, dur: 0.16 }, // F4
      { freq: 440.00, time: 0.16, dur: 0.16 }, // A4
      { freq: 493.88, time: 0.32, dur: 0.16 }, // B4
      { freq: 587.33, time: 0.48, dur: 0.20 }, // D5
      { freq: 698.46, time: 0.68, dur: 0.65 }  // F5
    ];

    notes.forEach(n => {
      const t = now + n.time;
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(n.freq, t);

      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.linearRampToValueAtTime(0.26, t + 0.02);
      gain.gain.setTargetAtTime(0.0001, t + 0.02, n.dur / 3.0);

      osc.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(t);
      osc.stop(t + n.dur + 0.08);
    });
  }

  /**
   * High Electronic Whistle ("ピィーーーーッ！")
   */
  private playTrainWhistle(now: number): void {
    if (!this.ctx || !this.masterGain) return;

    const duration = 0.55;
    [1046.5, 1318.5].forEach(freq => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.22, now + 0.03);
      gain.gain.setValueAtTime(0.20, now + 0.35);
      gain.gain.setTargetAtTime(0.0001, now + 0.35, 0.04);

      osc.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(now);
      osc.stop(now + duration + 0.08);
    });
  }

  /**
   * Train Wheel Joint Sound ("ガタンゴトン")
   */
  public startTrainSound(): void {
    if (this.isMuted) return;
    this.init();
    if (this.trainNoiseTimer !== null) return;

    const playJointHit = () => {
      if (!this.ctx || !this.masterGain || this.isMuted) return;
      const now = this.getAudioTime();

      const playBogie = (time: number, vol: number, pitch: number) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(pitch, time);
        osc.frequency.setTargetAtTime(35, time, 0.02);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(300, time);

        gain.gain.setValueAtTime(vol, time);
        gain.gain.setTargetAtTime(0.0001, time, 0.02);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        osc.start(time);
        osc.stop(time + 0.08);
      };

      playBogie(now, 0.24, 130);
      setTimeout(() => {
        if (this.ctx) playBogie(this.getAudioTime(), 0.20, 100);
      }, 65);
    };

    playJointHit();
    this.trainNoiseTimer = window.setInterval(playJointHit, 250);
  }

  public stopTrainSound(): void {
    if (this.trainNoiseTimer !== null) {
      clearInterval(this.trainNoiseTimer);
      this.trainNoiseTimer = null;
    }
  }

  /**
   * Car Horn ("プップー！")
   */
  public playCarHorn(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    this.init();
    const now = this.getAudioTime();

    const playBeep = (timeOffset: number, duration: number) => {
      if (!this.ctx || !this.masterGain) return;
      const t = now + timeOffset;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(580, t);

      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.linearRampToValueAtTime(0.20, t + 0.015);
      gain.gain.setTargetAtTime(0.0001, t + 0.015, duration / 3.0);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + duration + 0.05);
    };

    playBeep(0, 0.12);
    playBeep(0.16, 0.18);
  }

  /**
   * Tap Interaction Sound (Pop chime)
   */
  public playTapSound(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    this.init();
    const now = this.getAudioTime();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.setTargetAtTime(800, now, 0.025);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.setTargetAtTime(0.0001, now, 0.025);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.12);
  }

  /**
   * Crossing Barrier Motor Sound
   */
  public playBarrierMotor(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    this.init();
    const now = this.getAudioTime();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.linearRampToValueAtTime(140, now + 0.4);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.05, now + 0.05);
    gain.gain.setTargetAtTime(0.0001, now + 0.05, 0.1);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.45);
  }

  /**
   * Station Air Brake Release ("プシューッ…")
   */
  public playStationBrakeSound(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    this.init();
    const now = this.getAudioTime();
    const bufferSize = Math.floor(this.ctx.sampleRate * 0.8);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.frequency.setTargetAtTime(450, now, 0.2);
    filter.Q.setValueAtTime(2.5, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.09, now + 0.08);
    gain.gain.setTargetAtTime(0.0001, now + 0.08, 0.18);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(now);
    noise.stop(now + 0.85);
  }

  /**
   * Station Departure Melody ("ピンポンパンポーン♪")
   */
  public playStationDepartureMelody(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    this.init();
    const notes = [
      { freq: 659.25, time: 0, dur: 0.20 },    // E5
      { freq: 830.61, time: 0.22, dur: 0.20 }, // G#5
      { freq: 987.77, time: 0.44, dur: 0.20 }, // B5
      { freq: 1318.51, time: 0.66, dur: 0.42 } // E6
    ];

    const now = this.getAudioTime();
    notes.forEach(n => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(n.freq, now + n.time);

      gain.gain.setValueAtTime(0.0001, now + n.time);
      gain.gain.linearRampToValueAtTime(0.14, now + n.time + 0.03);
      gain.gain.setTargetAtTime(0.0001, now + n.time + 0.03, n.dur / 3.0);

      osc.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(now + n.time);
      osc.stop(now + n.time + n.dur + 0.08);
    });
  }

  /**
   * Shiba Dog Bark ("ワン！ワン！バウッ！🐶🎵")
   */
  public playDogBark(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    this.init();
    const now = this.getAudioTime();

    const barks = [0, 0.16];
    barks.forEach(offset => {
      const t = now + offset;
      const osc = this.ctx!.createOscillator();
      const oscHarmonic = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(580, t);
      osc.frequency.setTargetAtTime(290, t, 0.04);

      oscHarmonic.type = 'triangle';
      oscHarmonic.frequency.setValueAtTime(870, t);
      oscHarmonic.frequency.setTargetAtTime(435, t, 0.04);

      const filter = this.ctx!.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, t);
      filter.frequency.setTargetAtTime(450, t, 0.04);
      filter.Q.setValueAtTime(3.5, t);

      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.linearRampToValueAtTime(0.26, t + 0.02);
      gain.gain.setTargetAtTime(0.0001, t + 0.02, 0.035);

      osc.connect(filter);
      oscHarmonic.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(t);
      oscHarmonic.start(t);
      osc.stop(t + 0.18);
      oscHarmonic.stop(t + 0.18);
    });
  }
}
