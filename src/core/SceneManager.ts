import * as THREE from 'three';

export type TimeOfDay = 'day' | 'sunset' | 'night';

export class SceneManager {
  public scene: THREE.Scene;
  public renderer: THREE.WebGLRenderer;
  public dirLight: THREE.DirectionalLight;
  public hemiLight: THREE.HemisphereLight;
  public ambientLight: THREE.AmbientLight;
  public currentTime: TimeOfDay = 'day';

  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.scene = new THREE.Scene();

    // High Performance WebGL Renderer Setup
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
      precision: 'mediump'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // Limit pixel ratio to 1.5 for ultra-smooth 60fps even on 4K / mobile screens
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap; // Fast & crisp shadows
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;

    this.container.appendChild(this.renderer.domElement);

    // Setup Lights
    this.ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.55);
    this.scene.add(this.ambientLight);

    this.hemiLight = new THREE.HemisphereLight(0xFFFFFF, 0x444444, 0.4);
    this.hemiLight.position.set(0, 50, 0);
    this.scene.add(this.hemiLight);

    // Directional sunlight with optimized shadow map
    this.dirLight = new THREE.DirectionalLight(0xFFF9E6, 1.25);
    this.dirLight.position.set(30, 40, 25);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.width = 1024; // 1024x1024 (4x faster than 2048)
    this.dirLight.shadow.mapSize.height = 1024;
    this.dirLight.shadow.camera.near = 1;
    this.dirLight.shadow.camera.far = 110;
    this.dirLight.shadow.camera.left = -30;
    this.dirLight.shadow.camera.right = 30;
    this.dirLight.shadow.camera.top = 30;
    this.dirLight.shadow.camera.bottom = -30;
    this.dirLight.shadow.bias = -0.0008;
    this.scene.add(this.dirLight);

    this.setTimeOfDay('day');
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  public setTimeOfDay(time: TimeOfDay): void {
    this.currentTime = time;
    switch (time) {
      case 'day':
        this.scene.background = new THREE.Color(0x87CEEB);
        this.scene.fog = new THREE.FogExp2(0x87CEEB, 0.008);
        this.dirLight.color.setHex(0xFFF9E6);
        this.dirLight.intensity = 1.3;
        this.dirLight.position.set(30, 40, 25);
        this.ambientLight.color.setHex(0xFFFFFF);
        this.ambientLight.intensity = 0.55;
        this.hemiLight.intensity = 0.4;
        break;

      case 'sunset':
        this.scene.background = new THREE.Color(0xFFA07A);
        this.scene.fog = new THREE.FogExp2(0xFFA07A, 0.009);
        this.dirLight.color.setHex(0xFF7043);
        this.dirLight.intensity = 1.1;
        this.dirLight.position.set(40, 20, 20);
        this.ambientLight.color.setHex(0xFFCC80);
        this.ambientLight.intensity = 0.45;
        this.hemiLight.intensity = 0.3;
        break;

      case 'night':
        this.scene.background = new THREE.Color(0x0A1128);
        this.scene.fog = new THREE.FogExp2(0x0A1128, 0.012);
        this.dirLight.color.setHex(0x5C6BC0);
        this.dirLight.intensity = 0.35;
        this.dirLight.position.set(20, 40, 20);
        this.ambientLight.color.setHex(0x1A237E);
        this.ambientLight.intensity = 0.25;
        this.hemiLight.intensity = 0.15;
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
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  }
}
