import * as THREE from 'three';

export type VehicleType =
  | 'ambulance'
  | 'fire_engine'
  | 'police'
  | 'minivan'
  | 'kei_car'
  | 'kei_truck'
  | 'suv'
  | 'sports_car'
  | 'garbage_truck'
  | 'semi_truck'
  | 'bus'
  | 'truck'
  | 'sedan';

export interface VehicleConfig {
  type: VehicleType;
  color: number;
  length: number;
  width: number;
  height: number;
}

export class VehicleModel {
  public group: THREE.Group;
  public type: VehicleType;
  public length: number;
  public width: number;
  public height: number;
  public direction: number; // 1 = South to North (+Z to -Z), -1 = North to South (-Z to +Z)
  public laneX: number;

  // Physics & Behavior State
  public speed: number = 0;
  public targetSpeed: number = 10.0; // Normal cruising speed (units / sec)
  public state: 'approaching' | 'stopping_at_line' | 'checking_safety' | 'waiting_crossing' | 'crossing' | 'exiting' = 'approaching';
  public stopWaitTimer: number = 0;
  public lookTimer: number = 0;
  public initialYRotation: number = 0;

  // Visuals
  public wheels: THREE.Mesh[] = [];
  public sirenLight: THREE.Mesh | null = null;
  public sirenPointLight: THREE.PointLight | null = null;
  public headlights: THREE.PointLight[] = [];

  constructor(type: VehicleType, direction: number, laneX: number) {
    this.type = type;
    this.direction = direction;
    this.laneX = laneX;
    this.group = new THREE.Group();

    // Setup vehicle configurations
    let config: VehicleConfig;
    switch (type) {
      case 'ambulance':
        config = { type, color: 0xFAFAFA, length: 5.0, width: 1.95, height: 2.05 };
        break;

      case 'fire_engine':
        config = { type, color: 0xD32F2F, length: 5.2, width: 2.1, height: 2.1 };
        break;

      case 'police':
        config = { type, color: 0x212121, length: 4.2, width: 1.9, height: 1.4 };
        break;

      case 'minivan':
        config = { type, color: 0xF5F5F5, length: 4.3, width: 1.75, height: 1.75 };
        break;

      case 'kei_car':
        config = { type, color: 0x6E1724, length: 3.4, width: 1.48, height: 1.78 };
        break;

      case 'kei_truck':
        config = { type, color: 0xFFFFFF, length: 3.4, width: 1.48, height: 1.6 };
        break;

      case 'suv':
        config = { type, color: 0x2E4A38, length: 4.4, width: 1.85, height: 1.7 };
        break;

      case 'sports_car': // スポーツカー（レーシングイエロー・低重心・大型リアウイング）
        config = { type, color: 0xFFD600, length: 4.2, width: 1.95, height: 1.18 };
        break;

      case 'garbage_truck': // ゴミ収集車（パッカー車・スカイブルー／ホワイト）
        config = { type, color: 0x0288D1, length: 4.8, width: 1.95, height: 2.05 };
        break;

      case 'semi_truck': // トレーラートラック（大型コンテナトレーラー）
        config = { type, color: 0x0D47A1, length: 8.4, width: 2.3, height: 2.65 };
        break;

      case 'bus':
        config = { type, color: 0xFFB300, length: 6.2, width: 2.2, height: 2.2 };
        break;

      case 'truck':
        config = { type, color: 0x1976D2, length: 5.0, width: 2.1, height: 2.1 };
        break;

      case 'sedan':
      default:
        const sedanColors = [0xE53935, 0x1E88E5, 0x43A047, 0x8E24AA, 0xFB8C00];
        const color = sedanColors[Math.floor(Math.random() * sedanColors.length)];
        config = { type: 'sedan', color, length: 3.8, width: 1.85, height: 1.35 };
        break;
    }

    this.length = config.length;
    this.width = config.width;
    this.height = config.height;

    this.buildMesh(config);

    this.initialYRotation = (direction === 1) ? Math.PI : 0;
    this.group.rotation.y = this.initialYRotation;
  }

