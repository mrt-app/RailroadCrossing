import * as THREE from 'three';

export type CameraPreset = 'overview' | 'crossing_close' | 'driver_view' | 'train_follow';

export class CameraController {
  public camera: THREE.PerspectiveCamera;
  public currentPreset: CameraPreset = 'overview';

  private targetPosition: THREE.Vector3 = new THREE.Vector3();
  private targetLookAt: THREE.Vector3 = new THREE.Vector3();
  private currentLookAt: THREE.Vector3 = new THREE.Vector3();

  // Pointer drag & pinch controls
  private isDragging: boolean = false;
  private previousMousePosition = { x: 0, y: 0 };
  private spherical: THREE.Spherical;
  private isUserInteracting: boolean = false; // Once manually moved by fingers/mouse, camera stays locked and NEVER moves on its own

  // Touch pinch gesture tracking
  private initialPinchDistance: number = 0;
  private initialRadius: number = 0;

  constructor() {
    // Narrow far plane to 120m to eliminate distant rendering overhead
    this.camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.5, 120);
    this.spherical = new THREE.Spherical(26, Math.PI / 3.4, Math.PI / 4);

    this.setPreset('overview', true);
    this.setupPointerControls();
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  public setPreset(preset: CameraPreset, immediate: boolean = false): void {
    this.currentPreset = preset;
    this.isUserInteracting = false; // Reset manual lock when user explicitly clicks preset button

    switch (preset) {
      case 'overview':
        // Focused cinematic high-angle view on crossing
        this.targetPosition.set(16, 14, 20);
        this.targetLookAt.set(0, 1.4, 0);
        break;

      case 'crossing_close':
        // Crisp intimate close-up on crossing gate and warning lights
        this.targetPosition.set(8.2, 3.4, 10.5);
        this.targetLookAt.set(0, 1.6, 0);
        break;

      case 'driver_view':
        // Car driver perspective stopping right in front of crossing
        this.targetPosition.set(-2.2, 2.6, 14);
        this.targetLookAt.set(-2.2, 1.4, 0);
        break;

      case 'train_follow':
        // Side platform view of passing train
        this.targetPosition.set(-14, 4.5, 8.5);
        this.targetLookAt.set(0, 1.8, -2.2);
        break;
    }

    if (immediate) {
      this.camera.position.copy(this.targetPosition);
      this.currentLookAt.copy(this.targetLookAt);
      this.camera.lookAt(this.currentLookAt);

      const offset = new THREE.Vector3().subVectors(this.camera.position, this.currentLookAt);
      this.spherical.setFromVector3(offset);
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
    // If the user has manipulated the camera with fingers or mouse, DO NOT move automatically!
    if (this.isUserInteracting) {
      return;
    }

    if (this.currentPreset === 'train_follow' && trainPositionX !== undefined) {
      this.targetLookAt.set(trainPositionX, 1.4, -2.2);
      this.targetPosition.set(trainPositionX + 11, 5, 10);
    }

    this.camera.position.lerp(this.targetPosition, Math.min(1.0, delta * 3.8));
    this.currentLookAt.lerp(this.targetLookAt, Math.min(1.0, delta * 3.8));
    this.camera.lookAt(this.currentLookAt);
  }

  private setupPointerControls(): void {
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.closest('button') || target.closest('.start-overlay'))) return;

      if ('touches' in e) {
        if (e.touches.length === 1) {
          this.isDragging = true;
          this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        } else if (e.touches.length === 2) {
          this.isDragging = false;
          const dx = e.touches[0].clientX - e.touches[1].clientX;
          const dy = e.touches[0].clientY - e.touches[1].clientY;
          this.initialPinchDistance = Math.hypot(dx, dy);

          const offset = new THREE.Vector3().subVectors(this.camera.position, this.currentLookAt);
          this.spherical.setFromVector3(offset);
          this.initialRadius = this.spherical.radius;
        }
      } else {
        this.isDragging = true;
        this.previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if ('touches' in e) {
        if (e.touches.length === 2 && this.initialPinchDistance > 0) {
          // Pinch to Zoom with 2 fingers
          const dx = e.touches[0].clientX - e.touches[1].clientX;
          const dy = e.touches[0].clientY - e.touches[1].clientY;
          const currentDistance = Math.hypot(dx, dy);
          const factor = this.initialPinchDistance / currentDistance;

          this.isUserInteracting = true; // Lock position permanently to user's choice
          this.spherical.radius = Math.max(8.0, Math.min(48.0, this.initialRadius * factor));

          const offset = new THREE.Vector3().setFromSpherical(this.spherical);
          this.camera.position.copy(this.currentLookAt).add(offset);
          this.camera.lookAt(this.currentLookAt);
          return;
        }

        if (e.touches.length !== 1 || !this.isDragging) return;
        const clientX = e.touches[0].clientX;
        const clientY = e.touches[0].clientY;

        const deltaX = clientX - this.previousMousePosition.x;
        const deltaY = clientY - this.previousMousePosition.y;

        if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
          this.isUserInteracting = true; // Lock position permanently to user's choice

          const offset = new THREE.Vector3().subVectors(this.camera.position, this.currentLookAt);
          this.spherical.setFromVector3(offset);

          this.spherical.theta -= deltaX * 0.005;
          this.spherical.phi = Math.max(0.15, Math.min(Math.PI / 2.05, this.spherical.phi - deltaY * 0.005));

          offset.setFromSpherical(this.spherical);
          this.camera.position.copy(this.currentLookAt).add(offset);
          this.camera.lookAt(this.currentLookAt);
        }

        this.previousMousePosition = { x: clientX, y: clientY };
      } else {
        if (!this.isDragging) return;
        const deltaX = e.clientX - this.previousMousePosition.x;
        const deltaY = e.clientY - this.previousMousePosition.y;

        if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
          this.isUserInteracting = true; // Lock position permanently to user's choice

          const offset = new THREE.Vector3().subVectors(this.camera.position, this.currentLookAt);
          this.spherical.setFromVector3(offset);

          this.spherical.theta -= deltaX * 0.005;
          this.spherical.phi = Math.max(0.15, Math.min(Math.PI / 2.05, this.spherical.phi - deltaY * 0.005));

          offset.setFromSpherical(this.spherical);
          this.camera.position.copy(this.currentLookAt).add(offset);
          this.camera.lookAt(this.currentLookAt);
        }

        this.previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const onPointerUp = () => {
      this.isDragging = false;
      this.initialPinchDistance = 0;
    };

    const onWheel = (e: WheelEvent) => {
      this.isUserInteracting = true; // Lock position permanently to user's choice
      const offset = new THREE.Vector3().subVectors(this.camera.position, this.currentLookAt);
      this.spherical.setFromVector3(offset);

      this.spherical.radius = Math.max(8.0, Math.min(48.0, this.spherical.radius + e.deltaY * 0.02));

      offset.setFromSpherical(this.spherical);
      this.camera.position.copy(this.currentLookAt).add(offset);
      this.camera.lookAt(this.currentLookAt);
    };

    window.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    window.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp, { passive: true });

    window.addEventListener('wheel', onWheel, { passive: true });
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }
}
