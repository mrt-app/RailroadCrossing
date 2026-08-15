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

    // High performance renderer with optimal pixel ratio
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768;
    const dpr = isMobile ? 1.0 : Math.min(window.devicePixelRatio, 1.25);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
      precision: 'mediump'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(dpr);
    
    // Tightly bounded crisp shadows focused on the crossing intersection
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.toneMapping = THREE.LinearToneMapping;
    this.renderer.toneMappingExposure = 1.05;

    this.container.appendChild(this.renderer.domElement);

    // Rich, warm ambient lighting
    this.ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.68);
    this.scene.add(this.ambientLight);

    this.hemiLight = new THREE.HemisphereLight(0xFFFFFF, 0x546E7A, 0.45);
    this.hemiLight.position.set(0, 30, 0);
    this.scene.add(this.hemiLight);

    // Directional Sunlight with tight 24m bounding frustum (Super crisp 4K-quality shadows at 0 lag!)
    this.dirLight = new THREE.DirectionalLight(0xFFF9E6, 1.25);
    this.dirLight.position.set(22, 32, 18);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.width = 1024;
    this.dirLight.shadow.mapSize.height = 1024;
    this.dirLight.shadow.camera.near = 1;
    this.dirLight.shadow.camera.far = 70;
    this.dirLight.shadow.camera.left = -14;
    this.dirLight.shadow.camera.right = 14;
    this.dirLight.shadow.camera.top = 14;
    this.dirLight.shadow.camera.bottom = -14;
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
        this.scene.fog = new THREE.Fog(0x87CEEB, 28, 55); // Tight focus on crossing!
        this.dirLight.color.setHex(0xFFF9E6);
        this.dirLight.intensity = 1.25;
        this.dirLight.position.set(22, 32, 18);
        this.ambientLight.color.setHex(0xFFFFFF);
        this.ambientLight.intensity = 0.68;
        this.hemiLight.intensity = 0.45;
        break;

      case 'sunset':
        this.scene.background = new THREE.Color(0xFFA07A);
        this.scene.fog = new THREE.Fog(0xFFA07A, 28, 55);
        this.dirLight.color.setHex(0xFF7043);
        this.dirLight.intensity = 1.1;
        this.dirLight.position.set(30, 20, 16);
        this.ambientLight.color.setHex(0xFFCC80);
        this.ambientLight.intensity = 0.55;
        this.hemiLight.intensity = 0.35;
        break;

      case 'night':
        this.scene.background = new THREE.Color(0x0A1128);
        this.scene.fog = new THREE.Fog(0x0A1128, 26, 52);
        this.dirLight.color.setHex(0x5C6BC0);
        this.dirLight.intensity = 0.4;
        this.dirLight.position.set(16, 28, 14);
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
    this.renderer.setPixelRatio(isMobile ? 1.0 : Math.min(window.devicePixelRatio, 1.25));
  }
}
