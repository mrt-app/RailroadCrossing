import * as THREE from 'three';

/**
 * Creates the environment: terrain, rails, road, stop lines, trees, houses, and station.
 */
export class EnvironmentModel {
  public group: THREE.Group;
  public roadMeshes: THREE.Mesh[] = [];
  public windowMaterials: THREE.MeshStandardMaterial[] = [];
  public windowLights: THREE.PointLight[] = [];

  constructor() {
    this.group = new THREE.Group();
    this.createTerrain();
    this.createTracks();
    this.createRoad();
    this.createCrossingPavement();
    this.createStationPlatform();
    this.createScenery();
  }

  private createTerrain(): void {
    // Main Grass Field
    const grassGeo = new THREE.PlaneGeometry(160, 160);
    const grassMat = new THREE.MeshLambertMaterial({ color: 0x7BC850 });
    const grass = new THREE.Mesh(grassGeo, grassMat);
    grass.rotation.x = -Math.PI / 2;
    grass.position.y = -0.05;
    grass.receiveShadow = true;
    this.group.add(grass);

    // River in distance
    const riverGeo = new THREE.PlaneGeometry(160, 20);
    const riverMat = new THREE.MeshLambertMaterial({ color: 0x4FC3F7 });
    const river = new THREE.Mesh(riverGeo, riverMat);
    river.rotation.x = -Math.PI / 2;
    river.position.set(0, -0.04, -55);
    river.receiveShadow = true;
    this.group.add(river);
  }

  private createTracks(): void {
    const trackGroup = new THREE.Group();
    const trackLength = 160;
    const trackZPositions = [-2.2, 2.2];
    const tieSpacing = 1.0;
    const numTiesPerTrack = Math.floor(trackLength / tieSpacing);
    const totalTies = numTiesPerTrack * trackZPositions.length;

    // Sleepers (Ties / 枕木) - Optimized single InstancedMesh (1 draw call for all 320 ties!)
    const tieGeo = new THREE.BoxGeometry(0.3, 0.15, 2.8);
    const tieMat = new THREE.MeshLambertMaterial({ color: 0x5D4037 });
    const instancedTies = new THREE.InstancedMesh(tieGeo, tieMat, totalTies);
    instancedTies.receiveShadow = true;

    const dummy = new THREE.Object3D();
    let tieIdx = 0;

    trackZPositions.forEach((zPos) => {
      // Ballast (Gravel base)
      const ballastGeo = new THREE.BoxGeometry(trackLength, 0.2, 3.4);
      const ballastMat = new THREE.MeshLambertMaterial({ color: 0x6E6E6E });
      const ballast = new THREE.Mesh(ballastGeo, ballastMat);
      ballast.position.set(0, 0.1, zPos);
      ballast.receiveShadow = true;
      trackGroup.add(ballast);

      for (let i = 0; i < numTiesPerTrack; i++) {
        const x = -trackLength / 2 + i * tieSpacing;
        dummy.position.set(x, 0.22, zPos);
        dummy.updateMatrix();
        instancedTies.setMatrixAt(tieIdx++, dummy.matrix);
      }

      // Steel Rails
      const railGeo = new THREE.BoxGeometry(trackLength, 0.18, 0.12);
      const railMat = new THREE.MeshStandardMaterial({
        color: 0xCCCCCC,
        metalness: 0.8,
        roughness: 0.2
      });

      const rail1 = new THREE.Mesh(railGeo, railMat);
      rail1.position.set(0, 0.32, zPos - 0.9);
      trackGroup.add(rail1);

      const rail2 = new THREE.Mesh(railGeo, railMat);
      rail2.position.set(0, 0.32, zPos + 0.9);
      trackGroup.add(rail2);
    });

    instancedTies.instanceMatrix.needsUpdate = true;
    trackGroup.add(instancedTies);
    this.group.add(trackGroup);
  }

