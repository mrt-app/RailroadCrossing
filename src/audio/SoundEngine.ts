/**
 * Pure Procedural Authentic Japanese Railroad Crossing & Train Sound Engine
 * 100% self-contained Web Audio procedural synthesis (zero external files):
 * - Authentic Single-Pitch Japanese Electronic Crossing Bell ("カン・カン・カン・カン" 700Hz)
 * - Authentic Japanese Train Air Horn ("プァーーーーーーン！" AW-2/AW-5 physical acoustic model)
 * - Famous Japanese Express Music Horn ("♪ ファ・ラ・シ・レ・ファ〜")
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

  // Pre-rendered AudioBuffers for instant zero-latency playback
  private bufferStandardCrossing: AudioBuffer | null = null;
  private bufferSoftCrossing: AudioBuffer | null = null;
  private bufferGongCrossing: AudioBuffer | null = null;
  private bufferTrainHorn: AudioBuffer | null = null;
  private bufferMusicHorn: AudioBuffer | null = null;
  private bufferSoftWhistle: AudioBuffer | null = null;

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

      this.preRenderAllAudioBuffers();
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    // Crucial for iOS / iPadOS Safari:
    // Playing a silent buffer synchronously on user gesture awakens CoreAudio hardware output
    try {
      const unlockBuffer = this.ctx.createBuffer(1, 1, 22050);
      const unlockSource = this.ctx.createBufferSource();
      unlockSource.buffer = unlockBuffer;
      unlockSource.connect(this.ctx.destination);
      unlockSource.start(0);
    } catch {
      // Ignore unlock buffer errors if any
    }
  }

  /**
   * Pre-renders all physical acoustic models into high-precision audio buffers
   */
  private preRenderAllAudioBuffers(): void {
    if (!this.ctx) return;
    const sampleRate = this.ctx.sampleRate;

    // 1. Crossing Bell Buffers (Single pitch 700Hz)
    this.bufferStandardCrossing = this.renderSinglePitchBell(sampleRate, 700, 0.45, 1.0);
    this.bufferSoftCrossing = this.renderSinglePitchBell(sampleRate, 650, 0.48, 0.85);
    this.bufferGongCrossing = this.renderMechanicalGong(sampleRate, 780, 0.55);

    // 2. Authentic Japanese Train Horn (AW-2 / AW-5 Physical Pneumatic Air Horn Model)
    this.bufferTrainHorn = this.renderJapaneseTrainAirHorn(sampleRate);

    // 3. Music Horn & Soft Whistle Buffers
    this.bufferMusicHorn = this.renderMusicHornBuffer(sampleRate);
    this.bufferSoftWhistle = this.renderSoftWhistleBuffer(sampleRate);
  }

  /**
   * Physically synthesizes the authentic Japanese Train Air Horn (AW-2/AW-5 "プァーーーーーーン！")
   * Modeled after real Japanese railway air horns:
   * - Dual resonant air pipes: F4 (~349 Hz) and A4 (~440 Hz) with natural harmonic series
   * - Pneumatic air valve attack and pressure stabilization
   * - Brass horn flare acoustic formant filter
   * - Outdoor open-air reverberation
   */
  /**
   * Authentic Japanese Train Electronic Whistle ("ピィーーーーーッ！" / "ピーーーッ！")
   * JR / Metro / Shinkansen high-frequency electronic whistle (C6: 1046.5Hz & E6: 1318.5Hz)
   * Absolutely zero low-frequency car horn buzz
   */
  /**
   * Authentic Japanese Train Horn (中音域・短笛「ファッ！」 / 約0.3秒)
   * Short, crisp, medium-pitch Japanese railway air horn burst
   */
  private renderJapaneseTrainAirHorn(sampleRate: number): AudioBuffer {
    const duration = 0.32; // Short 320ms burst
    const numSamples = Math.floor(sampleRate * duration);
    const buffer = this.ctx!.createBuffer(2, numSamples, sampleRate);
    const left = buffer.getChannelData(0);
    const right = buffer.getChannelData(1);

    // Medium-pitch Japanese train air horn frequencies (AW-2: E4 ~330Hz & G4 ~392Hz)
    const fLow = 330.0;
    const fHigh = 392.0;

    for (let i = 0; i < numSamples; i++) {
      const t = i / sampleRate;

      // Short, crisp pneumatic envelope (0.3s burst)
      let env = 0;
      if (t < 0.015) {
        env = t / 0.015; // 15ms quick attack
      } else if (t < 0.20) {
        env = 1.0; // short solid hold (185ms)
      } else {
        env = Math.exp(-(t - 0.20) * 22.0); // crisp clean cutoff (approx 80ms)
      }

      // Medium-pitch pipe harmonics
      const p1 = Math.sin(2 * Math.PI * fLow * t) * 0.70 +
                 Math.sin(2 * Math.PI * (fLow * 2) * t) * 0.25 +
                 Math.sin(2 * Math.PI * (fLow * 3) * t) * 0.10;

      const p2 = Math.sin(2 * Math.PI * fHigh * t) * 0.70 +
                 Math.sin(2 * Math.PI * (fHigh * 2) * t) * 0.25 +
                 Math.sin(2 * Math.PI * (fHigh * 3) * t) * 0.10;

      const sample = (p1 * 0.5 + p2 * 0.5) * env * 0.65;
      const cleanTone = Math.tanh(sample);

      left[i] = cleanTone;
      right[i] = cleanTone;
    }

    return buffer;
  }

  /**
   * Pre-renders Japanese Express Train Music Horn ("♪ ファ・ラ・シ・レ・ファ〜")
   */
  private renderMusicHornBuffer(sampleRate: number): AudioBuffer {
    const duration = 1.4;
    const numSamples = Math.floor(sampleRate * duration);
    const buffer = this.ctx!.createBuffer(2, numSamples, sampleRate);
    const left = buffer.getChannelData(0);
    const right = buffer.getChannelData(1);

    const notes = [
      { freq: 349.2, start: 0.0, dur: 0.18 },
      { freq: 440.0, start: 0.16, dur: 0.18 },
      { freq: 493.8, start: 0.32, dur: 0.18 },
      { freq: 587.3, start: 0.48, dur: 0.22 },
      { freq: 698.4, start: 0.68, dur: 0.68 }
    ];

    for (let i = 0; i < numSamples; i++) {
      const t = i / sampleRate;
      let sample = 0;

      for (const n of notes) {
        if (t >= n.start && t < n.start + n.dur + 0.1) {
          const noteT = t - n.start;
          let noteEnv = 0;
          if (noteT < 0.02) {
            noteEnv = noteT / 0.02;
          } else {
            noteEnv = Math.exp(-(noteT - 0.02) * 5.0);
          }
          const sig = Math.sin(2 * Math.PI * n.freq * noteT) * 0.7 +
                      Math.sin(2 * Math.PI * (n.freq * 2) * noteT) * 0.25;
          sample += sig * noteEnv * 0.45;
        }
      }

      left[i] = Math.tanh(sample);
      right[i] = Math.tanh(sample);
    }

    return buffer;
  }

  /**
   * Pre-renders high electronic train whistle ("ピーッ！")
   */
  private renderSoftWhistleBuffer(sampleRate: number): AudioBuffer {
    const duration = 1.0;
    const numSamples = Math.floor(sampleRate * duration);
    const buffer = this.ctx!.createBuffer(2, numSamples, sampleRate);
    const left = buffer.getChannelData(0);
    const right = buffer.getChannelData(1);

    for (let i = 0; i < numSamples; i++) {
      const t = i / sampleRate;
      let env = 0;
      if (t < 0.03) {
        env = t / 0.03;
      } else if (t < 0.6) {
        env = 1.0;
      } else {
        env = Math.exp(-(t - 0.6) * 7.0);
      }

      const sig1 = Math.sin(2 * Math.PI * 1046.5 * t) * 0.65;
      const sig2 = Math.sin(2 * Math.PI * 1318.5 * t) * 0.35;
      const sample = (sig1 + sig2) * env * 0.45;

      left[i] = Math.tanh(sample);
      right[i] = Math.tanh(sample);
    }

    return buffer;
  }

  /**
   * Renders the classic single-pitch Japanese electronic crossing chime
   */
  private renderSinglePitchBell(
    sampleRate: number,
    freq: number,
    duration: number,
    brightness: number
  ): AudioBuffer {
    const numSamples = Math.floor(sampleRate * duration);
    const buffer = this.ctx!.createBuffer(2, numSamples, sampleRate);
    const left = buffer.getChannelData(0);
    const right = buffer.getChannelData(1);

    for (let i = 0; i < numSamples; i++) {
      const t = i / sampleRate;

      // 1. Strike transient
      const envAttack = Math.exp(-t * 400.0);
      const sigAttack = envAttack * Math.sin(2 * Math.PI * (freq * 3.8) * t) * 0.12 * brightness;

      // 2. Harmonic overtone (warm metal resonance)
      const envHarmonic = Math.exp(-t * 22.0);
      const sigHarmonic = envHarmonic * Math.sin(2 * Math.PI * (freq * 2.0) * t) * 0.18 * brightness;

      // 3. Primary tone
      const pitch = freq * (1.0 + 0.008 * Math.exp(-t * 120.0));
      const envFundamental = Math.exp(-t * 8.0);
      const sigFundamental = envFundamental * Math.sin(2 * Math.PI * pitch * t) * 0.90;

      const sample = (sigFundamental + sigHarmonic + sigAttack) * 0.85;
      left[i] = Math.tanh(sample);
      right[i] = Math.tanh(sample);
    }

    return buffer;
  }

  private renderMechanicalGong(sampleRate: number, freq: number, duration: number): AudioBuffer {
    const numSamples = Math.floor(sampleRate * duration);
    const buffer = this.ctx!.createBuffer(2, numSamples, sampleRate);
    const left = buffer.getChannelData(0);
    const right = buffer.getChannelData(1);

    for (let i = 0; i < numSamples; i++) {
      const t = i / sampleRate;
      const mode0 = Math.exp(-t * 6.5) * Math.sin(2 * Math.PI * freq * t) * 0.7;
      const mode1 = Math.exp(-t * 12.0) * Math.sin(2 * Math.PI * (freq * 1.52) * t) * 0.35;
      const mode2 = Math.exp(-t * 24.0) * Math.sin(2 * Math.PI * (freq * 2.76) * t) * 0.25;
      const strike = Math.exp(-t * 280.0) * Math.sin(2 * Math.PI * (freq * 4.2) * t) * 0.2;

      const sample = (mode0 + mode1 + mode2 + strike) * 0.8;
      left[i] = Math.tanh(sample);
      right[i] = Math.tanh(sample);
    }

    return buffer;
  }

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(muted ? 0 : 1.0, this.ctx.currentTime);
    }
    if (this.isMuted) {
      this.stopCrossingAlarm();
      this.stopTrainSound();
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public startCrossingAlarm(): void {
    if (this.isMuted) return;
    this.init();
    if (this.alarmInterval !== null) return;

    const playDing = () => {
      if (this.isMuted) return;
      this.playCrossingBellBuffer();
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

  private playCrossingBellBuffer(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    let buffer = this.bufferStandardCrossing;
    if (this.currentSoundType === 'soft_electronic') {
      buffer = this.bufferSoftCrossing;
    } else if (this.currentSoundType === 'mechanical_bell') {
      buffer = this.bufferGongCrossing;
    }

    if (!buffer) return;

    const source = this.ctx.createBufferSource();
    source.buffer = buffer;

    const gainNode = this.ctx.createGain();
    gainNode.gain.setValueAtTime(0.65, this.ctx.currentTime);

    source.connect(gainNode);
    gainNode.connect(this.masterGain);

    source.start();
  }

  /**
   * Play Train Horn
   */
  public playTrainHorn(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    this.init();

    let buffer = this.bufferTrainHorn;
    if (this.currentHornType === 'music_horn') {
      buffer = this.bufferMusicHorn;
    } else if (this.currentHornType === 'soft_whistle') {
      buffer = this.bufferSoftWhistle;
    }

    if (!buffer) return;

    const source = this.ctx.createBufferSource();
    source.buffer = buffer;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.75, this.ctx.currentTime);

    source.connect(gain);
    gain.connect(this.masterGain);

    source.start();
  }

  /**
   * Train Track Running Sound ("ガタンゴトン、ガタンゴトン")
   */
  public startTrainSound(): void {
    if (this.isMuted) return;
    this.init();
    if (this.trainNoiseTimer !== null) return;

    const playJointHit = () => {
      if (!this.ctx || !this.masterGain || this.isMuted) return;
      const now = this.ctx.currentTime;

      const playBogie = (time: number, vol: number, pitch: number) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(pitch, time);
        osc.frequency.exponentialRampToValueAtTime(35, time + 0.07);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(300, time);

        gain.gain.setValueAtTime(vol, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.07);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        osc.start(time);
        osc.stop(time + 0.08);
      };

      playBogie(now, 0.22, 130);
      setTimeout(() => {
        if (this.ctx) playBogie(this.ctx.currentTime, 0.18, 100);
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

  public playCarHorn(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    this.init();
    const now = this.ctx.currentTime;

    const playBeep = (timeOffset: number, duration: number) => {
      if (!this.ctx || !this.masterGain) return;
      const t = now + timeOffset;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(580, t);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.18, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + duration + 0.02);
    };

    playBeep(0, 0.12);
    playBeep(0.16, 0.15);
  }

  public playBarrierMotor(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.linearRampToValueAtTime(180, now + 0.4);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.04, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.45);
  }

  public playTapSound(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.1);
  }

  public playStationBrakeSound(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    this.init();
    const now = this.ctx.currentTime;
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
    filter.frequency.exponentialRampToValueAtTime(450, now + 0.75);
    filter.Q.setValueAtTime(2.5, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.07, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(now);
    noise.stop(now + 0.8);
  }

  public playStationDepartureMelody(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    this.init();
    const notes = [
      { freq: 659.25, time: 0, dur: 0.20 },    // E5
      { freq: 830.61, time: 0.22, dur: 0.20 }, // G#5
      { freq: 987.77, time: 0.44, dur: 0.20 }, // B5
      { freq: 1318.51, time: 0.66, dur: 0.42 } // E6
    ];

    const now = this.ctx.currentTime;
    notes.forEach(n => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(n.freq, now + n.time);

      gain.gain.setValueAtTime(0.001, now + n.time);
      gain.gain.linearRampToValueAtTime(0.08, now + n.time + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + n.time + n.dur);

      osc.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(now + n.time);
      osc.stop(now + n.time + n.dur + 0.05);
    });
  }

  public playDogBark(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    this.init();
    const now = this.ctx.currentTime;

    const barks = [0, 0.16];
    barks.forEach(offset => {
      const t = now + offset;
      const osc = this.ctx!.createOscillator();
      const oscHarmonic = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(580, t);
      osc.frequency.exponentialRampToValueAtTime(290, t + 0.13);

      oscHarmonic.type = 'triangle';
      oscHarmonic.frequency.setValueAtTime(870, t);
      oscHarmonic.frequency.exponentialRampToValueAtTime(435, t + 0.13);

      const filter = this.ctx!.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, t);
      filter.frequency.exponentialRampToValueAtTime(450, t + 0.13);
      filter.Q.setValueAtTime(3.5, t);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.18, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);

      osc.connect(filter);
      oscHarmonic.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(t);
      oscHarmonic.start(t);
      osc.stop(t + 0.15);
      oscHarmonic.stop(t + 0.15);
    });
  }
}
