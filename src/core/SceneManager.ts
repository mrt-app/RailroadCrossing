import * as THREE from 'three';

export type TimeOfDay = 'day' | 'sunset' | 'night';
export type QualityMode = 'fast' | 'high';

export class SceneManager {
  public scene: THREE.Scene;
  public renderer: THREE.WebGLRenderer;
  public dirLight: THREE.DirectionalLight;
  public hemiLight: THREE.HemisphereLight;
  public ambientLight: THREE.AmbientLight;
  public currentTime: TimeOfDay = 'day';
  public qualityMode: QualityMode = 'fast';

  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.scene = new THREE.Scene();

    // Determine default pixel ratio (1.0 on mobile / 1.25 on high-res) for maximum fluidity
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768;
    const defaultDPR = isMobile ? 1.0 : Math.min(window.devicePixelRatio, 1.25);

    // High Performance Ultra-Lightweight WebGL Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: false,
      powerPreference: 'high-performance',
      precision: 'mediump',
      stencil: false,
      depth: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(defaultDPR);
    
    // Disable real-time heavy shadow map by default for 60fps locked performance
    this.renderer.shadowMap.enabled = false;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.toneMapping = THREE.NoToneMapping; // Fastest tone mapping

    this.container.appendChild(this.renderer.domElement);

    // Global Ambient Lighting (Crisp & bright without needing multiple expensive point lights)
    this.ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.75);
    this.scene.add(this.ambientLight);

    // Hemisphere Light (Sky / Ground ambient gradient)
    this.hemiLight = new THREE.HemisphereLight(0xFFFFFF, 0x666666, 0.45);
    this.hemiLight.position.set(0, 50, 0);
    this.scene.add(this.hemiLight);

    // Directional Sunlight
    this.dirLight = new THREE.DirectionalLight(0xFFF9E6, 1.1);
    this.dirLight.position.set(30, 45, 25);
    this.dirLight.castShadow = false; // Off for ultra-fast rendering
    this.scene.add(this.dirLight);

    this.setTimeOfDay('day');
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  public setQualityMode(mode: QualityMode): void {
    this.qualityMode = mode;
    if (mode === 'high') {
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      this.renderer.shadowMap.enabled = true;
      this.dirLight.castShadow = true;
      this.dirLight.shadow.mapSize.width = 1024;
      this.dirLight.shadow.mapSize.height = 1024;
      this.dirLight.shadow.camera.near = 1;
      this.dirLight.shadow.camera.far = 100;
      this.dirLight.shadow.camera.left = -25;
      this.dirLight.shadow.camera.right = 25;
      this.dirLight.shadow.camera.top = 25;
      this.dirLight.shadow.camera.bottom = -25;
      this.dirLight.shadow.bias = -0.001;
    } else {
      // Fast mode (60fps guaranteed on all devices)
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768;
      this.renderer.setPixelRatio(isMobile ? 1.0 : Math.min(window.devicePixelRatio, 1.25));
      this.renderer.shadowMap.enabled = false;
      this.dirLight.castShadow = false;
    }
  }

  public toggleQualityMode(): QualityMode {
    const nextMode = this.qualityMode === 'fast' ? 'high' : 'fast';
    this.setQualityMode(nextMode);
    return this.qualityMode;
  }

  public setTimeOfDay(time: TimeOfDay): void {
    this.currentTime = time;
    switch (time) {
      case 'day':
        this.scene.background = new THREE.Color(0x87CEEB);
        this.scene.fog = new THREE.FogExp2(0x87CEEB, 0.007);
        this.dirLight.color.setHex(0xFFF9E6);
        this.dirLight.intensity = 1.2;
        this.dirLight.position.set(30, 45, 25);
        this.ambientLight.color.setHex(0xFFFFFF);
        this.ambientLight.intensity = 0.75;
        this.hemiLight.intensity = 0.45;
        break;

      case 'sunset':
        this.scene.background = new THREE.Color(0xFFA07A);
        this.scene.fog = new THREE.FogExp2(0xFFA07A, 0.008);
        this.dirLight.color.setHex(0xFF7043);
        this.dirLight.intensity = 1.0;
        this.dirLight.position.set(40, 25, 20);
        this.ambientLight.color.setHex(0xFFCC80);
        this.ambientLight.intensity = 0.65;
        this.hemiLight.intensity = 0.35;
        break;

      case 'night':
        this.scene.background = new THREE.Color(0x0A1128);
        this.scene.fog = new THREE.FogExp2(0x0A1128, 0.010);
        this.dirLight.color.setHex(0x5C6BC0);
        this.dirLight.intensity = 0.4;
        this.dirLight.position.set(20, 40, 20);
        this.ambientLight.color.setHex(0x283593);
        this.ambientLight.intensity = 0.45;
        this.hemiLight.intensity = 0.25;
        break;
    }
  }

  public cycleTimeOfDay(): TimeOfDay {
    if (this.currentTime === 'day') {
      this.setTimeOfDay('sunset');
    } else if (this.currentTime === 'sunset') {
      this.setTimeOfDay('night');
    } else {
      this.setTimeOfDay('day');
    }
    return this.currentTime;
  }

  private onWindowResize(): void {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768;
    if (this.qualityMode === 'fast') {
      this.renderer.setPixelRatio(isMobile ? 1.0 : Math.min(window.devicePixelRatio, 1.25));
    } else {
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    }
  }
}
