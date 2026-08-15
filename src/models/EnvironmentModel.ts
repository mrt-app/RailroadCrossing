import * as THREE from 'three';

/**
 * Creates a focused, high-detail miniature environment: terrain, rails, road, streetlights, trees, houses, and station.
 */
export class EnvironmentModel {
  public group: THREE.Group;
  public roadMeshes: THREE.Mesh[] = [];
  public windowMaterials: THREE.MeshStandardMaterial[] = [];
  public streetLightMaterials: THREE.MeshStandardMaterial[] = [];
  public streetGroundGlows: THREE.Mesh[] = [];

  constructor() {
    this.group = new THREE.Group();
    this.createTerrain();
    this.createTracks();
    this.createRoad();
    this.createCrossingPavement();
    this.createStationPlatform();
    this.createStreetlights();
    this.createScenery();
  }

  private createTerrain(): void {
    // Compact Grass Field (65m x 65m)
    const grassGeo = new THREE.PlaneGeometry(65, 65);
    const grassMat = new THREE.MeshLambertMaterial({ color: 0x7BC850 });
    const grass = new THREE.Mesh(grassGeo, grassMat);
    grass.rotation.x = -Math.PI / 2;
    grass.position.y = -0.05;
    grass.receiveShadow = true;
    this.group.add(grass);

    // River in background
    const riverGeo = new THREE.PlaneGeometry(65, 14);
    const riverMat = new THREE.MeshLambertMaterial({ color: 0x4FC3F7 });
    const river = new THREE.Mesh(riverGeo, riverMat);
    river.rotation.x = -Math.PI / 2;
    river.position.set(0, -0.04, -28);
    river.receiveShadow = true;
    this.group.add(river);
  }