  private createRoad(): void {
    const roadGroup = new THREE.Group();
    const roadLength = 160;
    const roadWidth = 9.0;

    // Asphalt Road (North-South, along Z axis)
    const asphaltGeo = new THREE.PlaneGeometry(roadWidth, roadLength);
    const asphaltMat = new THREE.MeshLambertMaterial({ color: 0x37474F });
    const asphalt = new THREE.Mesh(asphaltGeo, asphaltMat);
    asphalt.rotation.x = -Math.PI / 2;
    asphalt.position.set(0, 0.02, 0);
    asphalt.receiveShadow = true;
    roadGroup.add(asphalt);
    this.roadMeshes.push(asphalt);

    // Sidewalks
    const sidewalkMat = new THREE.MeshLambertMaterial({ color: 0xCFD8DC });
    [-5.0, 5.0].forEach((xPos) => {
      const swGeo = new THREE.BoxGeometry(1.2, 0.12, roadLength);
      const sw = new THREE.Mesh(swGeo, sidewalkMat);
      sw.position.set(xPos, 0.06, 0);
      sw.receiveShadow = true;
      roadGroup.add(sw);
    });

    // Center Yellow Dotted Line
    const centerLineMat = new THREE.MeshBasicMaterial({ color: 0xFFEB3B });
    const segmentLength = 2.5;
    const segmentGap = 1.8;
    for (let z = -roadLength / 2; z < roadLength / 2; z += segmentLength + segmentGap) {
      // Don't draw across the railroad tracks (|z| < 6)
      if (Math.abs(z) > 5.5) {
        const lineGeo = new THREE.PlaneGeometry(0.3, segmentLength);
        const lineMesh = new THREE.Mesh(lineGeo, centerLineMat);
        lineMesh.rotation.x = -Math.PI / 2;
        lineMesh.position.set(0, 0.03, z + segmentLength / 2);
        roadGroup.add(lineMesh);
      }
    }

    // Stop Lines (一時停止線) before crossing: Z = -5.2 and Z = 5.2
    const stopLineMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    [-5.2, 5.2].forEach((zPos) => {
      const stopLineGeo = new THREE.PlaneGeometry(roadWidth * 0.88, 0.6);
      const stopLine = new THREE.Mesh(stopLineGeo, stopLineMat);
      stopLine.rotation.x = -Math.PI / 2;
      stopLine.position.set(0, 0.035, zPos);
      roadGroup.add(stopLine);
    });

    // "とまれ" Stop Signboard on road side (placed before stop lines, away from crossing gates)
    [-8.0, 8.0].forEach((zPos) => {
      const xPos = zPos > 0 ? 3.8 : -3.8;
      const poleGeo = new THREE.CylinderGeometry(0.05, 0.05, 2.2);
      const poleMat = new THREE.MeshLambertMaterial({ color: 0xCCCCCC });
      const pole = new THREE.Mesh(poleGeo, poleMat);
      pole.position.set(xPos, 1.1, zPos);
      pole.castShadow = true;
      roadGroup.add(pole);

      // Inverted red triangle
      const signShape = new THREE.Shape();
      signShape.moveTo(0, -0.35);
      signShape.lineTo(0.35, 0.35);
      signShape.lineTo(-0.35, 0.35);
      signShape.closePath();

      const signGeo = new THREE.ShapeGeometry(signShape);
      const signMat = new THREE.MeshBasicMaterial({ color: 0xD32F2F, side: THREE.DoubleSide });
      const sign = new THREE.Mesh(signGeo, signMat);
      sign.position.set(xPos, 2.1, zPos);
      sign.rotation.y = zPos > 0 ? 0 : Math.PI;
      roadGroup.add(sign);
    });

    this.group.add(roadGroup);
  }

  private createCrossingPavement(): void {
    // Wooden / Rubber crossing planks between rails
    const plankMat = new THREE.MeshLambertMaterial({ color: 0x424242 });
    const plankGeo = new THREE.BoxGeometry(8.8, 0.28, 10.0);
    const plank = new THREE.Mesh(plankGeo, plankMat);
    plank.position.set(0, 0.16, 0);
    plank.receiveShadow = true;
    this.group.add(plank);
  }

