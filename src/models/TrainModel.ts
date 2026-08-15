import * as THREE from 'three';

export type TrainType =
  | 'yamanote'
  | 'freight'
  | 'hayabusa'
  | 'komachi'
  | 'doctor_yellow'
  | 'express'
  | 'chuo'
  | 'steam'
  | 'shonan';

export interface TrainTheme {
  type: TrainType;
  name: string;
  bodyColor: number;
  stripeColor: number;
  roofColor: number;
  accentColor?: number;
  category: 'commuter' | 'shinkansen' | 'freight' | 'steam' | 'express';
  isStainless: boolean;
}

export const TRAIN_THEMES: Record<TrainType, TrainTheme> = {
  yamanote: {
    type: 'yamanote',
    name: 'みどりの電車 🚃',
    bodyColor: 0xD6DBDF,
    stripeColor: 0x76B82A,
    roofColor: 0x78909C,
    accentColor: 0x1A1A1A,
    category: 'commuter',
    isStainless: true
  },
  freight: {
    type: 'freight',
    name: 'かもつ列車 📦',
    bodyColor: 0x0D47A1,
    stripeColor: 0xFFFFFF,
    roofColor: 0x455A64,
    category: 'freight',
    isStainless: false
  },
  hayabusa: {
    type: 'hayabusa',
    name: 'みどりの新幹線 🚅',
    bodyColor: 0xF5F7FA,
    stripeColor: 0xE4007F,
    roofColor: 0x008779,
    category: 'shinkansen',
    isStainless: false
  },
  komachi: {
    type: 'komachi',
    name: 'あかい新幹線 🚅',
    bodyColor: 0xF5F7FA,
    stripeColor: 0xB71C1C,
    roofColor: 0xB71C1C,
    category: 'shinkansen',
    isStainless: false
  },
  doctor_yellow: {
    type: 'doctor_yellow',
    name: 'きいろい新幹線 🚄',
    bodyColor: 0xFFD600,
    stripeColor: 0x0D47A1,
    roofColor: 0x90A4AE,
    category: 'shinkansen',
    isStainless: false
  },
  express: {
    type: 'express',
    name: 'とっきゅう列車 🚩',
    bodyColor: 0xFFFFFF,
    stripeColor: 0xD50000,
    roofColor: 0x1A1A1A,
    category: 'express',
    isStainless: false
  },
  chuo: {
    type: 'chuo',
    name: 'オレンジの電車 🚃',
    bodyColor: 0xD6DBDF,
    stripeColor: 0xFF6D00,
    roofColor: 0x78909C,
    category: 'commuter',
    isStainless: true
  },
  steam: {
    type: 'steam',
    name: 'SLきかんしゃ 🚂',
    bodyColor: 0x1A1A1A,
    stripeColor: 0xBDBDBD,
    roofColor: 0x111111,
    category: 'steam',
    isStainless: false
  },
  shonan: {
    type: 'shonan',
    name: 'ツートンカラーの電車 🚃',
    bodyColor: 0x1B5E20,
    stripeColor: 0xE65100,
    roofColor: 0x616161,
    category: 'commuter',
    isStainless: false
  }
};

export class TrainModel {
  public group: THREE.Group;
  public totalLength: number = 0;
  public wheels: THREE.Mesh[] = [];
  public headLights: THREE.PointLight[] = [];
  public windowMeshes: THREE.Mesh[] = [];

  constructor(type: TrainType = 'yamanote', direction: number = 1, numCars: number = 2) {
    this.group = new THREE.Group();
    const theme = TRAIN_THEMES[type];

    const carLength = numCars === 2 ? 8.6 : 11.0;
    const carWidth = 2.55;
    const carHeight = 2.6;
    const carGap = 0.4;

    if (theme.category === 'freight') {
      this.buildFreightFormation(10.0, carWidth, carHeight, carGap, direction);
      this.totalLength = 10.0 * 3 + carGap * 2;
    } else if (theme.category === 'steam') {
      this.buildSteamFormation(9.0, carWidth, carHeight, carGap, direction);
      this.totalLength = 9.0 * 3 + carGap * 2;
    } else if (numCars === 2) {
      // 2-car formation (Local train stopping neatly at the station)
      const leadCar = this.createCar(theme, carLength, carWidth, carHeight, 'lead', direction);
      leadCar.position.x = (carLength + carGap) * 0.5 * direction;
      this.group.add(leadCar);

      const tailCar = this.createCar(theme, carLength, carWidth, carHeight, 'tail', direction);
      tailCar.position.x = -(carLength + carGap) * 0.5 * direction;
      this.group.add(tailCar);

      this.createGangway(0, carWidth, carHeight);
      this.totalLength = (carLength + carGap) * 2;
    } else {
      // 3-car formation (Shinkansen / Express through-trains)
      const leadCar = this.createCar(theme, carLength, carWidth, carHeight, 'lead', direction);
      leadCar.position.x = (carLength + carGap) * direction;
      this.group.add(leadCar);

      const midCar = this.createCar(theme, carLength, carWidth, carHeight, 'mid', direction);
      midCar.position.x = 0;
      this.group.add(midCar);

      const tailCar = this.createCar(theme, carLength, carWidth, carHeight, 'tail', direction);
      tailCar.position.x = -(carLength + carGap) * direction;
      this.group.add(tailCar);

      this.createGangway((carLength + carGap) * direction * 0.5, carWidth, carHeight);
      this.createGangway(-(carLength + carGap) * direction * 0.5, carWidth, carHeight);
      this.totalLength = (carLength + carGap) * 3;
    }
  }

