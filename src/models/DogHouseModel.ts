import * as THREE from 'three';
import { SoundEngine } from '../audio/SoundEngine';

export class DogHouseModel {
  public group: THREE.Group;
  public clickableMeshes: THREE.Object3D[] = [];

  private dogGroup!: THREE.Group;
  private dogHead!: THREE.Group;
  private dogTail!: THREE.Mesh;
  private dogMouth!: THREE.Mesh;
  private dogLegs: THREE.Mesh[] = [];

  // State Machine: 'inside' | 'running_out' | 'barking' | 'returning'
  public state: 'inside' | 'running_out' | 'barking' | 'returning' = 'inside';
  private stateTimer: number = 0;
  private barkIntervalTimer: number = 0;
  private soundEngine: SoundEngine;

  private readonly INSIDE_POS = new THREE.Vector3(0, 0, -0.5);
  private readonly OUTSIDE_POS = new THREE.Vector3(0, 0, 1.5);

  constructor(soundEngine: SoundEngine) {
    this.soundEngine = soundEngine;
    this.group = new THREE.Group();

    // Safely positioned on the grass lawn outside the railroad track boundary (Z = 5.6)
    this.group.position.set(-6.8, 0, 5.6);
    this.group.rotation.y = Math.PI / 2; // Entrance faces directly perpendicular (90 degrees) to the road
    this.group.scale.set(0.78, 0.78, 0.78); // Clean, safe, and balanced size

    this.buildDogHouse();
    this.buildDog();
    this.buildYardAccessories();
  }

