import * as THREE from 'three';
import { SoundEngine } from '../audio/SoundEngine';

export type FruitType = 'apple' | 'orange' | 'grape';

export interface FruitItem {
  type: FruitType;
  group: THREE.Group;
  mesh: THREE.Object3D;
  treeIndex: number;
  parentCanopy: THREE.Group;
  state: 'hanging' | 'falling' | 'on_ground' | 'fading' | 'growing';
  originalLocalPos: THREE.Vector3;
  originalLocalRot: THREE.Euler;
  worldPos: THREE.Vector3;
  velocity: THREE.Vector3;
  angularVelocity: THREE.Vector3;
  timer: number;
  groundY: number;
}

export class FruitTreeModel {
  public group: THREE.Group;
  public fruits: FruitItem[] = [];
  public clickableMeshes: THREE.Object3D[] = [];
  public treeCanopyMeshes: { mesh: THREE.Object3D; treeIndex: number }[] = [];
  private soundEngine: SoundEngine;

  // Shared Geometries & Materials for efficiency
  private leafMats: THREE.MeshLambertMaterial[] = [];
  private trunkMat: THREE.MeshLambertMaterial;

  constructor(soundEngine: SoundEngine) {
    this.soundEngine = soundEngine;
    this.group = new THREE.Group();

    this.trunkMat = new THREE.MeshLambertMaterial({ color: 0x5D4037 });
    this.leafMats = [
      new THREE.MeshLambertMaterial({ color: 0x43A047, flatShading: true }),
      new THREE.MeshLambertMaterial({ color: 0x66BB6A, flatShading: true }),
      new THREE.MeshLambertMaterial({ color: 0x2E7D32, flatShading: true })
    ];

    this.createFruitTrees();
  }

  private createFruitTrees(): void {
    // Tree positions strategically placed around the crossing with great visibility
    const treeConfigs: { x: number; z: number; type: FruitType; scale: number }[] = [
      // Foreground / Crossing corners (High visibility)
      { x: -11.5, z: 9.5, type: 'apple', scale: 1.15 },   // 🍎 Apple tree near doghouse
      { x: 11.5, z: 10.5, type: 'orange', scale: 1.15 },  // 🍊 Orange tree on opposite side
      { x: -11.0, z: -10.5, type: 'grape', scale: 1.10 }, // 🍇 Grape tree across the tracks
      { x: 12.0, z: -10.0, type: 'apple', scale: 1.10 },  // 🍎 Apple tree near station platform

      // Background / Mid-range trees
      { x: -17.5, z: 14.0, type: 'orange', scale: 1.20 }, // 🍊 Orange tree
      { x: 18.0, z: 13.5, type: 'grape', scale: 1.15 },   // 🍇 Grape tree
      { x: -16.5, z: -12.5, type: 'apple', scale: 1.10 }, // 🍎 Apple tree
      { x: -22.5, z: 6.0, type: 'orange', scale: 1.25 },  // 🍊 Orange tree
      { x: -23.5, z: -7.0, type: 'grape', scale: 1.20 }   // 🍇 Grape tree
    ];

    treeConfigs.forEach((cfg, treeIdx) => {
      this.createSingleFruitTree(cfg.x, cfg.z, cfg.type, cfg.scale, treeIdx);
    });
  }