  private createStationPlatform(): void {
    const stationGroup = new THREE.Group();
    // Cute small Japanese rural station platform on side of track
    const platGeo = new THREE.BoxGeometry(26, 0.6, 3.0);
    const platMat = new THREE.MeshLambertMaterial({ color: 0xBDBDBD });
    const platform = new THREE.Mesh(platGeo, platMat);
    platform.position.set(24, 0.3, -5.2);
    platform.receiveShadow = true;
    stationGroup.add(platform);

    // Platform roof
    const roofGeo = new THREE.BoxGeometry(20, 0.2, 3.6);
    const roofMat = new THREE.MeshLambertMaterial({ color: 0x388E3C });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.set(24, 2.6, -5.2);
    stationGroup.add(roof);

    // Roof pillars
    const pillarMat = new THREE.MeshLambertMaterial({ color: 0xEEEEEE });
    [-8, -3, 3, 8].forEach((xOffset) => {
      const pGeo = new THREE.CylinderGeometry(0.08, 0.08, 2.2);
      const p = new THREE.Mesh(pGeo, pillarMat);
      p.position.set(24 + xOffset, 1.4, -5.2);
      p.castShadow = true;
      stationGroup.add(p);
    });

    // Station signboard
    const signPost = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.5), pillarMat);
    signPost.position.set(24, 1.0, -4.2);
    stationGroup.add(signPost);

    const signBoard = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.8, 0.1),
      new THREE.MeshLambertMaterial({ color: 0xFFFFFF })
    );
    signBoard.position.set(24, 1.5, -4.2);
    stationGroup.add(signBoard);

    this.group.add(stationGroup);
  }

  private createScenery(): void {
    const sceneryGroup = new THREE.Group();

    // Cute Low-poly Trees
    const treePositions = [
      { x: -16, z: -14 }, { x: -22, z: -18 }, { x: -28, z: -12 },
      { x: -14, z: 14 }, { x: -24, z: 16 }, { x: -18, z: 24 },
      { x: 16, z: 15 }, { x: 26, z: 18 }, { x: 34, z: 14 },
      { x: -38, z: 6 }, { x: 42, z: 8 }, { x: -44, z: -8 }
    ];

    treePositions.forEach((pos, index) => {
      const tree = this.createTree(index % 2 === 0);
      tree.position.set(pos.x, 0, pos.z);
      sceneryGroup.add(tree);
    });

    // Low-poly Houses
    const houseConfigs = [
      { x: -20, z: -28, color: 0xFF7043, roof: 0xD32F2F, scale: 1.2 },
      { x: -32, z: -26, color: 0x42A5F5, roof: 0x1976D2, scale: 1.0 },
      { x: 22, z: -24, color: 0xFFCA28, roof: 0xF57C00, scale: 1.1 },
      { x: -18, z: 32, color: 0xAB47BC, roof: 0x7B1FA2, scale: 1.0 },
      { x: 20, z: 30, color: 0x26A69A, roof: 0x00796B, scale: 1.2 },
      { x: 34, z: 28, color: 0xFFA726, roof: 0xE65100, scale: 0.95 }
    ];

    houseConfigs.forEach((cfg) => {
      const house = this.createHouse(cfg.color, cfg.roof, cfg.scale);
      house.position.set(cfg.x, 0, cfg.z);
      sceneryGroup.add(house);
    });

    this.group.add(sceneryGroup);
  }

  private createTree(isRound: boolean): THREE.Group {
    const tree = new THREE.Group();
    // Trunk
    const trunkGeo = new THREE.CylinderGeometry(0.2, 0.3, 1.4, 6);
    const trunkMat = new THREE.MeshLambertMaterial({ color: 0x5D4037 });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = 0.7;
    trunk.castShadow = true;
    tree.add(trunk);

    // Leaves
    const leafColors = [0x43A047, 0x66BB6A, 0x2E7D32];
    const leafMat = new THREE.MeshLambertMaterial({
      color: leafColors[Math.floor(Math.random() * leafColors.length)],
      flatShading: true
    });

    if (isRound) {
      const foliageGeo = new THREE.DodecahedronGeometry(1.2, 1);
      const foliage = new THREE.Mesh(foliageGeo, leafMat);
      foliage.position.y = 2.0;
      foliage.castShadow = true;
      tree.add(foliage);
    } else {
      // Pine style cone layers
      const cone1 = new THREE.Mesh(new THREE.ConeGeometry(1.2, 1.6, 6), leafMat);
      cone1.position.y = 1.6;
      cone1.castShadow = true;
      tree.add(cone1);

      const cone2 = new THREE.Mesh(new THREE.ConeGeometry(0.9, 1.4, 6), leafMat);
      cone2.position.y = 2.4;
      cone2.castShadow = true;
      tree.add(cone2);
    }

    return tree;
  }

  private createHouse(wallColor: number, roofColor: number, scale: number): THREE.Group {
    const house = new THREE.Group();
    house.scale.set(scale, scale, scale);

    // House Body
    const bodyGeo = new THREE.BoxGeometry(4.0, 2.6, 3.2);
    const bodyMat = new THREE.MeshLambertMaterial({ color: wallColor });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 1.3;
    body.castShadow = true;
    body.receiveShadow = true;
    house.add(body);

    // Roof
    const roofGeo = new THREE.ConeGeometry(3.2, 1.8, 4);
    const roofMat = new THREE.MeshLambertMaterial({ color: roofColor });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.rotation.y = Math.PI / 4;
    roof.position.y = 3.3;
    roof.castShadow = true;
    house.add(roof);

    // Front Windows with glowing night materials
    const winMat1 = new THREE.MeshStandardMaterial({
      color: 0xE0F7FA,
      emissive: 0x000000,
      emissiveIntensity: 0,
      roughness: 0.2
    });
    const win1 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.1), winMat1);
    win1.position.set(-1.0, 1.5, 1.62);
    house.add(win1);
    this.windowMaterials.push(winMat1);

    const winMat2 = new THREE.MeshStandardMaterial({
      color: 0xE0F7FA,
      emissive: 0x000000,
      emissiveIntensity: 0,
      roughness: 0.2
    });
    const win2 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.1), winMat2);
    win2.position.set(1.0, 1.5, 1.62);
    house.add(win2);
    this.windowMaterials.push(winMat2);

    // Back Window
    const winMat3 = new THREE.MeshStandardMaterial({
      color: 0xE0F7FA,
      emissive: 0x000000,
      emissiveIntensity: 0,
      roughness: 0.2
    });
    const win3 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.1), winMat3);
    win3.position.set(0, 1.5, -1.62);
    house.add(win3);
    this.windowMaterials.push(winMat3);

    // Warm Window PointLight (turns on at night)
    const houseLight = new THREE.PointLight(0xFFD54F, 0, 10, 1.8);
    houseLight.position.set(0, 1.6, 1.8);
    house.add(houseLight);
    this.windowLights.push(houseLight);

    // Door
    const doorMat = new THREE.MeshLambertMaterial({ color: 0x8D6E63 });
    const door = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.4, 0.1), doorMat);
    door.position.set(0, 0.7, 1.62);
    house.add(door);

    return house;
  }

  /**
   * Turns house window lights on at night and off during daytime/sunset
   */
  public setNightMode(isNight: boolean): void {
    this.windowMaterials.forEach((mat) => {
      if (isNight) {
        mat.color.setHex(0xFFF9C4);
        mat.emissive.setHex(0xFFD54F);
        mat.emissiveIntensity = 1.3;
      } else {
        mat.color.setHex(0xE0F7FA);
        mat.emissive.setHex(0x000000);
        mat.emissiveIntensity = 0;
      }
    });

    this.windowLights.forEach((light) => {
      light.intensity = isNight ? 1.5 : 0;
    });
  }
}
