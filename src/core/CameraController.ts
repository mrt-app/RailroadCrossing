import * as THREE from 'three';

export type CameraPreset = 'overview' | 'crossing_close' | 'driver_view' | 'train_follow';

export class CameraController {
  public camera: THREE.PerspectiveCamera;
  public currentPreset: CameraPreset = 'overview';

  private targetPosition: THREE.Vector3 = new THREE.Vector3();
  private targetLookAt: THREE.Vector3 = new THREE.Vector3();
  private currentLookAt: THREE.Vector3 = new THREE.Vector3();

  // Pointer drag controls
  private isDragging: boolean = false;
  private previousMousePosition = { x: 0, y: 0 };
  private spherical: THREE.Spherical;
  private isUserInteracting: boolean = false;
  private userInteractionTimer: number = 0;

  constructor() {
    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.5, 300);
    this.spherical = new THREE.Spherical(38, Math.PI / 3.4, Math.PI / 4);

    this.setPreset('overview', true);
    this.setupPointerControls();
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  public setPreset(preset: CameraPreset, immediate: boolean = false): void {
    this.currentPreset = preset;
    this.isUserInteracting = false;

    switch (preset) {
      case 'overview':
        this.targetPosition.set(24, 22, 28);
        this.targetLookAt.set(0, 1.2, 0);
        break;

      case 'crossing_close':
        this.targetPosition.set(10, 4.5, 12);
        this.targetLookAt.set(0, 1.8, 0);
        break;

      case 'driver_view':
        // South road looking North towards crossing
        this.targetPosition.set(-2.2, 3.2, 18);
        this.targetLookAt.set(-2.2, 1.5, 0);
        break;

      case 'train_follow':
        // Looking along track from side
        this.targetPosition.set(-18, 5, 9);
        this.targetLookAt.set(0, 2.0, -2.2);
        break;
    }

    if (immediate) {
      this.camera.position.copy(this.targetPosition);
      this.currentLookAt.copy(this.targetLookAt);
      this.camera.lookAt(this.currentLookAt);
    }
  }

  public cyclePreset(): CameraPreset {
    const presets: CameraPreset[] = ['overview', 'crossing_close', 'driver_view', 'train_follow'];
    const currentIndex = presets.indexOf(this.currentPreset);
    const nextPreset = presets[(currentIndex + 1) % presets.length];
    this.setPreset(nextPreset);
    return nextPreset;
  }

  public update(delta: number, trainPositionX?: number): void {
    // If train follow mode and train is present, smoothly track train
    if (this.currentPreset === 'train_follow' && trainPositionX !== undefined) {
      this.targetLookAt.set(trainPositionX, 1.5, -2.2);
      this.targetPosition.set(trainPositionX + 14, 6, 12);
    }

    // Smooth lerp camera position and lookAt target
    if (!this.isUserInteracting) {
      this.camera.position.lerp(this.targetPosition, Math.min(1.0, delta * 3.5));
      this.currentLookAt.lerp(this.targetLookAt, Math.min(1.0, delta * 3.5));
      this.camera.lookAt(this.currentLookAt);
    }

    if (this.userInteractionTimer > 0) {
      this.userInteractionTimer -= delta;
      if (this.userInteractionTimer <= 0) {
        this.isUserInteracting = false;
      }
    }
  }

  private setupPointerControls(): void {
    const domElement = window;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      // Ignore if clicking on UI buttons
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('.start-overlay')) return;

      this.isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      this.previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!this.isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - this.previousMousePosition.x;
      const deltaY = clientY - this.previousMousePosition.y;

      if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
        this.isUserInteracting = true;
        this.userInteractionTimer = 6.0; // Return to preset after 6s idle

        // Gentle rotate around lookAt point
        const offset = new THREE.Vector3().subVectors(this.camera.position, this.currentLookAt);
        this.spherical.setFromVector3(offset);

        this.spherical.theta -= deltaX * 0.005;
        this.spherical.phi = Math.max(0.2, Math.min(Math.PI / 2.1, this.spherical.phi - deltaY * 0.005));

        offset.setFromSpherical(this.spherical);
        this.camera.position.copy(this.currentLookAt).add(offset);
        this.camera.lookAt(this.currentLookAt);
      }

      this.previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      this.isDragging = false;
    };

    domElement.addEventListener('mousedown', onPointerDown);
    domElement.addEventListener('mousemove', onPointerMove);
    domElement.addEventListener('mouseup', onPointerUp);

    domElement.addEventListener('touchstart', onPointerDown, { passive: true });
    domElement.addEventListener('touchmove', onPointerMove, { passive: true });
    domElement.addEventListener('touchend', onPointerUp, { passive: true });
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }
}