  private buildMesh(cfg: VehicleConfig): void {
    const mainBodyMat = new THREE.MeshLambertMaterial({ color: cfg.color });
    const wheelMat = new THREE.MeshLambertMaterial({ color: 0x212121 });
    const windowMat = new THREE.MeshLambertMaterial({ color: 0xB3E5FC });
    const darkWindowMat = new THREE.MeshLambertMaterial({ color: 0x263238 });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xEEEEEE, metalness: 0.85, roughness: 0.15 });

    const chassisHeight = cfg.height * 0.45;
    const groundClearance = 0.32;

    // ==========================================
    // 1. 救急車 (Ambulance)
    // ==========================================
    if (cfg.type === 'ambulance') {
      const bodyGeo = new THREE.BoxGeometry(cfg.width, cfg.height, cfg.length);
      const body = new THREE.Mesh(bodyGeo, mainBodyMat);
      body.position.y = groundClearance + cfg.height / 2;
      body.castShadow = true;
      this.group.add(body);

      // Red Stripe
      const stripeMat = new THREE.MeshLambertMaterial({ color: 0xD50000 });
      [-1, 1].forEach((side) => {
        const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.22, cfg.length * 0.98), stripeMat);
        stripe.position.set(side * (cfg.width / 2 + 0.01), groundClearance + cfg.height * 0.45, 0);
        this.group.add(stripe);

        // Emergency Cross
        const crossMat = new THREE.MeshBasicMaterial({ color: 0xD50000 });
        const cV = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.42), crossMat);
        const cH = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.12), crossMat);
        cV.rotation.y = side * Math.PI / 2;
        cH.rotation.y = side * Math.PI / 2;
        cV.position.set(side * (cfg.width / 2 + 0.02), groundClearance + cfg.height * 0.72, -0.4);
        cH.position.set(side * (cfg.width / 2 + 0.02), groundClearance + cfg.height * 0.72, -0.4);
        this.group.add(cV, cH);
      });

      const frontGlass = new THREE.Mesh(new THREE.PlaneGeometry(cfg.width * 0.85, cfg.height * 0.35), windowMat);
      frontGlass.position.set(0, groundClearance + cfg.height * 0.65, cfg.length / 2 + 0.01);
      this.group.add(frontGlass);

      const sirenGeo = new THREE.BoxGeometry(cfg.width * 0.7, 0.16, 0.4);
      const sirenMat = new THREE.MeshStandardMaterial({ color: 0xFF1744, emissive: 0xFF1744, emissiveIntensity: 1.2 });
      this.sirenLight = new THREE.Mesh(sirenGeo, sirenMat);
      this.sirenLight.position.set(0, groundClearance + cfg.height + 0.1, cfg.length * 0.25);
      this.group.add(this.sirenLight);

      this.sirenPointLight = new THREE.PointLight(0xFF1744, 1.2, 8);
      this.sirenPointLight.position.set(0, groundClearance + cfg.height + 0.3, cfg.length * 0.25);
      this.group.add(this.sirenPointLight);

    // ==========================================
    // 2. 消防車 (Fire Engine)
    // ==========================================
    } else if (cfg.type === 'fire_engine') {
      const body = new THREE.Mesh(new THREE.BoxGeometry(cfg.width, cfg.height * 0.9, cfg.length), mainBodyMat);
      body.position.y = groundClearance + cfg.height * 0.45;
      body.castShadow = true;
      this.group.add(body);

      const compMat = new THREE.MeshLambertMaterial({ color: 0xCFD8DC });
      [-1, 1].forEach(side => {
        const panel = new THREE.Mesh(new THREE.PlaneGeometry(cfg.length * 0.5, cfg.height * 0.5), compMat);
        panel.rotation.y = side * Math.PI / 2;
        panel.position.set(side * (cfg.width / 2 + 0.01), groundClearance + cfg.height * 0.45, -cfg.length * 0.15);
        this.group.add(panel);
      });

      const ladderMat = new THREE.MeshLambertMaterial({ color: 0xFFEB3B });
      const ladder = new THREE.Mesh(new THREE.BoxGeometry(cfg.width * 0.55, 0.14, cfg.length * 0.7), ladderMat);
      ladder.position.set(0, groundClearance + cfg.height * 0.9 + 0.1, -cfg.length * 0.05);
      ladder.castShadow = true;
      this.group.add(ladder);

      const frontGlass = new THREE.Mesh(new THREE.PlaneGeometry(cfg.width * 0.82, cfg.height * 0.35), windowMat);
      frontGlass.position.set(0, groundClearance + cfg.height * 0.65, cfg.length / 2 + 0.01);
      this.group.add(frontGlass);

      const sirenGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.16, 12);
      const sirenMat = new THREE.MeshStandardMaterial({ color: 0xFF1744, emissive: 0xFF1744, emissiveIntensity: 1.2 });
      this.sirenLight = new THREE.Mesh(sirenGeo, sirenMat);
      this.sirenLight.position.set(0, groundClearance + cfg.height * 0.9 + 0.12, cfg.length * 0.3);
      this.group.add(this.sirenLight);

      this.sirenPointLight = new THREE.PointLight(0xFF1744, 1.2, 8);
      this.sirenPointLight.position.set(0, groundClearance + cfg.height + 0.3, cfg.length * 0.3);
      this.group.add(this.sirenPointLight);

    // ==========================================
    // 3. パトカー (Police Car)
    // ==========================================
    } else if (cfg.type === 'police') {
      const lower = new THREE.Mesh(new THREE.BoxGeometry(cfg.width, chassisHeight, cfg.length), mainBodyMat);
      lower.position.y = groundClearance + chassisHeight / 2;
      lower.castShadow = true;
      this.group.add(lower);

      const cabinHeight = cfg.height * 0.55;
      const cabinLen = cfg.length * 0.55;
      const whiteCabinMat = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(cfg.width * 0.88, cabinHeight, cabinLen), whiteCabinMat);
      cabin.position.set(0, groundClearance + chassisHeight + cabinHeight / 2, -cfg.length * 0.05);
      cabin.castShadow = true;
      this.group.add(cabin);

      const whiteDoor = new THREE.Mesh(new THREE.BoxGeometry(cfg.width + 0.02, chassisHeight * 0.9, cabinLen * 0.8), whiteCabinMat);
      whiteDoor.position.set(0, groundClearance + chassisHeight / 2, -cfg.length * 0.05);
      this.group.add(whiteDoor);

      const frontGlass = new THREE.Mesh(new THREE.PlaneGeometry(cfg.width * 0.78, cabinHeight * 0.75), windowMat);
      frontGlass.position.set(0, groundClearance + chassisHeight + cabinHeight * 0.5, cabinLen / 2 + 0.02);
      this.group.add(frontGlass);

      const sirenGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.15, 12);
      const sirenMat = new THREE.MeshStandardMaterial({ color: 0xFF1744, emissive: 0xFF1744, emissiveIntensity: 1.2 });
      this.sirenLight = new THREE.Mesh(sirenGeo, sirenMat);
      this.sirenLight.position.set(0, groundClearance + cfg.height + 0.1, 0);
      this.group.add(this.sirenLight);

      this.sirenPointLight = new THREE.PointLight(0xFF1744, 1.2, 8);
      this.sirenPointLight.position.set(0, groundClearance + cfg.height + 0.25, 0);
      this.group.add(this.sirenPointLight);

    // ==========================================
    // 4. スポーツカー (Sports Car - レーシングイエロー)
    // ==========================================
    } else if (cfg.type === 'sports_car') {
      // Low wide aerodynamic lower body
      const lowerGeo = new THREE.BoxGeometry(cfg.width, chassisHeight * 0.85, cfg.length);
      const lower = new THREE.Mesh(lowerGeo, mainBodyMat);
      lower.position.y = groundClearance * 0.6 + (chassisHeight * 0.85) / 2;
      lower.castShadow = true;
      this.group.add(lower);

      // Sleek curved aerodynamic cabin
      const cabinHeight = cfg.height * 0.55;
      const cabinLen = cfg.length * 0.48;
      const blackRoofMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(cfg.width * 0.82, cabinHeight, cabinLen), blackRoofMat);
      cabin.position.set(0, groundClearance * 0.6 + chassisHeight * 0.85 + cabinHeight / 2, -cfg.length * 0.08);
      cabin.castShadow = true;
      this.group.add(cabin);

      // Low windshield
      const frontGlass = new THREE.Mesh(new THREE.PlaneGeometry(cfg.width * 0.75, cabinHeight * 0.8), windowMat);
      frontGlass.rotation.x = -Math.PI * 0.22;
      frontGlass.position.set(0, groundClearance * 0.6 + chassisHeight * 0.85 + cabinHeight * 0.5, cabinLen / 2 - 0.05);
      this.group.add(frontGlass);

      // High GT Rear Wing / Spoiler
      const wingStayMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
      [-0.45, 0.45].forEach(x => {
        const stay = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.35, 0.08), wingStayMat);
        stay.position.set(x, groundClearance * 0.6 + cfg.height * 0.85, -cfg.length * 0.42);
        this.group.add(stay);
      });
      const wingBlade = new THREE.Mesh(new THREE.BoxGeometry(cfg.width * 0.95, 0.06, 0.35), wingStayMat);
      wingBlade.position.set(0, groundClearance * 0.6 + cfg.height * 0.85 + 0.35, -cfg.length * 0.42);
      wingBlade.castShadow = true;
      this.group.add(wingBlade);

    // ==========================================
    // 5. ゴミ収集車 (Garbage Truck / パッカー車)
    // ==========================================
    } else if (cfg.type === 'garbage_truck') {
      // White Cab in Front
      const cabLen = cfg.length * 0.36;
      const cabHeight = cfg.height * 0.65;
      const cabMat = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
      const cab = new THREE.Mesh(new THREE.BoxGeometry(cfg.width * 0.92, cabHeight, cabLen), cabMat);
      cab.position.set(0, groundClearance + cabHeight / 2, cfg.length * 0.28);
      cab.castShadow = true;
      this.group.add(cab);

      // Cab Windshield
      const frontGlass = new THREE.Mesh(new THREE.PlaneGeometry(cfg.width * 0.78, cabHeight * 0.55), windowMat);
      frontGlass.position.set(0, groundClearance + cabHeight * 0.6, cfg.length * 0.28 + cabLen / 2 + 0.01);
      this.group.add(frontGlass);

      // Sky Blue Garbage Packer Hopper Body
      const hopperLen = cfg.length * 0.62;
      const hopperGeo = new THREE.BoxGeometry(cfg.width, cfg.height * 0.85, hopperLen);
      const hopper = new THREE.Mesh(hopperGeo, mainBodyMat);
      hopper.position.set(0, groundClearance + (cfg.height * 0.85) / 2, -cfg.length * 0.16);
      hopper.castShadow = true;
      this.group.add(hopper);

      // Slanted Rear Loading Opening (投入口)
      const loaderMat = new THREE.MeshLambertMaterial({ color: 0x37474F });
      const loader = new THREE.Mesh(new THREE.BoxGeometry(cfg.width * 0.9, cfg.height * 0.45, 0.4), loaderMat);
      loader.position.set(0, groundClearance + cfg.height * 0.25, -cfg.length * 0.47);
      this.group.add(loader);

      // Amber Rotating Beacon on Roof
      const beaconGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.14, 12);
      const beaconMat = new THREE.MeshStandardMaterial({ color: 0xFFB300, emissive: 0xFF8F00, emissiveIntensity: 1.0 });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.set(0, groundClearance + cabHeight + 0.1, cfg.length * 0.28);
      this.group.add(beacon);

    // ==========================================
    // 6. トレーラートラック (Semi-Trailer Truck - 大型コンテナ)
    // ==========================================
    } else if (cfg.type === 'semi_truck') {
      // Tractor Cab (Front Heavy Rig)
      const tractorLen = 3.2;
      const tractorHeight = cfg.height * 0.85;
      const tractorMat = new THREE.MeshLambertMaterial({ color: 0xD32F2F }); // Red Tractor
      const tractor = new THREE.Mesh(new THREE.BoxGeometry(cfg.width * 0.92, tractorHeight, tractorLen), tractorMat);
      tractor.position.set(0, groundClearance + tractorHeight / 2, cfg.length * 0.28);
      tractor.castShadow = true;
      this.group.add(tractor);

      // High Aero Roof Cap
      const aeroCap = new THREE.Mesh(new THREE.ConeGeometry(cfg.width * 0.6, 0.6, 4), tractorMat);
      aeroCap.rotation.y = Math.PI / 4;
      aeroCap.position.set(0, groundClearance + tractorHeight + 0.3, cfg.length * 0.3);
      this.group.add(aeroCap);

      // Chrome Vertical Exhaust Stacks
      [-cfg.width * 0.46, cfg.width * 0.46].forEach(x => {
        const stack = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.8), chromeMat);
        stack.position.set(x, groundClearance + tractorHeight * 0.7, cfg.length * 0.16);
        this.group.add(stack);
      });

      // Heavy Front Chrome Grille
      const grille = new THREE.Mesh(new THREE.BoxGeometry(cfg.width * 0.75, 0.8, 0.12), chromeMat);
      grille.position.set(0, groundClearance + 0.6, cfg.length * 0.28 + tractorLen / 2 + 0.01);
      this.group.add(grille);

      // Long Container Trailer
      const containerLen = 5.2;
      const containerHeight = cfg.height * 0.95;
      const containerMat = new THREE.MeshLambertMaterial({ color: cfg.color }); // Ocean Blue Container
      const container = new THREE.Mesh(new THREE.BoxGeometry(cfg.width, containerHeight, containerLen), containerMat);
      container.position.set(0, groundClearance + 0.25 + containerHeight / 2, -cfg.length * 0.22);
      container.castShadow = true;
      this.group.add(container);

      // Container White Logo Stripe
      const logoStripe = new THREE.Mesh(new THREE.BoxGeometry(cfg.width + 0.02, 0.35, containerLen * 0.9), new THREE.MeshLambertMaterial({ color: 0xFFFFFF }));
      logoStripe.position.set(0, groundClearance + 0.25 + containerHeight * 0.5, -cfg.length * 0.22);
      this.group.add(logoStripe);

      // Windshield
      const frontGlass = new THREE.Mesh(new THREE.PlaneGeometry(cfg.width * 0.8, tractorHeight * 0.4), windowMat);
      frontGlass.position.set(0, groundClearance + tractorHeight * 0.68, cfg.length * 0.28 + tractorLen / 2 + 0.01);
      this.group.add(frontGlass);

    // ==========================================
    // 7. ミニバン (Minivan)
    // ==========================================
    } else if (cfg.type === 'minivan') {
      const lower = new THREE.Mesh(new THREE.BoxGeometry(cfg.width, chassisHeight, cfg.length), mainBodyMat);
      lower.position.y = groundClearance + chassisHeight / 2;
      lower.castShadow = true;
      this.group.add(lower);

      const cabinHeight = cfg.height * 0.55;
      const cabinLen = cfg.length * 0.72;
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(cfg.width * 0.92, cabinHeight, cabinLen), mainBodyMat);
      cabin.position.set(0, groundClearance + chassisHeight + cabinHeight / 2, -cfg.length * 0.08);
      cabin.castShadow = true;
      this.group.add(cabin);

      const grille = new THREE.Mesh(new THREE.BoxGeometry(cfg.width * 0.82, 0.18, 0.08), new THREE.MeshLambertMaterial({ color: 0x37474F }));
      grille.position.set(0, groundClearance + chassisHeight * 0.65, cfg.length / 2 + 0.01);
      this.group.add(grille);

      const frontGlass = new THREE.Mesh(new THREE.PlaneGeometry(cfg.width * 0.84, cabinHeight * 0.75), windowMat);
      frontGlass.rotation.x = -Math.PI * 0.12;
      frontGlass.position.set(0, groundClearance + chassisHeight + cabinHeight * 0.48, cabinLen / 2 - 0.05);
      this.group.add(frontGlass);

      [-1, 1].forEach(side => {
        const sideWin = new THREE.Mesh(new THREE.PlaneGeometry(cabinLen * 0.85, cabinHeight * 0.6), darkWindowMat);
        sideWin.rotation.y = side * Math.PI / 2;
        sideWin.position.set(side * (cfg.width * 0.46 + 0.01), groundClearance + chassisHeight + cabinHeight * 0.52, -cfg.length * 0.08);
        this.group.add(sideWin);
      });

      const spoiler = new THREE.Mesh(new THREE.BoxGeometry(cfg.width * 0.85, 0.08, 0.25), mainBodyMat);
      spoiler.position.set(0, groundClearance + cfg.height + 0.04, -cfg.length * 0.44);
      this.group.add(spoiler);

    // ==========================================
    // 8. 軽自動車 (Kei Car - ハイトワゴン)
    // ==========================================
    } else if (cfg.type === 'kei_car') {
      const lower = new THREE.Mesh(new THREE.BoxGeometry(cfg.width, chassisHeight, cfg.length), mainBodyMat);
      lower.position.y = groundClearance + chassisHeight / 2;
      lower.castShadow = true;
      this.group.add(lower);

      const cabinHeight = cfg.height * 0.55;
      const cabinLen = cfg.length * 0.75;
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(cfg.width * 0.94, cabinHeight, cabinLen), mainBodyMat);
      cabin.position.set(0, groundClearance + chassisHeight + cabinHeight / 2, -cfg.length * 0.06);
      cabin.castShadow = true;
      this.group.add(cabin);

      const blackPillarMat = new THREE.MeshLambertMaterial({ color: 0x1A1A1A });
      [-1, 1].forEach(side => {
        const aPillar = new THREE.Mesh(new THREE.BoxGeometry(0.08, cabinHeight * 0.8, 0.12), blackPillarMat);
        aPillar.position.set(side * (cfg.width * 0.47), groundClearance + chassisHeight + cabinHeight * 0.5, cabinLen * 0.4);
        this.group.add(aPillar);
      });

      const grille = new THREE.Mesh(new THREE.BoxGeometry(cfg.width * 0.76, 0.22, 0.06), chromeMat);
      grille.position.set(0, groundClearance + chassisHeight * 0.7, cfg.length / 2 + 0.01);
      this.group.add(grille);

      const frontGlass = new THREE.Mesh(new THREE.PlaneGeometry(cfg.width * 0.84, cabinHeight * 0.75), windowMat);
      frontGlass.rotation.x = -Math.PI * 0.06;
      frontGlass.position.set(0, groundClearance + chassisHeight + cabinHeight * 0.5, cabinLen / 2 + 0.01);
      this.group.add(frontGlass);

      [-1, 1].forEach(side => {
        const sideGlass = new THREE.Mesh(new THREE.PlaneGeometry(cabinLen * 0.88, cabinHeight * 0.65), darkWindowMat);
        sideGlass.rotation.y = side * Math.PI / 2;
        sideGlass.position.set(side * (cfg.width * 0.47 + 0.01), groundClearance + chassisHeight + cabinHeight * 0.52, -cfg.length * 0.06);
        this.group.add(sideGlass);
      });

    // ==========================================
    // 9. 軽トラック (Kei Truck - 軽トラ)
    // ==========================================
    } else if (cfg.type === 'kei_truck') {
      const cabLen = cfg.length * 0.42;
      const cabHeight = cfg.height * 0.7;
      const cab = new THREE.Mesh(new THREE.BoxGeometry(cfg.width, cabHeight, cabLen), mainBodyMat);
      cab.position.set(0, groundClearance + cabHeight / 2, cfg.length * 0.26);
      cab.castShadow = true;
      this.group.add(cab);

      const frontGlass = new THREE.Mesh(new THREE.PlaneGeometry(cfg.width * 0.82, cabHeight * 0.5), windowMat);
      frontGlass.position.set(0, groundClearance + cabHeight * 0.65, cfg.length * 0.26 + cabLen / 2 + 0.01);
      this.group.add(frontGlass);

      const bedLen = cfg.length * 0.54;
      const bedFloorMat = new THREE.MeshLambertMaterial({ color: 0xB0BEC5 });
      const bedFloor = new THREE.Mesh(new THREE.BoxGeometry(cfg.width, 0.12, bedLen), bedFloorMat);
      bedFloor.position.set(0, groundClearance + 0.35, -cfg.length * 0.20);
      bedFloor.castShadow = true;
      this.group.add(bedFloor);

      const gateMat = new THREE.MeshLambertMaterial({ color: 0xE0E0E0 });
      const gateL = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.35, bedLen), gateMat);
      gateL.position.set(cfg.width / 2 - 0.03, groundClearance + 0.52, -cfg.length * 0.20);
      this.group.add(gateL);

      const gateR = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.35, bedLen), gateMat);
      gateR.position.set(-cfg.width / 2 + 0.03, groundClearance + 0.52, -cfg.length * 0.20);
      this.group.add(gateR);

      const gateBack = new THREE.Mesh(new THREE.BoxGeometry(cfg.width, 0.35, 0.06), gateMat);
      gateBack.position.set(0, groundClearance + 0.52, -cfg.length * 0.20 - bedLen / 2);
      this.group.add(gateBack);

    // ==========================================
    // 10. SUV (SUV)
    // ==========================================
    } else if (cfg.type === 'suv') {
      const lower = new THREE.Mesh(new THREE.BoxGeometry(cfg.width, chassisHeight * 1.1, cfg.length), mainBodyMat);
      lower.position.y = groundClearance + 0.08 + (chassisHeight * 1.1) / 2;
      lower.castShadow = true;
      this.group.add(lower);

      const cabinHeight = cfg.height * 0.52;
      const cabinLen = cfg.length * 0.65;
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(cfg.width * 0.88, cabinHeight, cabinLen), mainBodyMat);
      cabin.position.set(0, groundClearance + 0.08 + chassisHeight * 1.1 + cabinHeight / 2, -cfg.length * 0.06);
      cabin.castShadow = true;
      this.group.add(cabin);

      const guardMat = new THREE.MeshLambertMaterial({ color: 0x212121 });
      const underGuard = new THREE.Mesh(new THREE.BoxGeometry(cfg.width * 1.02, 0.15, cfg.length * 1.01), guardMat);
      underGuard.position.set(0, groundClearance + 0.1, 0);
      this.group.add(underGuard);

      const railMat = new THREE.MeshLambertMaterial({ color: 0x424242 });
      [-cfg.width * 0.36, cfg.width * 0.36].forEach(x => {
        const rail = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, cabinLen * 0.85), railMat);
        rail.position.set(x, groundClearance + 0.08 + cfg.height + 0.04, -cfg.length * 0.06);
        this.group.add(rail);
      });

      const frontGlass = new THREE.Mesh(new THREE.PlaneGeometry(cfg.width * 0.78, cabinHeight * 0.7), windowMat);
      frontGlass.rotation.x = -Math.PI * 0.14;
      frontGlass.position.set(0, groundClearance + 0.08 + chassisHeight * 1.1 + cabinHeight * 0.5, cabinLen / 2 - 0.04);
      this.group.add(frontGlass);

    // ==========================================
    // 11. バス (Bus) & トラック (Truck) & セダン (Sedan)
    // ==========================================
    } else if (cfg.type === 'bus') {
      const cabinHeight = cfg.height * 0.55;
      const lower = new THREE.Mesh(new THREE.BoxGeometry(cfg.width, chassisHeight, cfg.length), mainBodyMat);
      lower.position.y = groundClearance + chassisHeight / 2;
      this.group.add(lower);

      const cabin = new THREE.Mesh(new THREE.BoxGeometry(cfg.width * 0.96, cabinHeight, cfg.length * 0.96), mainBodyMat);
      cabin.position.set(0, groundClearance + chassisHeight + cabinHeight / 2, 0);
      cabin.castShadow = true;
      this.group.add(cabin);

      const frontGlass = new THREE.Mesh(new THREE.PlaneGeometry(cfg.width * 0.85, cabinHeight * 0.7), windowMat);
      frontGlass.position.set(0, groundClearance + chassisHeight + cabinHeight * 0.5, cfg.length * 0.48 + 0.01);
      this.group.add(frontGlass);

    } else if (cfg.type === 'truck') {
      const cabLen = cfg.length * 0.35;
      const cabHeight = cfg.height * 0.55;
      const cab = new THREE.Mesh(new THREE.BoxGeometry(cfg.width * 0.9, cabHeight, cabLen), mainBodyMat);
      cab.position.set(0, groundClearance + chassisHeight + cabHeight / 2, cfg.length * 0.28);
      cab.castShadow = true;
      this.group.add(cab);

      const frontGlass = new THREE.Mesh(new THREE.PlaneGeometry(cfg.width * 0.75, cabHeight * 0.6), windowMat);
      frontGlass.position.set(0, groundClearance + chassisHeight + cabHeight * 0.5, cfg.length * 0.28 + cabLen / 2 + 0.01);
      this.group.add(frontGlass);

      const cargo = new THREE.Mesh(new THREE.BoxGeometry(cfg.width, cfg.height * 0.8, cfg.length * 0.58), new THREE.MeshLambertMaterial({ color: 0xECEFF1 }));
      cargo.position.set(0, groundClearance + cfg.height * 0.4, -cfg.length * 0.18);
      cargo.castShadow = true;
      this.group.add(cargo);

    } else {
      const lower = new THREE.Mesh(new THREE.BoxGeometry(cfg.width, chassisHeight, cfg.length), mainBodyMat);
      lower.position.y = groundClearance + chassisHeight / 2;
      lower.castShadow = true;
      this.group.add(lower);

      const cabinHeight = cfg.height * 0.55;
      const cabinLen = cfg.length * 0.55;
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(cfg.width * 0.88, cabinHeight, cabinLen), mainBodyMat);
      cabin.position.set(0, groundClearance + chassisHeight + cabinHeight / 2, -cfg.length * 0.05);
      cabin.castShadow = true;
      this.group.add(cabin);

      const frontGlass = new THREE.Mesh(new THREE.PlaneGeometry(cfg.width * 0.78, cabinHeight * 0.75), windowMat);
      frontGlass.position.set(0, groundClearance + chassisHeight + cabinHeight * 0.5, cabinLen / 2 + 0.02);
      this.group.add(frontGlass);
    }

    // ==========================================
    // Headlights, Taillights, Wheels
    // ==========================================
    const lightGeo = new THREE.CircleGeometry(0.16, 12);
    const headMat = new THREE.MeshBasicMaterial({ color: 0xFFFDE7 });
    const tailMat = new THREE.MeshBasicMaterial({ color: 0xD50000 });

    [-cfg.width * 0.35, cfg.width * 0.35].forEach((xOff) => {
      const hLight = new THREE.Mesh(lightGeo, headMat);
      hLight.position.set(xOff, 0.55, cfg.length / 2 + 0.02);
      this.group.add(hLight);

      const tLight = new THREE.Mesh(lightGeo, tailMat);
      tLight.rotation.y = Math.PI;
      tLight.position.set(xOff, 0.55, -cfg.length / 2 - 0.02);
      this.group.add(tLight);
    });

    const carFrontLight = new THREE.PointLight(0xFFFDE7, 0.8, 10);
    carFrontLight.position.set(0, 0.6, cfg.length / 2 + 0.5);
    this.group.add(carFrontLight);
    this.headlights.push(carFrontLight);

    // Wheels setup
    let wheelRadius = 0.32;
    if (cfg.type === 'suv' || cfg.type === 'semi_truck') wheelRadius = 0.38;
    if (cfg.type === 'kei_truck' || cfg.type === 'kei_car' || cfg.type === 'sports_car') wheelRadius = 0.28;

    const wheelGeo = new THREE.CylinderGeometry(wheelRadius, wheelRadius, 0.18, 16);
    wheelGeo.rotateZ(Math.PI / 2);

    // Semi-truck has 3 axle sets (6 positions), others have 2 axles
    let zPositions = [-cfg.length * 0.32, cfg.length * 0.32];
    if (cfg.type === 'semi_truck') {
      zPositions = [cfg.length * 0.36, -cfg.length * 0.22, -cfg.length * 0.38];
    }

    zPositions.forEach((zPos) => {
      const wL = new THREE.Mesh(wheelGeo, wheelMat);
      wL.position.set(cfg.width / 2 + 0.06, wheelRadius, zPos);
      wL.castShadow = true;
      this.group.add(wL);
      this.wheels.push(wL);

      const wR = new THREE.Mesh(wheelGeo, wheelMat);
      wR.position.set(-cfg.width / 2 - 0.06, wheelRadius, zPos);
      wR.castShadow = true;
      this.group.add(wR);
      this.wheels.push(wR);
    });
  }

  public update(delta: number): void {
    if (this.sirenLight && this.sirenPointLight) {
      const pulse = Math.sin(Date.now() * 0.012);
      this.sirenPointLight.intensity = pulse > 0 ? 1.8 : 0.2;
    }

    const distance = this.speed * delta;
    const wheelAngle = distance / 0.32;
    this.wheels.forEach(w => {
      w.rotation.x += wheelAngle;
    });
  }

  public updateLookingAnimation(progressRatio: number): void {
    const lookAngle = Math.sin(progressRatio * Math.PI * 4) * 0.12;
    this.group.rotation.y = this.initialYRotation + lookAngle;
  }

  public resetLookingAnimation(): void {
    this.group.rotation.y = this.initialYRotation;
  }
}