  private createTracks(): void {
    const trackGroup = new THREE.Group();
    const trackLength = 65;
    const trackZPositions = [-2.2, 2.2];
    const tieSpacing = 1.0;
    const numTiesPerTrack = Math.floor(trackLength / tieSpacing);
    const totalTies = numTiesPerTrack * trackZPositions.length;

    // Sleepers (Ties / 枕木) - Single InstancedMesh (1 draw call)
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
        color: 0xDDDDDD,
        metalness: 0.85,
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
    const roadLength = 56;
    const roadWidth = 9.0;

    // Asphalt Road
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
      const swGeo = new THREE.BoxGeometry(1.4, 0.14, roadLength);
      const sw = new THREE.Mesh(swGeo, sidewalkMat);
      sw.position.set(xPos, 0.07, 0);
      sw.receiveShadow = true;
      roadGroup.add(sw);
    });

    // Center Yellow Dotted Line
    const centerLineMat = new THREE.MeshBasicMaterial({ color: 0xFFD600 });
    [-1, 1].forEach((dir) => {
      for (let z = 5.0; z < roadLength / 2 - 2; z += 3.5) {
        const line = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 2.0), centerLineMat);
        line.rotation.x = -Math.PI / 2;
        line.position.set(0, 0.03, dir * z);
        roadGroup.add(line);
      }
    });

    // Roadside Stop Signs (止まれ)
    [-1, 1].forEach((dir) => {
      const signGroup = new THREE.Group();
      signGroup.position.set(-4.5 * dir, 0, 7.8 * dir);

      const signPole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, 2.4, 8),
        new THREE.MeshLambertMaterial({ color: 0x9E9E9E })
      );
      signPole.position.y = 1.2;
      signGroup.add(signPole);

      const signHead = new THREE.Mesh(
        new THREE.ConeGeometry(0.55, 0.04, 3),
        new THREE.MeshLambertMaterial({ color: 0xD50000 })
      );
      signHead.rotation.x = Math.PI / 2;
      signHead.rotation.z = Math.PI;
      signHead.position.set(0, 2.2, 0);
      signGroup.add(signHead);

      roadGroup.add(signGroup);
    });

    this.group.add(roadGroup);
  }

  private createCrossingPavement(): void {
    const paveGroup = new THREE.Group();

    // Rubber/Timber crossing panels between tracks
    const paveGeo = new THREE.BoxGeometry(7.6, 0.16, 7.8);
    const paveMat = new THREE.MeshLambertMaterial({ color: 0x2C3437 });
    const pavement = new THREE.Mesh(paveGeo, paveMat);
    pavement.position.set(0, 0.22, 0);
    pavement.receiveShadow = true;
    paveGroup.add(pavement);
    this.roadMeshes.push(pavement);

    // Stop Lines (停止線)
    const stopLineMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    [-1, 1].forEach((dir) => {
      const stopLine = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 0.45), stopLineMat);
      stopLine.rotation.x = -Math.PI / 2;
      stopLine.position.set(-1.9 * dir, 0.035, 6.4 * dir);
      paveGroup.add(stopLine);
    });

    this.group.add(paveGroup);
  }

  private createStationPlatform(): void {
    const stationGroup = new THREE.Group();

    // Platform Slab
    const platformGeo = new THREE.BoxGeometry(22, 0.95, 3.2);
    const platformMat = new THREE.MeshLambertMaterial({ color: 0xB0BEC5 });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.set(18, 0.48, -5.4);
    platform.receiveShadow = true;
    stationGroup.add(platform);

    // Yellow Braille Safety Line
    const brailleGeo = new THREE.BoxGeometry(21.6, 0.02, 0.25);
    const brailleMat = new THREE.MeshBasicMaterial({ color: 0xFFD600 });
    const braille = new THREE.Mesh(brailleGeo, brailleMat);
    braille.position.set(18, 0.96, -4.2);
    stationGroup.add(braille);

    // Platform Roof
    const roofGeo = new THREE.BoxGeometry(18, 0.18, 3.6);
    const roofMat = new THREE.MeshLambertMaterial({ color: 0x455A64 });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.set(18, 2.8, -5.4);
    stationGroup.add(roof);

    // Roof pillars
    const pillarMat = new THREE.MeshLambertMaterial({ color: 0xEEEEEE });
    [-7, -2, 3, 7].forEach((xOffset) => {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.0, 8), pillarMat);
      p.position.set(18 + xOffset, 1.9, -5.4);
      stationGroup.add(p);
    });

    this.group.add(stationGroup);
  }

  /**
   * Creates Japanese Streetlights (街路灯) prominently positioned along the sidewalks
   */
  private createStreetlights(): void {
    // Streetlight Positions (along sidewalks, clear of the crossing gate)
    const streetLightPositions = [
      { x: 5.6, z: 9.2, armDir: -1 },   // South-East sidewalk (close to crossing)
      { x: -5.6, z: 9.2, armDir: 1 },   // South-West sidewalk (close to crossing)
      { x: 5.6, z: -9.2, armDir: -1 },  // North-East sidewalk (close to crossing)
      { x: -5.6, z: -9.2, armDir: 1 },  // North-West sidewalk (close to crossing)
      { x: 5.6, z: 20.0, armDir: -1 },  // South road entrance
      { x: -5.6, z: -20.0, armDir: 1 }  // North road entrance
    ];

    // High-visibility Japanese Streetlight Colors
    const poleMat = new THREE.MeshLambertMaterial({ color: 0x2E7D32 }); // Rich Forest Green
    const silverMat = new THREE.MeshStandardMaterial({ color: 0xE0E0E0, metalness: 0.8, roughness: 0.2 });
    const shadeMat = new THREE.MeshLambertMaterial({ color: 0x1B5E20 });

    streetLightPositions.forEach((pos) => {
      const poleGroup = new THREE.Group();
      poleGroup.position.set(pos.x, 0, pos.z);

      // 1. Concrete Pedestal Base (コンクリート台座)
      const base = new THREE.Mesh(
        new THREE.CylinderGeometry(0.28, 0.35, 0.55, 12),
        new THREE.MeshLambertMaterial({ color: 0x9E9E9E })
      );
      base.position.y = 0.27;
      base.receiveShadow = true;
      poleGroup.add(base);

      // 2. Main Sturdy Green Pole (高さ 4.6m)
      const pole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.16, 4.4, 12),
        poleMat
      );
      pole.position.y = 2.45;
      pole.castShadow = true;
      poleGroup.add(pole);

      // Decorative silver rings
      [1.0, 2.5, 3.8].forEach(y => {
        const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.08, 12), silverMat);
        ring.position.y = y;
        poleGroup.add(ring);
      });

      // 3. Arched Cantilever Arm reaching over the street
      const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, 1.8, 10),
        poleMat
      );
      arm.rotation.z = pos.armDir * (Math.PI / 3.6);
      arm.position.set(pos.armDir * 0.75, 4.85, 0);
      poleGroup.add(arm);

      // 4. Conical Green Lampshade (傘型シェード)
      const shade = new THREE.Mesh(
        new THREE.ConeGeometry(0.75, 0.40, 16, 1, true),
        shadeMat
      );
      shade.position.set(pos.armDir * 1.5, 5.15, 0);
      shade.castShadow = true;
      poleGroup.add(shade);

      // Top silver finial cap
      const finial = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), silverMat);
      finial.position.set(pos.armDir * 1.5, 5.38, 0);
      poleGroup.add(finial);

      // 5. Large Glowing LED Globe Bulb (昼間も白いガラス玉として見え、夜に明るく光る)
      const bulbMat = new THREE.MeshStandardMaterial({
        color: 0xFFFFFF,
        emissive: 0xFFF9C4,
        emissiveIntensity: 0.5,
        roughness: 0.1
      });
      const bulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.32, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.6),
        bulbMat
      );
      bulb.position.set(pos.armDir * 1.5, 5.0, 0);
      poleGroup.add(bulb);
      this.streetLightMaterials.push(bulbMat);

      // 6. Atmospheric Night Light Cone Beam (夜間の光のすじ)
      const coneGeo = new THREE.ConeGeometry(3.8, 5.0, 16, 1, true);
      const coneMat = new THREE.MeshBasicMaterial({
        color: 0xFFE082,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        depthWrite: false
      });
      const lightBeam = new THREE.Mesh(coneGeo, coneMat);
      lightBeam.position.set(pos.armDir * 1.5, 2.5, 0);
      poleGroup.add(lightBeam);
      this.streetGroundGlows.push(lightBeam);

      // 7. Warm Ground Illumination Disc (アスファルト路面への照り返し)
      const glowGeo = new THREE.CircleGeometry(4.5, 20);
      const glowMat = new THREE.MeshBasicMaterial({
        color: 0xFFD54F,
        transparent: true,
        opacity: 0,
        depthWrite: false
      });
      const groundGlow = new THREE.Mesh(glowGeo, glowMat);
      groundGlow.rotation.x = -Math.PI / 2;
      groundGlow.position.set(pos.armDir * 1.5, 0.04, 0);
      poleGroup.add(groundGlow);
      this.streetGroundGlows.push(groundGlow);

      this.group.add(poleGroup);
    });
  }

  private createScenery(): void {
    const sceneryGroup = new THREE.Group();

    // Low-poly Town Trees placed around crossing
    const treePositions = [
      { x: -11, z: -10 }, { x: -16, z: -12 },
      { x: -10, z: 10 }, { x: -15, z: 12 },
      { x: 12, z: 11 }, { x: 18, z: 13 },
      { x: -22, z: 5 }, { x: -24, z: -6 }
    ];

    treePositions.forEach((pos, index) => {
      const tree = this.createTree(index % 2 === 0);
      tree.position.set(pos.x, 0, pos.z);
      sceneryGroup.add(tree);
    });

    // Cute Town Houses
    const houseConfigs = [
      { x: -15, z: -19, color: 0xFF7043, roof: 0xD32F2F, scale: 1.1 },
      { x: -22, z: -18, color: 0x42A5F5, roof: 0x1976D2, scale: 0.95 },
      { x: 16, z: -18, color: 0xFFCA28, roof: 0xF57C00, scale: 1.0 },
      { x: -14, z: 20, color: 0xAB47BC, roof: 0x7B1FA2, scale: 0.95 },
      { x: 15, z: 19, color: 0x26A69A, roof: 0x00796B, scale: 1.05 }
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
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.24, 1.2, 6),
      new THREE.MeshLambertMaterial({ color: 0x5D4037 })
    );
    trunk.position.y = 0.6;
    tree.add(trunk);

    const leafColors = [0x43A047, 0x66BB6A, 0x2E7D32];
    const leafMat = new THREE.MeshLambertMaterial({
      color: leafColors[Math.floor(Math.random() * leafColors.length)],
      flatShading: true
    });

    if (isRound) {
      const foliage = new THREE.Mesh(new THREE.DodecahedronGeometry(1.1, 1), leafMat);
      foliage.position.y = 1.8;
      tree.add(foliage);
    } else {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(1.1, 1.6, 6), leafMat);
      cone.position.y = 1.6;
      tree.add(cone);
    }

    return tree;
  }

  private createHouse(wallColor: number, roofColor: number, scale: number): THREE.Group {
    const house = new THREE.Group();
    house.scale.set(scale, scale, scale);

    const body = new THREE.Mesh(
      new THREE.BoxGeometry(3.6, 2.4, 3.0),
      new THREE.MeshLambertMaterial({ color: wallColor })
    );
    body.position.y = 1.2;
    body.receiveShadow = true;
    house.add(body);

    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(2.9, 1.6, 4),
      new THREE.MeshLambertMaterial({ color: roofColor })
    );
    roof.rotation.y = Math.PI / 4;
    roof.position.y = 3.0;
    house.add(roof);

    // Front Windows with glowing night materials
    const winMat = new THREE.MeshStandardMaterial({
      color: 0xE0F7FA,
      emissive: 0x000000,
      emissiveIntensity: 0,
      roughness: 0.2
    });
    this.windowMaterials.push(winMat);

    const win1 = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.1), winMat);
    win1.position.set(-0.9, 1.35, 1.52);
    house.add(win1);

    const win2 = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.1), winMat);
    win2.position.set(0.9, 1.35, 1.52);
    house.add(win2);

    const door = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 1.3, 0.1),
      new THREE.MeshLambertMaterial({ color: 0x8D6E63 })
    );
    door.position.set(0, 0.65, 1.52);
    house.add(door);

    return house;
  }

  public setNightMode(isNight: boolean): void {
    // 1. House Windows
    this.windowMaterials.forEach((mat) => {
      if (isNight) {
        mat.color.setHex(0xFFF9C4);
        mat.emissive.setHex(0xFFD54F);
        mat.emissiveIntensity = 1.4;
      } else {
        mat.color.setHex(0xE0F7FA);
        mat.emissive.setHex(0x000000);
        mat.emissiveIntensity = 0;
      }
    });

    // 2. Streetlights Bulbs
    this.streetLightMaterials.forEach((mat) => {
      if (isNight) {
        mat.color.setHex(0xFFFFFF);
        mat.emissive.setHex(0xFFF176);
        mat.emissiveIntensity = 3.0;
      } else {
        mat.color.setHex(0xFFFFFF);
        mat.emissive.setHex(0xFFF9C4);
        mat.emissiveIntensity = 0.5;
      }
    });

    // 3. Street Ground Glows & Light Beams
    this.streetGroundGlows.forEach((mesh) => {
      const mat = mesh.material as THREE.MeshBasicMaterial;
      if (mat) {
        if (mesh.geometry.type === 'ConeGeometry') {
          mat.opacity = isNight ? 0.22 : 0;
        } else {
          mat.opacity = isNight ? 0.48 : 0;
        }
      }
    });
  }
}