  private createCar(
    theme: TrainTheme,
    length: number,
    width: number,
    height: number,
    role: 'lead' | 'mid' | 'tail',
    direction: number
  ): THREE.Group {
    const car = new THREE.Group();

    if (theme.category === 'shinkansen') {
      this.buildShinkansenCar(car, theme, length, width, height, role, direction);
    } else if (theme.category === 'express') {
      this.buildExpressCar(car, theme, length, width, height, role, direction);
    } else {
      this.buildCommuterCar(car, theme, length, width, height, role, direction);
    }

    this.buildUnderfloorEquipment(car, length, width);
    this.buildBogies(car, length, width);

    return car;
  }

  /**
   * Builds Heavy Freight Train (EF210 Electric Loco + Container Flat Car + Oil Tank Car)
   */
  private buildFreightFormation(
    carLength: number,
    carWidth: number,
    carHeight: number,
    carGap: number,
    direction: number
  ): void {
    // 1. Electric Locomotive EF210 (電気機関車)
    const loco = new THREE.Group();
    this.buildElectricLocomotive(loco, carLength, carWidth, carHeight, direction);
    this.buildBogies(loco, carLength, carWidth);
    loco.position.x = (carLength + carGap) * direction;
    this.group.add(loco);

    // 2. Koki 107 Container Car (コキ107形 コンテナ積載車)
    const containerCar = new THREE.Group();
    this.buildContainerCar(containerCar, carLength, carWidth, carHeight);
    this.buildBogies(containerCar, carLength, carWidth);
    containerCar.position.x = 0;
    this.group.add(containerCar);

    // 3. Taki 1000 Petroleum Tank Car (タキ1000形 石油ガソリン専用タンク車)
    const tankCar = new THREE.Group();
    this.buildTankCar(tankCar, carLength, carWidth, carHeight);
    this.buildBogies(tankCar, carLength, carWidth);
    tankCar.position.x = -(carLength + carGap) * direction;
    this.group.add(tankCar);
  }

  /**
   * Builds Steam Locomotive Formation (D51 SL + Retro Passenger Cars)
   */
  private buildSteamFormation(
    carLength: number,
    carWidth: number,
    carHeight: number,
    carGap: number,
    direction: number
  ): void {
    // 1. Steam Locomotive + Tender (SL 蒸気機関車)
    const sl = new THREE.Group();
    this.buildSteamLocomotive(sl, carLength, carWidth, carHeight, direction);
    this.buildBogies(sl, carLength, carWidth);
    sl.position.x = (carLength + carGap) * direction;
    this.group.add(sl);

    // 2. Retro Brown Passenger Car 1 (旧型レトロ客車 スハ43系)
    const pass1 = new THREE.Group();
    this.buildRetroPassengerCar(pass1, carLength, carWidth, carHeight);
    this.buildBogies(pass1, carLength, carWidth);
    pass1.position.x = 0;
    this.group.add(pass1);

    // 3. Retro Brown Passenger Car 2
    const pass2 = new THREE.Group();
    this.buildRetroPassengerCar(pass2, carLength, carWidth, carHeight);
    this.buildBogies(pass2, carLength, carWidth);
    pass2.position.x = -(carLength + carGap) * direction;
    this.group.add(pass2);
  }