  private createSingleFruitTree(
    x: number,
    z: number,
    type: FruitType,
    scale: number,
    treeIdx: number
  ): void {
    const treeGroup = new THREE.Group();
    treeGroup.position.set(x, 0, z);
    treeGroup.scale.set(scale, scale, scale);

    // 1. Trunk
    const trunkGeo = new THREE.CylinderGeometry(0.20, 0.28, 1.4, 7);
    const trunk = new THREE.Mesh(trunkGeo, this.trunkMat);
    trunk.position.y = 0.7;
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    treeGroup.add(trunk);

    // 2. Foliage Canopy
    const foliageGroup = new THREE.Group();
    foliageGroup.position.y = 2.0;

    const mainLeafMat = this.leafMats[treeIdx % this.leafMats.length];
    const foliageGeo = new THREE.DodecahedronGeometry(1.25, 1);
    const foliageMesh = new THREE.Mesh(foliageGeo, mainLeafMat);
    foliageMesh.castShadow = true;
    foliageMesh.receiveShadow = true;
    foliageGroup.add(foliageMesh);

    // Second overlapping canopy cluster for lush foliage
    const subFoliageGeo = new THREE.DodecahedronGeometry(0.9, 1);
    const subFoliage = new THREE.Mesh(subFoliageGeo, mainLeafMat);
    subFoliage.position.set(0.3, 0.4, 0.2);
    subFoliage.castShadow = true;
    foliageGroup.add(subFoliage);

    treeGroup.add(foliageGroup);

    // Register canopy for click-to-shake
    foliageMesh.userData = { treeIndex: treeIdx, isTreeCanopy: true };
    subFoliage.userData = { treeIndex: treeIdx, isTreeCanopy: true };
    this.treeCanopyMeshes.push({ mesh: foliageMesh, treeIndex: treeIdx });
    this.treeCanopyMeshes.push({ mesh: subFoliage, treeIndex: treeIdx });

    // 3. Fruits hanging visibly on the outer surface of the tree canopy
    const fruitPositions = [
      // Front-facing (facing camera for maximum clarity & tapability)
      { x: 0.0, y: -0.22, z: 1.46, rotX: 0.15, rotY: 0 },
      { x: 0.96, y: -0.18, z: 1.10, rotX: 0.12, rotY: 0.55 },
      { x: -0.96, y: -0.18, z: 1.10, rotX: 0.12, rotY: -0.55 },
      { x: 0.52, y: 0.42, z: 1.28, rotX: -0.10, rotY: 0.35 },
      { x: -0.52, y: 0.42, z: 1.28, rotX: -0.10, rotY: -0.35 },
      // Flanks & Sides
      { x: 1.42, y: 0.02, z: 0.15, rotX: 0, rotY: 1.45 },
      { x: -1.42, y: 0.02, z: 0.15, rotX: 0, rotY: -1.45 },
      // Rear & High
      { x: 0.88, y: -0.12, z: -1.08, rotX: -0.15, rotY: 2.3 },
      { x: -0.88, y: -0.12, z: -1.08, rotX: -0.15, rotY: -2.3 }
    ];

    fruitPositions.forEach((fp) => {
      const fruitGroup = this.createFruitMesh(type);
      fruitGroup.position.set(fp.x, fp.y, fp.z);
      fruitGroup.rotation.set(fp.rotX, fp.rotY, 0);

      foliageGroup.add(fruitGroup);

      const fruitItem: FruitItem = {
        type,
        group: fruitGroup,
        mesh: fruitGroup,
        treeIndex: treeIdx,
        parentCanopy: foliageGroup,
        state: 'hanging',
        originalLocalPos: fruitGroup.position.clone(),
        originalLocalRot: fruitGroup.rotation.clone(),
        worldPos: new THREE.Vector3(),
        velocity: new THREE.Vector3(),
        angularVelocity: new THREE.Vector3(),
        timer: 0,
        groundY: 0.14
      };

      // Tag for raycasting
      fruitGroup.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          child.userData = { fruitItem, isFruit: true };
          this.clickableMeshes.push(child);
        }
      });

