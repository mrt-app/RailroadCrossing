import * as THREE from 'three';

export interface CrossingGate {
  group: THREE.Group;
  pole: THREE.Mesh;
  barrierPivot: THREE.Group;
  barrierArm: THREE.Mesh;
  redLightLeft: THREE.Mesh;
  redLightRight: THREE.Mesh;
  pointLightLeft: THREE.PointLight;
  pointLightRight: THREE.PointLight;
  armLight: THREE.Mesh;
  armPointLight: THREE.PointLight;
  leftIntensity: number;
  rightIntensity: number;
}

/**
 * 日本の第1種甲 A型踏切 ＆ 旧警報灯（電球式・丸型灯器・ひさし無しクリーン仕様）
 * 添付画像通りの「黄→黒→黄」直角バンド ＆ 中央ひし形プレート ＆ 6本ボルトのJIS公式踏切警標
 */
export class CrossingModel {
  public group: THREE.Group;
  public gates: CrossingGate[] = [];
  public clickableMeshes: THREE.Object3D[] = [];

  // Barrier angle state: 0 = fully closed (horizontal), Math.PI * 0.42 (~76 deg) = fully open (upright)
  public barrierAngle: number = Math.PI * 0.42;
  public targetBarrierAngle: number = Math.PI * 0.42;

  // Blinking lights state & Incandescent simulation
  private blinkTimer: number = 0;
  private isBlinking: boolean = false;
  private blinkPhase: boolean = false;

  constructor() {
    this.group = new THREE.Group();

    // Gate 1: South-East side (facing oncoming traffic from South)
    const gate1 = this.createGate({
      x: 4.8,
      z: 5.2,
      rotationY: 0,
      armDirection: -1 // points towards center of road (-X)
    });
    this.group.add(gate1.group);
    this.gates.push(gate1);

    // Gate 2: North-West side (facing oncoming traffic from North)
    const gate2 = this.createGate({
      x: -4.8,
      z: -5.2,
      rotationY: Math.PI,
      armDirection: -1 // points towards center of road (+X in world)
    });
    this.group.add(gate2.group);
    this.gates.push(gate2);
  }