  /**
   * Electric Locomotive EF210 (JR貨物 電気機関車)
   */
  private buildElectricLocomotive(
    loco: THREE.Group,
    length: number,
    width: number,
    height: number,
    direction: number
  ): void {
    const efBlueMat = new THREE.MeshStandardMaterial({ color: 0x0D47A1, roughness: 0.3 });
    const efWhiteMat = new THREE.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.3 });
    const roofMat = new THREE.MeshLambertMaterial({ color: 0x455A64 });

    // Main Boxy High-Power Body
    const bodyGeo = new THREE.BoxGeometry(length, height * 0.9, width);
    const body = new THREE.Mesh(bodyGeo, efBlueMat);
    body.position.y = height * 0.45 + 0.52;
    body.castShadow = true;
    loco.add(body);

    // White Waist Band (JR貨物白帯)
    const stripe = new THREE.Mesh(
      new THREE.BoxGeometry(length + 0.02, 0.35, width + 0.02),
      efWhiteMat
    );
    stripe.position.y = height * 0.45 + 0.52;
    loco.add(stripe);

    // Roof & Inverter Covers
    const roof = new THREE.Mesh(
      new THREE.BoxGeometry(length * 0.95, 0.35, width * 0.9),
      roofMat
    );
    roof.position.y = height + 0.52;
    loco.add(roof);

    // Twin Pantographs on front & rear of locomotive
    const panto1 = this.createSingleArmPantograph(width);
    panto1.position.set(-length * 0.32, height + 0.52 + 0.25, 0);
    loco.add(panto1);

    const panto2 = this.createSingleArmPantograph(width);
    panto2.position.set(length * 0.32, height + 0.52 + 0.25, 0);
    panto2.rotation.y = Math.PI;
    loco.add(panto2);

    // High Power Nose Headlights
    const hlMat = new THREE.MeshBasicMaterial({ color: 0xFFFFF0 });
    [-width * 0.32, width * 0.32].forEach(z => {
      const hl = new THREE.Mesh(new THREE.CircleGeometry(0.16, 16), hlMat);
      hl.rotation.y = Math.PI / 2 * direction;
      hl.position.set((length / 2 + 0.02) * direction, height * 0.4 + 0.52, z);
      loco.add(hl);
    });

    const light = new THREE.PointLight(0xFFFDE7, 2.5, 30);
    light.position.set((length / 2 + 1.5) * direction, height * 0.5 + 0.52, 0);
    loco.add(light);
    this.headLights.push(light);
  }

  /**
   * Koki 107 Container Car with 19D / 20D / JOT Containers
   */
  private buildContainerCar(car: THREE.Group, length: number, width: number, height: number): void {
    const chassisMat = new THREE.MeshStandardMaterial({ color: 0x37474F, metalness: 0.6, roughness: 0.3 });

    // Flat Bed Chassis (コキ低床フレーム)
    const chassis = new THREE.Mesh(
      new THREE.BoxGeometry(length, 0.22, width),
      chassisMat
    );
    chassis.position.y = 0.62;
    chassis.castShadow = true;
    car.add(chassis);

    // 3 Large ISO / JR Containers (JRあずき色コンテナ ＆ JOTコンテナ)
    const containerColors = [0x8D2424, 0x1B5E20, 0x8D2424]; // Maroon, Green, Maroon
    const numContainers = 3;
    const cLen = (length * 0.88) / numContainers;
    const cWidth = width * 0.92;
    const cHeight = height * 0.78;

    for (let i = 0; i < numContainers; i++) {
      const cX = -length * 0.32 + i * (cLen + 0.15);
      const cMat = new THREE.MeshStandardMaterial({
        color: containerColors[i],
        roughness: 0.4
      });

      const container = new THREE.Mesh(
        new THREE.BoxGeometry(cLen, cHeight, cWidth),
        cMat
      );
      container.position.set(cX, 0.62 + 0.11 + cHeight / 2, 0);
      container.castShadow = true;
      car.add(container);

      // White logo stripe
      const logoStripe = new THREE.Mesh(
        new THREE.BoxGeometry(cLen + 0.01, 0.18, cWidth + 0.01),
        new THREE.MeshBasicMaterial({ color: 0xFFFFFF })
      );
      logoStripe.position.set(cX, 0.62 + 0.11 + cHeight * 0.5, 0);
      car.add(logoStripe);
    }
  }

  /**
   * Taki 1000 Petroleum Tank Car (タキ1000形 タンク車)
   */
  private buildTankCar(car: THREE.Group, length: number, width: number, _height: number): void {
    const greenMat = new THREE.MeshStandardMaterial({ color: 0x004D40, roughness: 0.3 }); // Emerald Green
    const grayMat = new THREE.MeshStandardMaterial({ color: 0x78909C, roughness: 0.3 });

    // Chassis frame
    const chassis = new THREE.Mesh(
      new THREE.BoxGeometry(length, 0.22, width),
      new THREE.MeshLambertMaterial({ color: 0x212121 })
    );
    chassis.position.y = 0.62;
    car.add(chassis);

    // Cylindrical Oil Tank (横向き大型タンク)
    const tankRadius = width * 0.46;
    const tankLen = length * 0.88;
    const tankGeo = new THREE.CylinderGeometry(tankRadius, tankRadius, tankLen, 24);
    tankGeo.rotateZ(Math.PI / 2);

    const tank = new THREE.Mesh(tankGeo, greenMat);
    tank.position.set(0, 0.62 + tankRadius + 0.15, 0);
    tank.castShadow = true;
    car.add(tank);

    // Gray ends of the tank
    [-tankLen / 2, tankLen / 2].forEach(x => {
      const cap = new THREE.Mesh(
        new THREE.SphereGeometry(tankRadius, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.4),
        grayMat
      );
      cap.rotation.z = x > 0 ? -Math.PI / 2 : Math.PI / 2;
      cap.position.set(x, 0.62 + tankRadius + 0.15, 0);
      car.add(cap);
    });

    // Top inspection catwalk & ladders
    const catwalk = new THREE.Mesh(
      new THREE.BoxGeometry(tankLen * 0.75, 0.08, width * 0.35),
      grayMat
    );
    catwalk.position.set(0, 0.62 + tankRadius * 2 + 0.18, 0);
    car.add(catwalk);
  }

  /**
   * Steam Locomotive D51 (SL 蒸気機関車)
   */
  private buildSteamLocomotive(
    sl: THREE.Group,
    length: number,
    width: number,
    height: number,
    direction: number
  ): void {
    const slBlackMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.3 });
    const silverMat = new THREE.MeshStandardMaterial({ color: 0xBDBDBD, metalness: 0.8, roughness: 0.2 });

    // 1. Cylindrical Steam Boiler (ボイラー)
    const boilerRadius = width * 0.44;
    const boilerLen = length * 0.55;
    const boilerGeo = new THREE.CylinderGeometry(boilerRadius, boilerRadius, boilerLen, 24);
    boilerGeo.rotateZ(Math.PI / 2);
    const boiler = new THREE.Mesh(boilerGeo, slBlackMat);
    boiler.position.set((length * 0.12) * direction, 0.62 + boilerRadius + 0.2, 0);
    boiler.castShadow = true;
    sl.add(boiler);

    // 2. Chimney Smoke Stack (煙突)
    const chimney = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.22, 0.65, 16),
      slBlackMat
    );
    chimney.position.set((length * 0.32) * direction, 0.62 + boilerRadius * 2 + 0.4, 0);
    sl.add(chimney);

    // 3. Smoke Deflectors (除煙板 / デフレクター)
    [-width * 0.48, width * 0.48].forEach(z => {
      const deflector = new THREE.Mesh(
        new THREE.BoxGeometry(1.6, 1.4, 0.05),
        slBlackMat
      );
      deflector.position.set((length * 0.30) * direction, 0.62 + 0.85, z);
      sl.add(deflector);
    });

    // 4. Driver's Cab (運転室・キャブ)
    const cab = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, height * 0.85, width * 0.95),
      slBlackMat
    );
    cab.position.set((-length * 0.18) * direction, height * 0.45 + 0.62, 0);
    sl.add(cab);

    // 5. Coal Tender (炭水車)
    const tender = new THREE.Mesh(
      new THREE.BoxGeometry(length * 0.32, height * 0.75, width * 0.92),
      slBlackMat
    );
    tender.position.set((-length * 0.36) * direction, height * 0.38 + 0.62, 0);
    sl.add(tender);

    // SL Large Round Front Headlight (大型前照灯)
    const hl = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.24, 0.28, 16),
      silverMat
    );
    hl.rotateZ(Math.PI / 2);
    hl.position.set((length * 0.40) * direction, 0.62 + boilerRadius * 2 + 0.1, 0);
    sl.add(hl);

    const light = new THREE.PointLight(0xFFFDE7, 2.5, 30);
    light.position.set((length * 0.45) * direction, 0.62 + boilerRadius * 2 + 0.1, 0);
    sl.add(light);
    this.headLights.push(light);
  }

  /**
   * Retro Passenger Car (旧型客車 スハ43系 茶色)
   */
  private buildRetroPassengerCar(car: THREE.Group, length: number, width: number, height: number): void {
    const brownMat = new THREE.MeshStandardMaterial({ color: 0x3E2723, roughness: 0.4 }); // Classic JNR Brown
    const roofMat = new THREE.MeshLambertMaterial({ color: 0x212121 });
    const warmWindowMat = new THREE.MeshStandardMaterial({
      color: 0x26170F,
      emissive: 0xFFB74D,
      emissiveIntensity: 0.35, // Warm incandescent passenger glow
      roughness: 0.2
    });

    const body = new THREE.Mesh(new THREE.BoxGeometry(length, height, width), brownMat);
    body.position.y = height / 2 + 0.52;
    body.castShadow = true;
    car.add(body);

    const roof = new THREE.Mesh(new THREE.BoxGeometry(length, 0.35, width * 0.94), roofMat);
    roof.position.y = height + 0.52 + 0.12;
    car.add(roof);

    // Warm Retro Passenger Windows
    const numWin = 9;
    const winSpacing = length / (numWin + 1);
    for (let i = 1; i <= numWin; i++) {
      const xOff = -length / 2 + i * winSpacing;
      [-width / 2 - 0.015, width / 2 + 0.015].forEach((zPos, side) => {
        const win = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.5), warmWindowMat);
        win.position.set(xOff, height * 0.6 + 0.52, zPos);
        if (side === 0) win.rotation.y = Math.PI;
        car.add(win);
        this.windowMeshes.push(win);
      });
    }
  }

  /**
   * High-Speed Express Train (成田エクスプレス風 E259系)
   */
  private buildExpressCar(
    car: THREE.Group,
    _theme: TrainTheme,
    length: number,
    width: number,
    height: number,
    role: 'lead' | 'mid' | 'tail',
    direction: number
  ): void {
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.25 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0xD50000, roughness: 0.3 });
    const blackMat = new THREE.MeshStandardMaterial({ color: 0x1A1A1A, roughness: 0.2 });

    const body = new THREE.Mesh(new THREE.BoxGeometry(length, height, width), whiteMat);
    body.position.y = height / 2 + 0.52;
    body.castShadow = true;
    car.add(body);

    // Red Roof & Accent Line
    const roof = new THREE.Mesh(new THREE.BoxGeometry(length, 0.35, width * 0.94), redMat);
    roof.position.y = height + 0.52 + 0.12;
    car.add(roof);

    const stripe = new THREE.Mesh(new THREE.BoxGeometry(length + 0.02, 0.25, width + 0.02), redMat);
    stripe.position.y = height * 0.45 + 0.52;
    car.add(stripe);

    // Lead High-Cockpit Face
    if (role === 'lead' || role === 'tail') {
      const isLead = (role === 'lead');
      const faceDir = isLead ? direction : -direction;

      const mask = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, height * 0.95, width * 0.95),
        blackMat
      );
      mask.position.set((length / 2 + 0.1) * faceDir, height / 2 + 0.52, 0);
      car.add(mask);

      if (isLead) {
        const light = new THREE.PointLight(0xFFFDE7, 2.5, 30);
        light.position.set((length / 2 + 1.5) * direction, height * 0.5 + 0.52, 0);
        car.add(light);
        this.headLights.push(light);
      }
    }
  }

  /**
   * Builds Standard Commuter Train
   */
  private buildCommuterCar(
    car: THREE.Group,
    theme: TrainTheme,
    length: number,
    width: number,
    height: number,
    role: 'lead' | 'mid' | 'tail',
    direction: number
  ): void {
    const bodyMat = theme.isStainless
      ? new THREE.MeshStandardMaterial({
          color: theme.bodyColor,
          metalness: 0.75,
          roughness: 0.28
        })
      : new THREE.MeshLambertMaterial({ color: theme.bodyColor });

    const lineMat = new THREE.MeshStandardMaterial({
      color: theme.stripeColor,
      metalness: 0.1,
      roughness: 0.4
    });

    const roofMat = new THREE.MeshLambertMaterial({ color: theme.roofColor });
    const windowGlassMat = new THREE.MeshStandardMaterial({
      color: 0x1A237E,
      emissive: 0xFFF9C4,
      emissiveIntensity: 0.18,
      roughness: 0.1,
      metalness: 0.8
    });

    const doorFrameMat = new THREE.MeshStandardMaterial({
      color: 0xB0BEC5,
      metalness: 0.8,
      roughness: 0.25
    });

    const bodyGeo = new THREE.BoxGeometry(length, height, width);
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    bodyMesh.position.y = height / 2 + 0.52;
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    car.add(bodyMesh);

    const waistStripe = new THREE.Mesh(new THREE.BoxGeometry(length + 0.02, 0.42, width + 0.02), lineMat);
    waistStripe.position.y = height * 0.44 + 0.52;
    car.add(waistStripe);

    const topStripe = new THREE.Mesh(new THREE.BoxGeometry(length + 0.02, 0.15, width + 0.02), lineMat);
    topStripe.position.y = height * 0.88 + 0.52;
    car.add(topStripe);

    const roofMesh = new THREE.Mesh(new THREE.BoxGeometry(length, 0.32, width * 0.94), roofMat);
    roofMesh.position.y = height + 0.52 + 0.10;
    roofMesh.castShadow = true;
    car.add(roofMesh);

    const acLen = length * 0.38;
    const acMesh = new THREE.Mesh(
      new THREE.BoxGeometry(acLen, 0.30, width * 0.58),
      new THREE.MeshStandardMaterial({ color: 0x90A4AE, metalness: 0.6, roughness: 0.3 })
    );
    acMesh.position.y = height + 0.52 + 0.36;
    acMesh.castShadow = true;
    car.add(acMesh);

    const numDoors = 4;
    const doorSpacing = length / (numDoors + 0.5);
    for (let i = 0; i < numDoors; i++) {
      const xOffset = -length * 0.40 + i * (doorSpacing * 0.88);

      [-width / 2 - 0.015, width / 2 + 0.015].forEach((zPos, sideIdx) => {
        const doorFrame = new THREE.Mesh(new THREE.PlaneGeometry(1.25, height * 0.86), doorFrameMat);
        doorFrame.position.set(xOffset, height * 0.48 + 0.52, zPos);
        if (sideIdx === 0) doorFrame.rotation.y = Math.PI;
        car.add(doorFrame);

        const doorGlass = new THREE.Mesh(new THREE.PlaneGeometry(0.85, height * 0.38), windowGlassMat);
        doorGlass.position.set(xOffset, height * 0.64 + 0.52, zPos + (sideIdx === 0 ? -0.01 : 0.01));
        if (sideIdx === 0) doorGlass.rotation.y = Math.PI;
        car.add(doorGlass);
        this.windowMeshes.push(doorGlass);
      });

      if (i < numDoors - 1) {
        const nextX = -length * 0.40 + (i + 1) * (doorSpacing * 0.88);
        const winX = (xOffset + nextX) / 2;
        [-width / 2 - 0.02, width / 2 + 0.02].forEach((zPos, sideIdx) => {
          const pWin = new THREE.Mesh(new THREE.PlaneGeometry(1.6, height * 0.38), windowGlassMat);
          pWin.position.set(winX, height * 0.64 + 0.52, zPos);
          if (sideIdx === 0) pWin.rotation.y = Math.PI;
          car.add(pWin);
          this.windowMeshes.push(pWin);
        });
      }
    }

    if (role === 'lead' || role === 'tail') {
      const isLead = (role === 'lead');
      const faceDir = isLead ? direction : -direction;

      const maskGroup = new THREE.Group();
      maskGroup.position.set((length / 2 + 0.02) * faceDir, height / 2 + 0.52, 0);
      if (faceDir < 0) maskGroup.rotation.y = Math.PI;

      const maskMat = new THREE.MeshStandardMaterial({ color: 0x1A1A1A, metalness: 0.5, roughness: 0.2 });
      const mask = new THREE.Mesh(new THREE.BoxGeometry(0.25, height * 0.94, width * 0.94), maskMat);
      maskGroup.add(mask);

      const ringMat = new THREE.MeshStandardMaterial({ color: theme.stripeColor, metalness: 0.3, roughness: 0.3 });
      const ringTop = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.16, width * 0.95), ringMat);
      ringTop.position.set(0.02, height * 0.44, 0);
      maskGroup.add(ringTop);

      const ringBot = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.16, width * 0.95), ringMat);
      ringBot.position.set(0.02, -height * 0.44, 0);
      maskGroup.add(ringBot);

      const ledSign = new THREE.Mesh(
        new THREE.PlaneGeometry(0.9, 0.24),
        new THREE.MeshBasicMaterial({ color: 0xFF9800 })
      );
      ledSign.rotation.y = Math.PI / 2;
      ledSign.position.set(0.14, height * 0.36, 0);
      maskGroup.add(ledSign);

      const winGlass = new THREE.Mesh(
        new THREE.PlaneGeometry(width * 0.84, height * 0.48),
        new THREE.MeshStandardMaterial({ color: 0x0D1B2A, roughness: 0.1, metalness: 0.9 })
      );
      winGlass.rotation.y = Math.PI / 2;
      winGlass.position.set(0.14, height * 0.08, 0);
      maskGroup.add(winGlass);

      const skirt = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.52, width * 0.92),
        new THREE.MeshLambertMaterial({ color: 0x455A64 })
      );
      skirt.position.set(0.1, -height * 0.45 - 0.22, 0);
      maskGroup.add(skirt);

      const coupler = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.20, 0.26),
        new THREE.MeshLambertMaterial({ color: 0x212121 })
      );
      coupler.position.set(0.3, -height * 0.45 - 0.22, 0);
      maskGroup.add(coupler);

      if (isLead) {
        const hlMat = new THREE.MeshBasicMaterial({ color: 0xFFFFF0 });
        [-width * 0.34, width * 0.34].forEach(z => {
          const hl = new THREE.Mesh(new THREE.CircleGeometry(0.14, 16), hlMat);
          hl.rotation.y = Math.PI / 2;
          hl.position.set(0.14, -height * 0.26, z);
          maskGroup.add(hl);
        });

        const light = new THREE.PointLight(0xFFFDE7, 2.2, 28, 1.2);
        light.position.set(2.0, 0, 0);
        maskGroup.add(light);
        this.headLights.push(light);
      } else {
        const tlMat = new THREE.MeshBasicMaterial({ color: 0xFF1744 });
        [-width * 0.34, width * 0.34].forEach(z => {
          const tl = new THREE.Mesh(new THREE.CircleGeometry(0.12, 16), tlMat);
          tl.rotation.y = Math.PI / 2;
          tl.position.set(0.14, -height * 0.26, z);
          maskGroup.add(tl);
        });
      }

      car.add(maskGroup);
    }

    if (role === 'mid') {
      const panto = this.createSingleArmPantograph(width);
      panto.position.set(length * 0.28, height + 0.52 + 0.42, 0);
      car.add(panto);
    }
  }

  /**
   * Shinkansen Builder (E5 Hayabusa / E6 Komachi / 923 Doctor Yellow)
   */
  private buildShinkansenCar(
    car: THREE.Group,
    theme: TrainTheme,
    length: number,
    width: number,
    height: number,
    role: 'lead' | 'mid' | 'tail',
    direction: number
  ): void {
    const topMat = new THREE.MeshStandardMaterial({
      color: theme.roofColor,
      metalness: 0.4,
      roughness: 0.25
    });
    const bottomMat = new THREE.MeshStandardMaterial({
      color: theme.bodyColor,
      metalness: 0.3,
      roughness: 0.3
    });
    const pinkStripeMat = new THREE.MeshStandardMaterial({
      color: theme.stripeColor,
      metalness: 0.2,
      roughness: 0.3
    });
    const windowMat = new THREE.MeshStandardMaterial({
      color: 0x0D1B2A,
      emissive: 0xFFF9C4,
      emissiveIntensity: 0.15,
      roughness: 0.1,
      metalness: 0.8
    });

    const botMesh = new THREE.Mesh(new THREE.BoxGeometry(length, height * 0.55, width), bottomMat);
    botMesh.position.y = (height * 0.55) / 2 + 0.45;
    botMesh.castShadow = true;
    car.add(botMesh);

    const topMesh = new THREE.Mesh(new THREE.BoxGeometry(length, height * 0.5, width * 0.94), topMat);
    topMesh.position.y = height * 0.55 + 0.45 + (height * 0.5) / 2;
    topMesh.castShadow = true;
    car.add(topMesh);

    const stripe = new THREE.Mesh(new THREE.BoxGeometry(length + 0.02, 0.22, width + 0.02), pinkStripeMat);
    stripe.position.y = height * 0.55 + 0.45;
    car.add(stripe);

    const numWin = 8;
    const winSpacing = length / (numWin + 1);
    for (let i = 1; i <= numWin; i++) {
      const xOff = -length / 2 + i * winSpacing;
      [-width / 2 - 0.015, width / 2 + 0.015].forEach((zPos, side) => {
        const win = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 0.48), windowMat);
        win.position.set(xOff, height * 0.65 + 0.45, zPos);
        if (side === 0) win.rotation.y = Math.PI;
        car.add(win);
        this.windowMeshes.push(win);
      });
    }

    if (role === 'lead' || role === 'tail') {
      const isLead = (role === 'lead');
      const noseDir = isLead ? direction : -direction;

      const noseGroup = new THREE.Group();
      noseGroup.position.set((length / 2) * noseDir, 0.45, 0);
      if (noseDir < 0) noseGroup.rotation.y = Math.PI;

      const noseLen = 5.4;

      const noseBotGeo = new THREE.ConeGeometry(width * 0.5, noseLen, 24);
      noseBotGeo.rotateZ(-Math.PI / 2);
      const noseBot = new THREE.Mesh(noseBotGeo, bottomMat);
      noseBot.position.set(noseLen / 2, height * 0.35, 0);
      noseBot.scale.set(1, 0.6, 0.95);
      noseGroup.add(noseBot);

      const noseTop = new THREE.Mesh(noseBotGeo, topMat);
      noseTop.position.set(noseLen / 2, height * 0.65, 0);
      noseTop.scale.set(1, 0.55, 0.9);
      noseGroup.add(noseTop);

      const canopy = new THREE.Mesh(
        new THREE.BoxGeometry(1.4, 0.42, width * 0.5),
        new THREE.MeshStandardMaterial({ color: 0x0D1B2A, roughness: 0.1, metalness: 0.9 })
      );
      canopy.position.set(1.4, height * 0.85, 0);
      canopy.rotation.z = -0.22;
      noseGroup.add(canopy);

      if (isLead) {
        const hlMat = new THREE.MeshBasicMaterial({ color: 0xFFFFF0 });
        [-width * 0.26, width * 0.26].forEach(z => {
          const hl = new THREE.Mesh(new THREE.CircleGeometry(0.16, 16), hlMat);
          hl.rotation.y = Math.PI / 2;
          hl.position.set(noseLen * 0.72, height * 0.42, z);
          noseGroup.add(hl);
        });

        const light = new THREE.PointLight(0xFFFDE7, 2.2, 30, 1.2);
        light.position.set(noseLen + 1.2, height * 0.5, 0);
        noseGroup.add(light);
        this.headLights.push(light);
      }

      car.add(noseGroup);
    }

    if (role === 'mid') {
      const coverMat = new THREE.MeshLambertMaterial({ color: 0x90A4AE });
      const coverL = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.55, 0.1), coverMat);
      coverL.position.set(0, height + 0.68, width * 0.42);
      car.add(coverL);

      const coverR = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.55, 0.1), coverMat);
      coverR.position.set(0, height + 0.68, -width * 0.42);
      car.add(coverR);

      const panto = this.createSingleArmPantograph(width * 0.8);
      panto.position.set(0, height + 0.52 + 0.38, 0);
      car.add(panto);
    }
  }

  private buildUnderfloorEquipment(car: THREE.Group, length: number, width: number): void {
    const equipMat = new THREE.MeshLambertMaterial({ color: 0x263238 });
    const finMat = new THREE.MeshLambertMaterial({ color: 0x37474F });

    const boxLen = length * 0.42;
    const equipBox = new THREE.Mesh(new THREE.BoxGeometry(boxLen, 0.45, width * 0.75), equipMat);
    equipBox.position.set(0, 0.32, 0);
    car.add(equipBox);

    for (let x = -boxLen * 0.4; x < boxLen * 0.4; x += 0.45) {
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.48, width * 0.78), finMat);
      fin.position.set(x, 0.32, 0);
      car.add(fin);
    }
  }

  private createSingleArmPantograph(carWidth: number): THREE.Group {
    const pantoGroup = new THREE.Group();
    const frameMat = new THREE.MeshLambertMaterial({ color: 0xD32F2F });
    const barMat = new THREE.MeshLambertMaterial({ color: 0xE0E0E0 });

    [-0.35, 0.35].forEach(x => {
      [-0.3, 0.3].forEach(z => {
        const insulator = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 0.16, 8), frameMat);
        insulator.position.set(x, 0.08, z);
        pantoGroup.add(insulator);
      });
    });

    const lowerArm = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.85, 8), barMat);
    lowerArm.rotation.z = Math.PI / 3;
    lowerArm.position.set(-0.22, 0.42, 0);
    pantoGroup.add(lowerArm);

    const upperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.80, 8), barMat);
    upperArm.rotation.z = -Math.PI / 3.2;
    upperArm.position.set(0.16, 0.90, 0);
    pantoGroup.add(upperArm);

    const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, carWidth * 0.75), barMat);
    shoe.position.set(0.38, 1.22, 0);
    pantoGroup.add(shoe);

    return pantoGroup;
  }

  private createGangway(xPos: number, width: number, height: number): void {
    const gangwayMat = new THREE.MeshLambertMaterial({ color: 0x212121 });
    const gangway = new THREE.Mesh(
      new THREE.BoxGeometry(0.45, height * 0.88, width * 0.75),
      gangwayMat
    );
    gangway.position.set(xPos, height / 2 + 0.52, 0);
    this.group.add(gangway);
  }

  private buildBogies(car: THREE.Group, length: number, width: number): void {
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x1E1E1E, metalness: 0.8, roughness: 0.2 });
    const frameMat = new THREE.MeshLambertMaterial({ color: 0x263238 });
    const wheelGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.18, 18);
    wheelGeo.rotateX(Math.PI / 2);

    [-length * 0.34, length * 0.34].forEach((bogieX) => {
      const frame = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.24, width * 0.84), frameMat);
      frame.position.set(bogieX, 0.44, 0);
      car.add(frame);

      [-width * 0.38, width * 0.38].forEach(z => {
        const spring = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.22, 12), frameMat);
        spring.position.set(bogieX, 0.54, z);
        car.add(spring);
      });

      [-0.78, 0.78].forEach(wX => {
        const wheelL = new THREE.Mesh(wheelGeo, wheelMat);
        wheelL.position.set(bogieX + wX, 0.38, width / 2 - 0.12);
        wheelL.castShadow = true;
        car.add(wheelL);
        this.wheels.push(wheelL);

        const wheelR = new THREE.Mesh(wheelGeo, wheelMat);
        wheelR.position.set(bogieX + wX, 0.38, -width / 2 + 0.12);
        wheelR.castShadow = true;
        car.add(wheelR);
        this.wheels.push(wheelR);
      });
    });
  }

  public rotateWheels(deltaDistance: number): void {
    const angle = deltaDistance / 0.38;
    this.wheels.forEach(w => {
      w.rotation.z -= angle;
    });
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