  private buildDogHouse(): void {
    const houseGroup = new THREE.Group();

    // 1. Wooden Base Deck
    const baseMat = new THREE.MeshLambertMaterial({ color: 0x8D6E63 });
    const base = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.16, 2.6), baseMat);
    base.position.y = 0.08;
    base.receiveShadow = true;
    houseGroup.add(base);
    this.clickableMeshes.push(base);

    // 2. Main Wooden Walls (Warm cedar pine)
    const wallMat = new THREE.MeshLambertMaterial({ color: 0xDEB887 });
    
    // Left Wall
    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.5, 2.3), wallMat);
    leftWall.position.set(-1.05, 0.85, 0);
    leftWall.castShadow = true;
    houseGroup.add(leftWall);
    this.clickableMeshes.push(leftWall);

    // Right Wall
    const rightWall = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.5, 2.3), wallMat);
    rightWall.position.set(1.05, 0.85, 0);
    rightWall.castShadow = true;
    houseGroup.add(rightWall);
    this.clickableMeshes.push(rightWall);

    // Back Wall
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.5, 0.12), wallMat);
    backWall.position.set(0, 0.85, -1.1);
    backWall.castShadow = true;
    houseGroup.add(backWall);
    this.clickableMeshes.push(backWall);

    // Front Wall with Arched Entrance
    const frontWallLeft = new THREE.Mesh(new THREE.BoxGeometry(0.55, 1.5, 0.12), wallMat);
    frontWallLeft.position.set(-0.75, 0.85, 1.1);
    houseGroup.add(frontWallLeft);
    this.clickableMeshes.push(frontWallLeft);

    const frontWallRight = new THREE.Mesh(new THREE.BoxGeometry(0.55, 1.5, 0.12), wallMat);
    frontWallRight.position.set(0.75, 0.85, 1.1);
    houseGroup.add(frontWallRight);
    this.clickableMeshes.push(frontWallRight);

    const frontWallTop = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.45, 0.12), wallMat);
    frontWallTop.position.set(0, 1.38, 1.1);
    houseGroup.add(frontWallTop);
    this.clickableMeshes.push(frontWallTop);

    // 3. Bright Red Pitched Roof (鮮やかな赤いやね)
    const roofMat = new THREE.MeshLambertMaterial({ color: 0xE53935 });
    
    // Left Roof Slope
    const roofLeft = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.14, 2.8), roofMat);
    roofLeft.rotation.z = Math.PI / 4.8;
    roofLeft.position.set(-0.62, 1.95, 0);
    roofLeft.castShadow = true;
    houseGroup.add(roofLeft);
    this.clickableMeshes.push(roofLeft);

    // Right Roof Slope
    const roofRight = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.14, 2.8), roofMat);
    roofRight.rotation.z = -Math.PI / 4.8;
    roofRight.position.set(0.62, 1.95, 0);
    roofRight.castShadow = true;
    houseGroup.add(roofRight);
    this.clickableMeshes.push(roofRight);

    // Ridge Cap
    const ridge = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 2.85), new THREE.MeshLambertMaterial({ color: 0xB71C1C }));
    ridge.position.set(0, 2.3, 0);
    houseGroup.add(ridge);

    // 4. Wooden Nameplate ("ポチ 🐶")
    const plateMat = new THREE.MeshLambertMaterial({ color: 0xFFF8E1 });
    const plate = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.24, 0.04), plateMat);
    plate.position.set(0, 1.45, 1.18);
    houseGroup.add(plate);

    const badge = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.02, 8), new THREE.MeshLambertMaterial({ color: 0xE91E63 }));
    badge.rotation.x = Math.PI / 2;
    badge.position.set(0, 1.45, 1.21);
    houseGroup.add(badge);

    this.group.add(houseGroup);
  }

  private buildYardAccessories(): void {
    const yardGroup = new THREE.Group();

    // 1. Food Dish (エサ皿)
    const dishMat = new THREE.MeshStandardMaterial({ color: 0x0288D1, metalness: 0.2, roughness: 0.3 });
    const dish = new THREE.Mesh(new THREE.CylinderGeometry(0.30, 0.38, 0.16, 16), dishMat);
    dish.position.set(1.4, 0.08, 1.3);
    yardGroup.add(dish);
    this.clickableMeshes.push(dish);

    // Dog Food inside dish
    const foodMat = new THREE.MeshLambertMaterial({ color: 0x6D4C41 });
    const food = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.06, 12), foodMat);
    food.position.set(1.4, 0.15, 1.3);
    yardGroup.add(food);

    // 2. White Dog Bone (ホネ 🦴)
    const boneMat = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    const boneShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.40, 8), boneMat);
    boneShaft.rotation.z = Math.PI / 2;
    boneShaft.rotation.y = Math.PI / 3.5;
    boneShaft.position.set(1.35, 0.23, 1.28);
    yardGroup.add(boneShaft);

    // 3. Cute White Picket Fence behind the yard
    const fenceMat = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    for (let x = -1.8; x <= 1.8; x += 0.45) {
      const picket = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.85, 0.04), fenceMat);
      picket.position.set(x, 0.42, -1.4);
      yardGroup.add(picket);
    }
    const rail = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.06, 0.04), fenceMat);
    rail.position.set(0, 0.52, -1.4);
    yardGroup.add(rail);

    this.group.add(yardGroup);
  }

  private buildDog(): void {
    this.dogGroup = new THREE.Group();
    // Placed proudly outside the doghouse on the front deck
    this.dogGroup.position.set(0, 0, 1.6);

    const furMat = new THREE.MeshLambertMaterial({ color: 0xFB8C00 }); // Vibrant Golden Shiba fur
    const whiteFurMat = new THREE.MeshLambertMaterial({ color: 0xFFF9C4 }); // Creamy white chest/snout
    const noseMat = new THREE.MeshLambertMaterial({ color: 0x212121 }); // Black nose
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x1A1A1A });
    const tongueMat = new THREE.MeshLambertMaterial({ color: 0xFF4081 }); // Pink tongue

    // 1. Dog Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.70, 0.70, 1.05), furMat);
    body.position.y = 0.58;
    body.castShadow = true;
    this.dogGroup.add(body);
    this.clickableMeshes.push(body);

    // White Chest
    const chest = new THREE.Mesh(new THREE.BoxGeometry(0.50, 0.50, 0.45), whiteFurMat);
    chest.position.set(0, 0.52, 0.35);
    this.dogGroup.add(chest);

    // 2. Dog Head Group
    this.dogHead = new THREE.Group();
    this.dogHead.position.set(0, 0.95, 0.48);

    const headGeo = new THREE.BoxGeometry(0.58, 0.55, 0.58);
    const head = new THREE.Mesh(headGeo, furMat);
    this.dogHead.add(head);

    // White Snout
    const snout = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.26, 0.34), whiteFurMat);
    snout.position.set(0, -0.08, 0.40);
    this.dogHead.add(snout);

    // Black Nose
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 8), noseMat);
    nose.position.set(0, 0.02, 0.57);
    this.dogHead.add(nose);

    // Shiny Cute Eyes
    [-0.17, 0.17].forEach(x => {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 8), eyeMat);
      eye.position.set(x, 0.09, 0.30);
      this.dogHead.add(eye);

      // White sparkle
      const sparkle = new THREE.Mesh(new THREE.SphereGeometry(0.02, 6, 6), new THREE.MeshBasicMaterial({ color: 0xFFFFFF }));
      sparkle.position.set(x + 0.015, 0.11, 0.34);
      this.dogHead.add(sparkle);
    });

    // Triangular Shiba Ears
    [-0.22, 0.22].forEach(x => {
      const ear = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.26, 4), furMat);
      ear.rotation.y = Math.PI / 4;
      ear.rotation.z = (x > 0 ? -1 : 1) * 0.25;
      ear.position.set(x, 0.38, 0);
      this.dogHead.add(ear);
    });

    // Red Collar with Golden Bell
    const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.08, 12), new THREE.MeshLambertMaterial({ color: 0xD50000 }));
    collar.position.set(0, -0.24, 0);
    this.dogHead.add(collar);

    const bell = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 8), new THREE.MeshStandardMaterial({ color: 0xFFD700, metalness: 0.9, roughness: 0.1 }));
    bell.position.set(0, -0.26, 0.35);
    this.dogHead.add(bell);

    // Cute Mouth / Tongue
    this.dogMouth = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.08, 0.22), tongueMat);
    this.dogMouth.position.set(0, -0.17, 0.44);
    this.dogHead.add(this.dogMouth);

    this.dogGroup.add(this.dogHead);
    this.clickableMeshes.push(head);

    // 3. 4 Legs
    const legGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.38, 8);
    const legPositions = [
      { x: -0.24, z: 0.32 },
      { x: 0.24, z: 0.32 },
      { x: -0.24, z: -0.32 },
      { x: 0.24, z: -0.32 }
    ];

    legPositions.forEach(pos => {
      const leg = new THREE.Mesh(legGeo, furMat);
      leg.position.set(pos.x, 0.19, pos.z);
      this.dogGroup.add(leg);
      this.dogLegs.push(leg);
    });

    // 4. Curled Tail
    const tailGeo = new THREE.TorusGeometry(0.20, 0.08, 8, 12, Math.PI * 1.3);
    this.dogTail = new THREE.Mesh(tailGeo, furMat);
    this.dogTail.rotation.x = Math.PI / 2.5;
    this.dogTail.position.set(0, 0.78, -0.52);
    this.dogGroup.add(this.dogTail);

    this.group.add(this.dogGroup);
    this.dogGroup.position.copy(this.INSIDE_POS);
  }

  /**
   * Tapping the doghouse or dog triggers puppy to jump out and bark excitedly
   */
  public triggerDogBark(): boolean {
    if (this.state === 'inside') {
      this.state = 'running_out';
      this.stateTimer = 0;
      this.soundEngine.playTapSound();
      return true;
    } else if (this.state === 'barking') {
      this.soundEngine.playDogBark();
      this.stateTimer = 4.0; // Extend barking celebration
      return true;
    }
    return false;
  }

  public update(delta: number): void {
    const time = Date.now() * 0.001;

    switch (this.state) {
      case 'inside':
        // Resting quietly inside the doghouse
        this.dogGroup.position.copy(this.INSIDE_POS);
        this.dogGroup.position.y = 0;
        this.dogHead.rotation.set(0, 0, 0);
        this.dogMouth.scale.set(1, 0.2, 1);
        break;

      case 'running_out':
        this.stateTimer += delta;
        const outProgress = Math.min(1.0, this.stateTimer / 0.4);
        this.dogGroup.position.lerpVectors(this.INSIDE_POS, this.OUTSIDE_POS, outProgress);
        
        // Cute hopping arc as puppy leaps out of the doghouse
        this.dogGroup.position.y = Math.sin(outProgress * Math.PI) * 0.35;

        if (outProgress >= 1.0) {
          this.dogGroup.position.copy(this.OUTSIDE_POS);
          this.dogGroup.position.y = 0;
          this.state = 'barking';
          this.stateTimer = 4.0; // Bark excitedly for 4 seconds
          this.barkIntervalTimer = 0;
          this.soundEngine.playDogBark();
        }
        break;

      case 'barking':
        this.stateTimer -= delta;
        this.barkIntervalTimer += delta;

        // Periodic enthusiastic barking sound
        if (this.barkIntervalTimer >= 0.7 && this.stateTimer > 0.4) {
          this.soundEngine.playDogBark();
          this.barkIntervalTimer = 0;
        }

        // 1. Energetic Tail Wagging (超高速フリフリ)
        this.dogTail.rotation.y = Math.sin(time * 28.0) * 0.55;

        // 2. Head Bobbing & Barking Mouth Animation
        const barkPulse = Math.sin(time * 18.0);
        this.dogHead.rotation.x = barkPulse * 0.28;
        this.dogMouth.scale.y = barkPulse > 0 ? 2.2 : 0.4;

        // 3. Joyful Jumping / Front Paw Stomping
        this.dogGroup.position.y = Math.max(0, Math.sin(time * 18.0) * 0.28);

        if (this.stateTimer <= 0) {
          this.state = 'returning';
          this.stateTimer = 0;
        }
        break;

      case 'returning':
        this.stateTimer += delta;
        const returnProgress = Math.min(1.0, this.stateTimer / 0.6);
        this.dogGroup.position.lerpVectors(this.OUTSIDE_POS, this.INSIDE_POS, returnProgress);
        this.dogGroup.position.y = Math.sin(returnProgress * Math.PI) * 0.18;

        if (returnProgress >= 1.0) {
          this.dogGroup.position.copy(this.INSIDE_POS);
          this.dogGroup.position.y = 0;
          this.state = 'inside';
        }
        break;
    }
  }

  public dispose(): void {
    this.group.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach(m => m.dispose());
        } else if (mesh.material) {
          mesh.material.dispose();
        }
      }
    });
  }
}