  private createGate(config: { x: number; z: number; rotationY: number; armDirection: number }): CrossingGate {
    const gateGroup = new THREE.Group();
    gateGroup.position.set(config.x, 0, config.z);
    gateGroup.rotation.y = config.rotationY;

    // =========================================================================
    // 1. Concrete Base Footing (コンクリート基礎台座)
    // =========================================================================
    const baseGeo = new THREE.CylinderGeometry(0.52, 0.62, 0.4, 16);
    const baseMat = new THREE.MeshLambertMaterial({ color: 0x9E9E9E });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.y = 0.2;
    base.receiveShadow = true;
    gateGroup.add(base);

    // Steel anchor flange ring (ベース金具)
    const flangeGeo = new THREE.CylinderGeometry(0.32, 0.35, 0.08, 16);
    const flangeMat = new THREE.MeshLambertMaterial({ color: 0x37474F });
    const flange = new THREE.Mesh(flangeGeo, flangeMat);
    flange.position.y = 0.44;
    gateGroup.add(flange);

    // =========================================================================
    // 2. Main Signal Pole (Yellow & Black トラ縞警報柱)
    // =========================================================================
    const poleHeight = 4.5;
    const poleRadius = 0.11;
    const poleGroup = new THREE.Group();

    const numStripes = 9;
    const stripeHeight = (poleHeight - 0.48) / numStripes;
    for (let i = 0; i < numStripes; i++) {
      const stripeGeo = new THREE.CylinderGeometry(poleRadius, poleRadius, stripeHeight, 16);
      const stripeMat = new THREE.MeshLambertMaterial({
        color: i % 2 === 0 ? 0xFFD600 : 0x212121
      });
      const stripe = new THREE.Mesh(stripeGeo, stripeMat);
      stripe.position.y = 0.48 + stripeHeight / 2 + i * stripeHeight;
      stripe.castShadow = true;
      poleGroup.add(stripe);
      this.clickableMeshes.push(stripe);
    }
    gateGroup.add(poleGroup);

    // =========================================================================
    // 3. Top Cap (頂部キャップ・電鈴ゴング)
    // 柱の先端に隙間なくピタッと被さる黒色ドーム
    // =========================================================================
    const gongGroup = new THREE.Group();
    gongGroup.position.y = poleHeight;

    const gongGeo = new THREE.SphereGeometry(0.22, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.52);
    const gongMat = new THREE.MeshLambertMaterial({ color: 0x212121 });
    const gong = new THREE.Mesh(gongGeo, gongMat);
    gong.position.y = -0.02;
    gong.castShadow = true;
    gongGroup.add(gong);

    const gongFinial = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.04, 0.06, 12),
      new THREE.MeshLambertMaterial({ color: 0x333333 })
    );
    gongFinial.position.y = 0.20;
    gongGroup.add(gongFinial);

    gateGroup.add(gongGroup);
    this.clickableMeshes.push(gong);

    // =========================================================================
    // 4. A型踏切 踏切警標 (Crossbuck X-Sign / 日本の公式踏切クロスマーク)
    // 添付画像通りの「黄→黒→黄」の直角バンド ＆ 中央ひし形プレート ＆ 6本ボルト
    // =========================================================================
    const crossbuckGroup = new THREE.Group();
    crossbuckGroup.position.set(0, 3.8, 0.14);

    const yellowMat = new THREE.MeshLambertMaterial({ color: 0xFFD600 });
    const blackMat = new THREE.MeshLambertMaterial({ color: 0x212121 });
    const boltMat = new THREE.MeshStandardMaterial({ color: 0xCFD8DC, metalness: 0.8, roughness: 0.2 });

    const crossArmLength = 1.85;
    const crossArmWidth = 0.32;
    const crossArmDepth = 0.02;

    const createCrossbuckArm = (angle: number, zOffset: number) => {
      const arm = new THREE.Group();
      arm.rotation.z = angle;
      arm.position.z = zOffset;

      // Base yellow arm
      const baseArm = new THREE.Mesh(
        new THREE.BoxGeometry(crossArmLength, crossArmWidth, crossArmDepth),
        yellowMat
      );
      baseArm.castShadow = true;
      arm.add(baseArm);

      // Two solid black rectangular bands (直角な黒帯) on each side of the arm
      [-0.46, 0.46].forEach(x => {
        const band = new THREE.Mesh(
          new THREE.BoxGeometry(0.36, crossArmWidth + 0.002, crossArmDepth + 0.002),
          blackMat
        );
        band.position.set(x, 0, 0);
        arm.add(band);
      });

      return arm;
    };

    // Cross arms (角度：水平から±40度 / 交差角80度)
    const arm1 = createCrossbuckArm(Math.PI * 0.22, 0);
    const arm2 = createCrossbuckArm(-Math.PI * 0.22, 0.008);
    crossbuckGroup.add(arm1, arm2);

    // Center Diamond Plate (中央の黒いひし形取付プレート)
    const diamondShape = new THREE.Shape();
    const dw = 0.22;
    const dh = 0.17;
    diamondShape.moveTo(0, dh);
    diamondShape.lineTo(dw, 0);
    diamondShape.lineTo(0, -dh);
    diamondShape.lineTo(-dw, 0);
    diamondShape.closePath();

    const diamondGeo = new THREE.ShapeGeometry(diamondShape);
    const diamondPlate = new THREE.Mesh(diamondGeo, blackMat);
    diamondPlate.position.set(0, 0, 0.022);
    crossbuckGroup.add(diamondPlate);

    // 4 Silver Mounting Bolts + 2 Center Rivets (銀色ボルト・リベット金具)
    const boltPositions = [
      [-0.08, 0.06],
      [-0.08, -0.06],
      [0.08, 0.06],
      [0.08, -0.06],
      [-0.03, 0],
      [0.03, 0]
    ];
    const boltGeo = new THREE.CylinderGeometry(0.016, 0.016, 0.02, 12);
    boltGeo.rotateX(Math.PI / 2);

    boltPositions.forEach(([bx, by]) => {
      const bolt = new THREE.Mesh(boltGeo, boltMat);
      bolt.position.set(bx, by, 0.03);
      crossbuckGroup.add(bolt);
    });

    // Stand-off mounting bracket from pole
    const bracketGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.14, 8);
    bracketGeo.rotateX(Math.PI / 2);
    const bracket = new THREE.Mesh(bracketGeo, blackMat);
    bracket.position.z = -0.07;
    crossbuckGroup.add(bracket);

    gateGroup.add(crossbuckGroup);

    // =========================================================================
    // 5. 旧警報灯（電球式・丸型灯器・円形背板・ひさし無しクリーン仕様）
    // =========================================================================
    const lampAssemblyGroup = new THREE.Group();
    lampAssemblyGroup.position.set(0, 2.7, 0.15);

    // Horizontal mounting cross pipe (左右水平支持パイプ)
    const crossPipeGeo = new THREE.CylinderGeometry(0.045, 0.045, 1.5, 12);
    crossPipeGeo.rotateZ(Math.PI / 2);
    const crossPipeMat = new THREE.MeshLambertMaterial({ color: 0x2A2A2A });
    const crossPipe = new THREE.Mesh(crossPipeGeo, crossPipeMat);
    lampAssemblyGroup.add(crossPipe);

    // Center mounting clamp to pole (柱取付金具)
    const clampGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.16, 16);
    const clamp = new THREE.Mesh(clampGeo, crossPipeMat);
    lampAssemblyGroup.add(clamp);

    // Helper: Build a clean Japanese Old-style Incandescent Crossing Warning Light
    const createOldStyleLamp = (xOffset: number) => {
      const singleLamp = new THREE.Group();
      singleLamp.position.set(xOffset, 0, 0.06);

      // (a) Backing Plate (円形背板 / 丸型バックプレート：太陽光を遮る黒い大円盤)
      const backPlateGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.02, 28);
      backPlateGeo.rotateX(Math.PI / 2);
      const backPlateMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
      const backPlate = new THREE.Mesh(backPlateGeo, backPlateMat);
      singleLamp.add(backPlate);

      // (b) Cylindrical Lamp Body (丸型灯体本体)
      const housingGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.12, 28);
      housingGeo.rotateX(Math.PI / 2);
      const housingMat = new THREE.MeshLambertMaterial({ color: 0x222222 });
      const housing = new THREE.Mesh(housingGeo, housingMat);
      housing.position.z = 0.07;
      singleLamp.add(housing);

      // (c) Round Convex Red Glass Lens (丸型凸面・赤色電球レンズ)
      const lensGeo = new THREE.SphereGeometry(0.21, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.45);
      lensGeo.rotateX(Math.PI / 2);
      const lensMat = new THREE.MeshStandardMaterial({
        color: 0x4A0000,
        emissive: 0x000000,
        emissiveIntensity: 0,
        roughness: 0.15,
        metalness: 0.05
      });
      const lens = new THREE.Mesh(lensGeo, lensMat);
      lens.position.z = 0.13;
      singleLamp.add(lens);

      // (d) Warm Incandescent Ruby PointLight
      const pointLight = new THREE.PointLight(0xFF0000, 0, 10, 1.8);
      pointLight.position.set(0, 0, 0.35);
      singleLamp.add(pointLight);

      return { singleLamp, lens, pointLight };
    };

    const leftLamp = createOldStyleLamp(-0.64);
    lampAssemblyGroup.add(leftLamp.singleLamp);
    const redLightLeft = leftLamp.lens;
    const pointLightLeft = leftLamp.pointLight;

    const rightLamp = createOldStyleLamp(0.64);
    lampAssemblyGroup.add(rightLamp.singleLamp);
    const redLightRight = rightLamp.lens;
    const pointLightRight = rightLamp.pointLight;

    gateGroup.add(lampAssemblyGroup);

    // =========================================================================
    // 6. 踏切支障報知装置（非常ボタン箱）
    // 胸の高さ（Y=1.35m）に配置
    // =========================================================================
    const emergGroup = new THREE.Group();
    emergGroup.position.set(0.28 * config.armDirection, 1.35, 0.14);

    const emergBoxGeo = new THREE.BoxGeometry(0.26, 0.40, 0.18);
    const emergBoxMat = new THREE.MeshLambertMaterial({ color: 0xFFD600 });
    const emergBox = new THREE.Mesh(emergBoxGeo, emergBoxMat);
    emergGroup.add(emergBox);

    // Red Push Button
    const buttonMat = new THREE.MeshStandardMaterial({
      color: 0xFF1744,
      emissive: 0xD50000,
      emissiveIntensity: 0.4,
      roughness: 0.3
    });
    const button = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.06, 16), buttonMat);
    button.rotation.x = Math.PI / 2;
    button.position.z = 0.10;
    emergGroup.add(button);

    gateGroup.add(emergGroup);
    this.clickableMeshes.push(emergBox, button);

    // =========================================================================
    // 7. 遮断機本体（黄 → 黒 → 黄の3段警戒色 ＆ カウンターウェイト ＆ 2車線フル幅遮断桿）
    // =========================================================================
    const barrierMachineGroup = new THREE.Group();
    barrierMachineGroup.position.set(-0.70 * config.armDirection, 0, 0.35);

    // Machine Box (黄 → 黒 → 黄の3段カラーリング)
    const boxWidth = 0.65;
    const boxDepth = 0.52;
    const boxTotalHeight = 0.75;
    const sectionHeight = boxTotalHeight / 3; // 0.25m per section

    // 1. Lower section: Yellow (下段：黄)
    const btmBox = new THREE.Mesh(
      new THREE.BoxGeometry(boxWidth, sectionHeight, boxDepth),
      yellowMat
    );
    btmBox.position.y = 0.58 + sectionHeight / 2; // Y = 0.705
    btmBox.castShadow = true;
    barrierMachineGroup.add(btmBox);

    // 2. Middle section: Black (中段：黒)
    const midBox = new THREE.Mesh(
      new THREE.BoxGeometry(boxWidth + 0.002, sectionHeight, boxDepth + 0.002),
      blackMat
    );
    midBox.position.y = 0.58 + sectionHeight * 1.5; // Y = 0.955
    midBox.castShadow = true;
    barrierMachineGroup.add(midBox);

    // 3. Top section: Yellow (上段：黄)
    const topBox = new THREE.Mesh(
      new THREE.BoxGeometry(boxWidth, sectionHeight, boxDepth),
      yellowMat
    );
    topBox.position.y = 0.58 + sectionHeight * 2.5; // Y = 1.205
    topBox.castShadow = true;
    barrierMachineGroup.add(topBox);
    this.clickableMeshes.push(btmBox, midBox, topBox);

    // Pedestal Base (コンクリート台座)
    const pedestal = new THREE.Mesh(
      new THREE.BoxGeometry(0.72, 0.58, 0.58),
      new THREE.MeshLambertMaterial({ color: 0x9E9E9E })
    );
    pedestal.position.y = 0.29;
    barrierMachineGroup.add(pedestal);

    // Front Inspection Door panel (黒枠付きメンテ扉)
    const doorPanel = new THREE.Mesh(
      new THREE.BoxGeometry(0.52, 0.68, 0.02),
      new THREE.MeshLambertMaterial({ color: 0x2A2A2A })
    );
    doorPanel.position.set(0, 0.955, 0.27);
    barrierMachineGroup.add(doorPanel);

    // Barrier Arm Pivot
    const barrierPivot = new THREE.Group();
    barrierPivot.position.set(0, 1.05, 0.32);

    // Heavy Counterweight Assembly (ツイン・バランス錘)
    const counterGeo = new THREE.BoxGeometry(0.95, 0.28, 0.22);
    const counterMat = new THREE.MeshLambertMaterial({ color: 0x263238 });
    const counterWeight = new THREE.Mesh(counterGeo, counterMat);
    counterWeight.position.set(-0.55 * config.armDirection, 0, 0);
    counterWeight.castShadow = true;
    barrierPivot.add(counterWeight);

    // Pivot Clamp Bracket
    const clampMetal = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 0.22, 16),
      new THREE.MeshLambertMaterial({ color: 0x111111 })
    );
    clampMetal.rotation.x = Math.PI / 2;
    barrierPivot.add(clampMetal);

    // Barrier Boom (道路2車線分 8.6m のフルワイド遮断桿)
    const boomLength = 8.6;
    const armGroup = new THREE.Group();
    const armNumStripes = 16;
    const armStripeLen = boomLength / armNumStripes;

    for (let i = 0; i < armNumStripes; i++) {
      const stripeGeo = new THREE.BoxGeometry(armStripeLen, 0.13, 0.07);
      const stripeMat = new THREE.MeshLambertMaterial({
        color: i % 2 === 0 ? 0xFFD600 : 0x212121
      });
      const segment = new THREE.Mesh(stripeGeo, stripeMat);
      segment.position.set((i * armStripeLen + armStripeLen / 2) * config.armDirection, 0, 0);
      segment.castShadow = true;
      armGroup.add(segment);
    }

    // Dual Red Reflector Lamps on Barrier Boom (中央と先端寄りの桿上赤色標識灯)
    const armLightGeo = new THREE.SphereGeometry(0.09, 12, 12);
    const armLightMat = new THREE.MeshStandardMaterial({
      color: 0x660000,
      emissive: 0x000000,
      roughness: 0.2
    });

    const armLight1 = new THREE.Mesh(armLightGeo, armLightMat);
    armLight1.position.set(3.2 * config.armDirection, 0.09, 0);
    armGroup.add(armLight1);

    const armLight2 = new THREE.Mesh(armLightGeo, armLightMat);
    armLight2.position.set(6.4 * config.armDirection, 0.09, 0);
    armGroup.add(armLight2);

    const armPointLight = new THREE.PointLight(0xFF1744, 0, 6);
    armPointLight.position.set(4.8 * config.armDirection, 0.15, 0.15);
    armGroup.add(armPointLight);

    barrierPivot.add(armGroup);
    barrierMachineGroup.add(barrierPivot);
    gateGroup.add(barrierMachineGroup);

    // Initial barrier angle (open = upright ~76 degrees)
    barrierPivot.rotation.z = -this.barrierAngle;

    return {
      group: gateGroup,
      pole: poleGroup.children[0] as THREE.Mesh,
      barrierPivot,
      barrierArm: armGroup.children[0] as THREE.Mesh,
      redLightLeft,
      redLightRight,
      pointLightLeft,
      pointLightRight,
      armLight: armLight1,
      armPointLight,
      leftIntensity: 0,
      rightIntensity: 0
    };
  }

  public setTrainDirection(_direction: number): void {
    // Legacy support
  }

  public setBlinking(blinking: boolean): void {
    this.isBlinking = blinking;
    if (!blinking) {
      this.gates.forEach(gate => {
        gate.leftIntensity = 0;
        gate.rightIntensity = 0;
        (gate.redLightLeft.material as THREE.MeshStandardMaterial).emissive.setHex(0x000000);
        (gate.redLightRight.material as THREE.MeshStandardMaterial).emissive.setHex(0x000000);
        gate.pointLightLeft.intensity = 0;
        gate.pointLightRight.intensity = 0;
        (gate.armLight.material as THREE.MeshStandardMaterial).emissive.setHex(0x000000);
        gate.armPointLight.intensity = 0;
      });
    }
  }

  public setTargetBarrierAngle(closed: boolean): void {
    this.targetBarrierAngle = closed ? 0 : Math.PI * 0.42;
  }

  public update(delta: number): void {
    // 1. Smoothly interpolate barrier angle (重厚な遮断機の下降・上昇動作)
    const speed = 1.45;
    if (Math.abs(this.barrierAngle - this.targetBarrierAngle) > 0.005) {
      if (this.barrierAngle < this.targetBarrierAngle) {
        this.barrierAngle = Math.min(this.targetBarrierAngle, this.barrierAngle + speed * delta);
      } else {
        this.barrierAngle = Math.max(this.targetBarrierAngle, this.barrierAngle - speed * delta);
      }

      this.gates[0].barrierPivot.rotation.z = -this.barrierAngle;
      this.gates[1].barrierPivot.rotation.z = -this.barrierAngle;
    }

    // 2. 電球式旧警報灯のリアルな点滅＆残光物理シミュレーション
    if (this.isBlinking) {
      this.blinkTimer += delta;
      if (this.blinkTimer >= 0.445) {
        this.blinkTimer = 0;
        this.blinkPhase = !this.blinkPhase;
      }

      // Smooth incandescent thermal heating & cooling curve (電球の温かい残光と立ち上がり)
      const targetLeft = this.blinkPhase ? 1.0 : 0.0;
      const targetRight = this.blinkPhase ? 0.0 : 1.0;
      const glowSpeed = 12.0;

      this.gates.forEach(gate => {
        gate.leftIntensity += (targetLeft - gate.leftIntensity) * Math.min(delta * glowSpeed, 1.0);
        gate.rightIntensity += (targetRight - gate.rightIntensity) * Math.min(delta * glowSpeed, 1.0);

        const leftMat = gate.redLightLeft.material as THREE.MeshStandardMaterial;
        const rightMat = gate.redLightRight.material as THREE.MeshStandardMaterial;

        // Vivid ruby red emission (深みのある純粋な赤色電球発光)
        leftMat.emissive.setRGB(gate.leftIntensity * 1.0, 0, 0);
        leftMat.emissiveIntensity = gate.leftIntensity * 1.6;
        gate.pointLightLeft.intensity = gate.leftIntensity * 2.8;

        rightMat.emissive.setRGB(gate.rightIntensity * 1.0, 0, 0);
        rightMat.emissiveIntensity = gate.rightIntensity * 1.6;
        gate.pointLightRight.intensity = gate.rightIntensity * 2.8;

        // Barrier arm center red indicator lamp
        const armMat = gate.armLight.material as THREE.MeshStandardMaterial;
        const armGlow = (gate.leftIntensity + gate.rightIntensity) * 0.5;
        armMat.emissive.setRGB(armGlow * 0.9, 0, 0);
        gate.armPointLight.intensity = armGlow * 1.2;
      });
    }
  }

  public isBarrierFullyDown(): boolean {
    return this.barrierAngle <= 0.05;
  }

  public isBarrierFullyUp(): boolean {
    return this.barrierAngle >= Math.PI * 0.40;
  }
}