      this.fruits.push(fruitItem);
    });

    this.group.add(treeGroup);
  }

  /**
   * Creates cute, stylized, vibrant 3D Fruit meshes (Apple, Orange, Grape)
   */
  private createFruitMesh(type: FruitType): THREE.Group {
    const group = new THREE.Group();

    if (type === 'apple') {
      // 🍎 りんご (Red Apple with stem and leaf)
      const appleGeo = new THREE.SphereGeometry(0.26, 12, 12);
      appleGeo.scale(1.0, 0.92, 1.0); // Apple shape
      const appleMat = new THREE.MeshStandardMaterial({
        color: 0xE53935,
        roughness: 0.25,
        metalness: 0.1
      });
      const apple = new THREE.Mesh(appleGeo, appleMat);
      apple.castShadow = true;
      group.add(apple);

      // Stem (ヘタ)
      const stemGeo = new THREE.CylinderGeometry(0.024, 0.024, 0.13, 5);
      const stemMat = new THREE.MeshLambertMaterial({ color: 0x4E342E });
      const stem = new THREE.Mesh(stemGeo, stemMat);
      stem.position.set(0, 0.25, 0);
      stem.rotation.z = 0.25;
      group.add(stem);

      // Leaf (緑の小葉)
      const leafGeo = new THREE.ConeGeometry(0.08, 0.15, 4);
      leafGeo.scale(1.0, 0.2, 1.0);
      const leafMat = new THREE.MeshLambertMaterial({ color: 0x4CAF50 });
      const leaf = new THREE.Mesh(leafGeo, leafMat);
      leaf.position.set(0.08, 0.27, 0);
      leaf.rotation.z = -Math.PI / 3;
      group.add(leaf);
    } else if (type === 'orange') {
      // 🍊 みかん (Mandarin Orange with calyx/leaf dot)
      const orangeGeo = new THREE.SphereGeometry(0.27, 12, 12);
      orangeGeo.scale(1.10, 0.88, 1.10); // Flattened mandarin shape
      const orangeMat = new THREE.MeshStandardMaterial({
        color: 0xFF9800,
        roughness: 0.30,
        metalness: 0.05
      });
      const orange = new THREE.Mesh(orangeGeo, orangeMat);
      orange.castShadow = true;
      group.add(orange);

      // Green Calyx / Leaf on top
      const calyxGeo = new THREE.ConeGeometry(0.08, 0.05, 5);
      const calyxMat = new THREE.MeshLambertMaterial({ color: 0x43A047 });
      const calyx = new THREE.Mesh(calyxGeo, calyxMat);
      calyx.position.set(0, 0.23, 0);
      group.add(calyx);
    } else if (type === 'grape') {
      // 🍇 ぶどう (Rich Purple Grape Cluster)
      const grapeMat = new THREE.MeshStandardMaterial({
        color: 0x8E24AA,
        roughness: 0.20,
        metalness: 0.1
      });

      const sphereGeo = new THREE.SphereGeometry(0.12, 8, 8);

      // Spheres arrangement in a cute hanging cluster
      const clusterOffsets = [
        { x: 0, y: 0.10, z: 0 },
        { x: 0.11, y: 0.02, z: 0.08 },
        { x: -0.11, y: 0.02, z: 0.08 },
        { x: 0.0, y: 0.02, z: -0.12 },
        { x: 0.08, y: -0.10, z: 0.03 },
        { x: -0.08, y: -0.10, z: 0.03 },
        { x: 0.0, y: -0.21, z: 0.0 }
      ];

      clusterOffsets.forEach((off) => {
        const berry = new THREE.Mesh(sphereGeo, grapeMat);
        berry.position.set(off.x, off.y, off.z);
        berry.castShadow = true;
        group.add(berry);
      });

      // Stem & Vine Leaf
      const stemGeo = new THREE.CylinderGeometry(0.022, 0.022, 0.13, 4);
      const stemMat = new THREE.MeshLambertMaterial({ color: 0x4E342E });
      const stem = new THREE.Mesh(stemGeo, stemMat);
      stem.position.set(0, 0.23, 0);
      group.add(stem);

      const leafGeo = new THREE.BoxGeometry(0.16, 0.02, 0.13);
      const leafMat = new THREE.MeshLambertMaterial({ color: 0x388E3C });
      const leaf = new THREE.Mesh(leafGeo, leafMat);
      leaf.position.set(0.08, 0.23, 0);
      leaf.rotation.z = 0.35;
      group.add(leaf);
    }

    return group;
  }

  /**
   * Drops a specific fruit when tapped
   */
  public dropFruit(fruit: FruitItem): boolean {
    if (fruit.state !== 'hanging') return false;

    // Convert from local foliage space to global world position
    fruit.group.getWorldPosition(fruit.worldPos);
    fruit.group.getWorldQuaternion(fruit.group.quaternion);

    // Attach directly to root group to freely fall in world coordinates
    this.group.attach(fruit.group);

    fruit.state = 'falling';
    fruit.timer = 0;

    // Small pop up and random horizontal kick
    fruit.velocity.set(
      (Math.random() - 0.5) * 1.6,
      0.8 + Math.random() * 0.6,
      (Math.random() - 0.5) * 1.6
    );

    fruit.angularVelocity.set(
      (Math.random() - 0.5) * 8.0,
      (Math.random() - 0.5) * 6.0,
      (Math.random() - 0.5) * 8.0
    );

    this.soundEngine.playFruitPluck();
    return true;
  }

  /**
   * Drops 1 or 2 hanging fruits from a tapped tree canopy
   */
  public dropFruitFromTree(treeIndex: number): FruitItem | null {
    const hangingFruits = this.fruits.filter(
      (f) => f.treeIndex === treeIndex && f.state === 'hanging'
    );
    if (hangingFruits.length === 0) return null;

    const chosen = hangingFruits[Math.floor(Math.random() * hangingFruits.length)];
    this.dropFruit(chosen);
    return chosen;
  }

  /**
   * Updates fruit physics, bounce, roll, and regrowth cycle
   */
  public update(delta: number): void {
    const gravity = -14.0;

    this.fruits.forEach((fruit) => {
      if (fruit.state === 'falling') {
        // Physics update
        fruit.velocity.y += gravity * delta;
        fruit.group.position.x += fruit.velocity.x * delta;
        fruit.group.position.y += fruit.velocity.y * delta;
        fruit.group.position.z += fruit.velocity.z * delta;

        // Tumble rotation
        fruit.group.rotation.x += fruit.angularVelocity.x * delta;
        fruit.group.rotation.y += fruit.angularVelocity.y * delta;
        fruit.group.rotation.z += fruit.angularVelocity.z * delta;

        // Ground Collision
        if (fruit.group.position.y <= fruit.groundY) {
          fruit.group.position.y = fruit.groundY;

          // Bounce if falling fast enough
          if (fruit.velocity.y < -1.5) {
            fruit.velocity.y = -fruit.velocity.y * 0.40;
            fruit.velocity.x *= 0.70;
            fruit.velocity.z *= 0.70;
            fruit.angularVelocity.multiplyScalar(0.70);
            this.soundEngine.playFruitDrop();
          } else {
            // Settle on ground
            fruit.state = 'on_ground';
            fruit.velocity.set(0, 0, 0);
            fruit.angularVelocity.set(0, 0, 0);
            fruit.timer = 0;
            this.soundEngine.playFruitDrop();
          }
        }
      } else if (fruit.state === 'on_ground') {
        fruit.timer += delta;
        // Stay on ground for 5 seconds before fading out
        if (fruit.timer >= 5.0) {
          fruit.state = 'fading';
          fruit.timer = 0;
        }
      } else if (fruit.state === 'fading') {
        fruit.timer += delta;
        const progress = fruit.timer / 0.5; // 0.5s shrink
        const currentScale = Math.max(0, 1.0 - progress);
        fruit.group.scale.set(currentScale, currentScale, currentScale);

        if (fruit.timer >= 0.5) {
          // Reattach directly back to its original tree canopy
          fruit.parentCanopy.add(fruit.group);
          fruit.group.position.copy(fruit.originalLocalPos);
          fruit.group.rotation.copy(fruit.originalLocalRot);
          fruit.group.scale.set(0, 0, 0);

          fruit.state = 'growing';
          fruit.timer = 0;
        }
      } else if (fruit.state === 'growing') {
        fruit.timer += delta;
        // Wait 4 seconds, then grow over 1.0 second
        if (fruit.timer >= 4.0) {
          const growProgress = Math.min(1.0, (fruit.timer - 4.0) / 1.0);
          // Ease-out back growth pop
          const s = 1.0 + Math.sin(growProgress * Math.PI) * 0.15;
          const scaleVal = growProgress * s;
          fruit.group.scale.set(scaleVal, scaleVal, scaleVal);

          if (growProgress >= 1.0) {
            fruit.group.scale.set(1, 1, 1);
            fruit.state = 'hanging';
            fruit.timer = 0;
          }
        }
      }
    });
  }

  public getFruitDisplayName(type: FruitType): string {
    switch (type) {
      case 'apple':
        return 'りんご 🍎';
      case 'orange':
        return 'みかん 🍊';
      case 'grape':
        return 'ぶどう 🍇';
    }
  }

  public getFruitEmoji(type: FruitType): string {
    switch (type) {
      case 'apple':
        return '🍎';
      case 'orange':
        return '🍊';
      case 'grape':
        return '🍇';
    }
  }
}
