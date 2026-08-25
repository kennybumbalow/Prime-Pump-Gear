import { 
  ServiceItem, 
  EquipmentItem, 
  IndustryItem, 
  ProjectItem, 
  ProcessStep, 
  WhyChoosePillar,
  TestimonialItem
} from '../types';

import heroFacilityImg from '../assets/images/facility_modern_1787688158538.jpg';
import pumpRebuildImg from '../assets/images/pump_rebuild_shop_1787687081490.jpg';
import gearboxRebuildImg from '../assets/images/gearbox_rebuild_shop_1787687095954.jpg';
import thermalSprayImg from '../assets/images/thermal_spray_shaft_1787687108142.jpg';
import dynamicBalanceImg from '../assets/images/dynamic_balance_rotor_1787687120949.jpg';
import machiningLatheImg from '../assets/images/machining_lathe_1787688046627.jpg';
import gearManufacturingImg from '../assets/images/gear_manufacturing_1787688059840.jpg';
import blowerRepairImg from '../assets/images/blower_repair_1787688073451.jpg';
import agitatorRepairImg from '../assets/images/agitator_repair_1787688085026.jpg';
import extruderScrewsImg from '../assets/images/extruder_screws_1787688095841.jpg';
import cylinderRepairImg from '../assets/images/cylinder_repair_1787688108285.jpg';
import shredderRotorImg from '../assets/images/shredder_rotor_1787688120027.jpg';
import cmmInspectionImg from '../assets/images/cmm_inspection_1787688132728.jpg';
import pressureTestingImg from '../assets/images/pressure_testing_1787688144921.jpg';
import sterlingBeforeImg from '../assets/images/sterling_before_1787688972009.jpg';
import sterlingAfterImg from '../assets/images/sterling_after_1787688985829.jpg';

export const ASSET_IMAGES = {
  heroFacility: heroFacilityImg,
  pumpRebuild: pumpRebuildImg,
  gearboxRebuild: gearboxRebuildImg,
  thermalSpray: thermalSprayImg,
  dynamicBalance: dynamicBalanceImg,
  machiningLathe: machiningLatheImg,
  gearManufacturing: gearManufacturingImg,
  blowerRepair: blowerRepairImg,
  agitatorRepair: agitatorRepairImg,
  extruderScrews: extruderScrewsImg,
  cylinderRepair: cylinderRepairImg,
  shredderRotor: shredderRotorImg,
  cmmInspection: cmmInspectionImg,
  pressureTesting: pressureTestingImg,
  sterlingBefore: sterlingBeforeImg,
  sterlingAfter: sterlingAfterImg
};

export const COMPANY_INFO = {
  name: 'Prime Pump & Gear Services',
  tagline: 'ROTATING EQUIPMENT REPAIR • REBUILT TO PERFORM',
  slogan: 'ENGINEERED FOR EXTREME UPTIME. REPAIR & REBUILD SPECIALISTS.',
  subheadline: 'Industrial pump, gearbox, blower, and rotating equipment repair, rebuilding, machining, and manufacturing services.',
  corePillars: 'REPAIR • REBUILD • MACHINE • MANUFACTURE • BALANCE',
  craneCapacity: 'HEAVY INDUSTRIAL REBUILD CAPACITY',
  craneCapacityShort: 'PRECISION REBUILD FACILITY',
  phone: '(832) 903-4587',
  phoneRaw: '8329034587',
  phoneAlt: '(832) 903-4587',
  email: 'ken@primepgs.com',
  quoteEmail: 'ken@primepgs.com',
  emergencyPhone: '(832) 903-4587',
  city: 'Missouri City',
  state: 'Texas',
  location: 'Missouri City, Texas',
  fullAddress: 'Missouri City, Texas',
  facility: 'Missouri City Heavy Industrial Machining & Rebuild Facility',
  established: 'Missouri City, Texas',
  turnaroundPromise: 'Minimizing Downtime with 24/7 Rapid Response & Fast-Track Precision Rebuilds'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'pump-repair',
    slug: 'pump-repair-rebuilding',
    title: 'Pump Repair & Rebuilding',
    shortDesc: 'Comprehensive industrial pump overhaul, precision shaft restoration, mechanical seal upgrades, and dynamic impeller balancing.',
    fullDesc: 'We provide full teardown, non-destructive inspection, precision machining, dynamic balancing, and hydrostatic testing for all industrial pump styles. From heavy-slurry centrifugal pumps to high-pressure multi-stage units, we return equipment to or exceeding OEM tolerances.',
    bullets: [
      'Industrial pump inspection & root cause failure analysis',
      'Complete teardown, cleaning, and precision measurement',
      'Mechanical seal and premium bearing replacement',
      'Impeller wear-ring remachining & dynamic balancing',
      'Shaft repair, journal grinding & dimensional restoration',
      'Hydrostatic pressure testing and QA certification'
    ],
    capabilities: [
      { label: 'Pump Types', value: 'Centrifugal, Multi-stage, Submersible, Positive Displacement, Split-Case, Slurry' },
      { label: 'Max Capacity', value: 'Units up to 25,000 lbs & 48" discharge' },
      { label: 'Testing', value: 'Hydrostatic testing to 3,000 PSI & dynamic vibration analysis' }
    ],
    specifications: [
      'ANSI / API 610 compliance guidelines',
      'Total Indicator Reading (TIR) runout under 0.0005"',
      'Bearing bore alignment to ±0.0002" tolerances',
      'ISO 1940 Grade G1.0 / G2.5 precision balancing'
    ],
    image: ASSET_IMAGES.pumpRebuild,
    iconName: 'Activity',
    typicalTurnaround: '3–7 Days (24/48-hr Emergency Available)'
  },
  {
    id: 'gearbox-repair',
    slug: 'gearbox-repair-rebuilding',
    title: 'Gearbox Repair & Rebuilding',
    shortDesc: 'Complete industrial speed reducer and increaser rebuilds, gear cutting, housing line boring, and backlash setting.',
    fullDesc: 'Prime Pump & Gear provides turnkey gearbox overhauls across planetary, helical, bevel, spur, and worm configurations. We inspect for tooth pitting, micro-cracks, and bearing fretting, remachine housings, fabricate obsolete gears, and bench test under load simulation.',
    bullets: [
      'Comprehensive gearbox teardown & gear tooth contact pattern check',
      'Housing line boring and bore sleeving / recovery',
      'Bearing and seal replacement using premium Timken / SKF components',
      'Gear replacement, gear cutting, and custom profile grinding',
      'High-torque input/output shaft repair and fabrication',
      'Full spin testing, temperature baseline, and vibration spectrum report'
    ],
    capabilities: [
      { label: 'Configurations', value: 'Helical, Bevel, Planetary, Worm, Extruder Drives, Speed Reducers' },
      { label: 'Torque Capacity', value: 'High-torque industrial gearboxes & multi-stage reducers' },
      { label: 'Ratio Verifications', value: 'Custom ratios and high-reduction multi-stage units' }
    ],
    specifications: [
      'AGMA Quality Class 10 to 14 tooth finishing',
      'Tooth contact check with minimum 85% flank contact',
      'Housing bore alignment verified via laser tracker',
      'Full synthetic flushing & break-in run testing'
    ],
    image: ASSET_IMAGES.gearboxRebuild,
    iconName: 'Cog',
    typicalTurnaround: '5–10 Days (Rush Hot-Job Expedited)'
  },
  {
    id: 'blower-airlock',
    slug: 'blower-airlock-repair',
    title: 'Blower & Airlock Repair',
    shortDesc: 'Precision restoration for positive displacement rotary lobe blowers, vacuum boosters, and rotary airlock valves.',
    fullDesc: 'Critical pneumatic conveying and process blowers require tight lobe-to-lobe and headplate clearances. We rebuild Roots-type blowers and heavy-duty rotary valves with precision timing gear synchronization, shaft restoration, and high-temperature seal retrofits.',
    bullets: [
      'Positive displacement rotary blowers and vacuum pumps',
      'Rotary airlock feeder rebuilding & rotor tip clearance resetting',
      'Precision lobe timing gear replacement and backlash timing',
      'Shaft journal repair and ceramic/hard chrome wear sleeves',
      'High-grade bearing and labyrinth/viton seal replacement',
      'Dynamometer spin testing and cold clearance documentation'
    ],
    capabilities: [
      { label: 'Blower Styles', value: 'Bi-lobe, Tri-lobe, Screw blowers, Centrifugal fans, Rotary airlocks' },
      { label: 'Clearance Setting', value: 'Headplate & cylinder clearances dialed to 0.001"' },
      { label: 'Timing Gears', value: 'Precision taper-fit & spline timing synchronization' }
    ],
    specifications: [
      'OEM clearance restoration (Roots, Gardner Denver, Sutorbilt, Aerzen)',
      'High-temp Viton and Teflon seal options',
      'Lobe balancing to eliminate high-RPM vibration harmonics'
    ],
    image: ASSET_IMAGES.blowerRepair,
    iconName: 'Wind',
    typicalTurnaround: '3–5 Days'
  },
  {
    id: 'cnc-machining',
    slug: 'cnc-machining-manufacturing',
    title: 'CNC Machining & Manufacturing',
    shortDesc: 'Heavy industrial multi-axis CNC milling, turning, reverse engineering, and custom replacement component fabrication.',
    fullDesc: 'When OEM components are obsolete or lead times are 26+ weeks, our full CNC machine shop manufactures direct replacements. We handle large swing diameters, long-bed shaft turning, and complex 3D contoured parts using high-tensile 4140, 4340, 17-4PH, and stainless alloys.',
    bullets: [
      'Large-capacity CNC horizontal & vertical milling',
      'Long-bed heavy CNC shaft and journal turning',
      'Complete reverse engineering of obsolete industrial components',
      'Custom manufacturing of shafts, sleeves, bushings, and impellers',
      'Tight-tolerance broaching, keyway cutting, and spline milling',
      'Coordinate Measuring Machine (CMM) digital dimensional verification'
    ],
    capabilities: [
      { label: 'Turning Capacity', value: 'Up to 60" diameter swing & 240" bed length' },
      { label: 'Milling Envelope', value: '5-Axis & Large Horizontal Boring Mill up to 120" travel' },
      { label: 'Materials', value: '4140/4340 HT, 316/304 SS, 17-4PH, Inconel, Monel, Hastelloy, Bronze' }
    ],
    specifications: [
      'Machining tolerances within ±0.0002" (0.005mm)',
      'Surface finish Ra down to 16 micro-inch',
      'Complete material certs (MTRs) and dimensional inspection reports'
    ],
    image: ASSET_IMAGES.machiningLathe,
    iconName: 'Cpu',
    typicalTurnaround: '2–7 Days'
  },
  {
    id: 'grinding',
    slug: 'precision-grinding',
    title: 'Precision Grinding',
    shortDesc: 'High-precision cylindrical OD/ID grinding, surface grinding, and shaft journal micro-finish restoration.',
    fullDesc: 'We restore bearing journals, seal areas, and mating surfaces to exact dimensional tolerances with mirror surface finishes. Our precision cylindrical and surface grinders correct taper, out-of-roundness, and runout defects.',
    bullets: [
      'Large-capacity Outer Diameter (OD) cylindrical grinding',
      'Inner Diameter (ID) precision bore grinding',
      'Rotary and reciprocating table surface grinding',
      'Shaft journal micro-polishing and superfinishing',
      'Correction of journal eccentricities and out-of-round wear',
      'Restoration of chrome and thermal spray ground finishes'
    ],
    capabilities: [
      { label: 'OD Grinding', value: 'Up to 36" diameter x 180" length between centers' },
      { label: 'Surface Finish', value: 'Down to 8 Ra for critical mechanical seal and bearing seats' },
      { label: 'Tolerances', value: 'Bearing fit tolerances within ±0.0001"' }
    ],
    specifications: [
      'Concentricity and runout verified under 0.0002" TIR',
      'Precision magnetic chuck & center-to-center steady rests'
    ],
    image: ASSET_IMAGES.thermalSpray,
    iconName: 'Disc',
    typicalTurnaround: '1–4 Days'
  },
  {
    id: 'welding-fabrication',
    slug: 'welding-fabrication',
    title: 'Welding & Fabrication',
    shortDesc: 'ASME-qualified structural and overlay welding, hardfacing, shaft repair, and custom equipment baseplate fabrication.',
    fullDesc: 'Our welding department specializes in structural repairs, crack excavation, shaft buildup, and wear-resistant cladding. We work with carbon steels, stainless alloys, chrome-moly, cast iron, and exotic materials with strict preheat/post-weld heat treatment protocols.',
    bullets: [
      'ASME Section IX qualified welding processes (GTAW/TIG, GMAW/MIG, SMAW, SAW)',
      'Shaft buildup and wear-surface cladding/hardfacing',
      'Cast iron and cast steel housing crack gouging and repair',
      'Custom heavy equipment skid and baseplate fabrication',
      'Controlled preheating and stress-relieving heat treatment',
      'Non-destructive testing (PT, MT, UT) dye penetrant verification'
    ],
    capabilities: [
      { label: 'Processes', value: 'Submerged Arc (SAW), TIG, MIG, Stick, Plasma Gouging' },
      { label: 'Alloys', value: 'Carbon steel, Stainless, Inconel 625 overlay, Stellite, Cast Iron' },
      { label: 'Ovens', value: 'Stress relief and preheat temperature-controlled furnaces' }
    ],
    specifications: [
      'WPS / PQR documentation for critical chemical & refinery repairs',
      '100% weld joint NDT crack inspection'
    ],
    image: ASSET_IMAGES.gearManufacturing,
    iconName: 'Flame',
    typicalTurnaround: '2–5 Days'
  },
  {
    id: 'metal-spraying',
    slug: 'metal-spraying-thermal-spray',
    title: 'Metal Spraying (Thermal Spray)',
    shortDesc: 'Twin-wire arc and HVOF thermal spray coatings for shaft dimensional recovery, corrosion barrier, and wear resistance.',
    fullDesc: 'Thermal spray allows us to rebuild undersized bearing journals, seal areas, and scored shafts without excessive heat distortion. We deposit stainless steels, nickel-chrome, tungsten carbide, and bronzes, followed by precision finish-grinding.',
    bullets: [
      'Twin-wire arc spray & flame spray dimensional recovery',
      'Shaft restoration without base metal heat damage or distortion',
      'Wear-surface restoration for high-abrasion environments',
      'Corrosion and cavitation barrier coatings (Hastelloy / 316L / Carbides)',
      'Tungsten Carbide and ceramic wear-sleeve deposition',
      'Post-spray finish grinding to pristine OEM surface specifications'
    ],
    capabilities: [
      { label: 'Coating Types', value: 'Stainless steel, Nickel-Chrome, Bronze, Tungsten Carbide, Ceramic' },
      { label: 'Bond Strength', value: 'High tensile bond strength up to 10,000+ PSI' },
      { label: 'Low Heat', value: 'Substrate kept below 250°F to prevent metallurgical stress' }
    ],
    specifications: [
      'Zero heat-affected zone (HAZ) warping on precision shafts',
      'Restores shafts undersized by up to 0.125" per side',
      'Extended service life exceeding original bare steel shafts'
    ],
    image: ASSET_IMAGES.thermalSpray,
    iconName: 'Sparkles',
    typicalTurnaround: '2–4 Days'
  },
  {
    id: 'dynamic-balancing',
    slug: 'dynamic-balancing',
    title: 'Dynamic Balancing',
    shortDesc: 'Precision multi-plane dynamic balancing for rotors, impellers, shafts, blowers, and high-RPM rotating assemblies.',
    fullDesc: 'Unbalance is the leading cause of bearing failure, mechanical seal leakage, and structural fatigue. Our computerized dynamic balancing bays balance rotors up to 15,000 lbs across low to high RPM ranges, certifying each rotor to ISO 1940 standards with full vibration documentation.',
    bullets: [
      'Multi-plane static and dynamic balancing on hard-bearing & soft-bearing rigs',
      'Impellers, pump shafts, turbine rotors, and blower assemblies',
      'Shredder rotors, industrial fans, extruder screws, and drive couplings',
      'ISO 1940 Grade G1.0, G2.5, and G6.3 balancing certification',
      'Phase angle and unbalance correction via precision milling or weight addition',
      'Comprehensive final balance certificate with before/after vibration spectra'
    ],
    capabilities: [
      { label: 'Rotor Weights', value: '5 lbs up to 15,000 lbs capacity' },
      { label: 'Diameter Swing', value: 'Up to 96" diameter swing & 240" length' },
      { label: 'Speeds', value: 'Operating speed simulation and high-resolution tracking' }
    ],
    specifications: [
      'ISO 1940-1 Grade G1.0 & G2.5 standard compliance',
      'Real-time FFT vibration spectrum analysis',
      'Hard copy and digital calibration certificates included'
    ],
    image: ASSET_IMAGES.dynamicBalance,
    iconName: 'Gauge',
    typicalTurnaround: 'Same-Day to 48 Hours'
  }
];

export const EQUIPMENT_DATA: EquipmentItem[] = [
  {
    id: 'pumps',
    name: 'Industrial Pumps',
    category: 'Pumps',
    tagline: 'Centrifugal, Split-Case, Multi-Stage & Slurry Pumps',
    description: 'Complete overhaul of boiler feed, process slurry, vertical turbine, end-suction, ANSI, and API heavy process pumps.',
    commonIssues: ['Cavitation damage', 'Impeller vane wear', 'Shaft deflection & seal leakage', 'Bearing housing fretting'],
    repairSolutions: ['Housing sleeve bore', 'Impeller weld overlay & balance', 'Shaft thermal spray & grind', 'New mechanical seal retrofits'],
    image: ASSET_IMAGES.pumpRebuild
  },
  {
    id: 'gearboxes',
    name: 'Industrial Gearboxes & Reducers',
    category: 'Gears & Drives',
    tagline: 'Helical, Bevel, Planetary & Heavy Extruder Drives',
    description: 'Precision rebuilds of Falk, Hansen, Philadelphia, Sumitomo, SEW-Eurodrive, and custom heavy gear drives.',
    commonIssues: ['Gear tooth pitting & spalling', 'Bearing spin & bore distortion', 'Shaft keyway deformation', 'Severe oil leakage'],
    repairSolutions: ['Line boring housing', 'Custom gear manufacture', 'Shaft journal metallizing', 'Contact pattern alignment'],
    image: ASSET_IMAGES.gearboxRebuild
  },
  {
    id: 'blowers',
    name: 'Rotary Lobe Blowers',
    category: 'Air & Gas',
    tagline: 'Positive Displacement & Roots-Type Blowers',
    description: 'Rebuilding of Roots, Gardner Denver, Aerzen, and Kaeser positive displacement blowers and vacuum exhausters.',
    commonIssues: ['Lobe-to-lobe contact', 'Headplate scoring', 'Timing gear slip/backlash', 'Bearing catastrophic seizure'],
    repairSolutions: ['Cylinder re-sleeving', 'Lobe profile remachining', 'Timing gear replacement', 'Precision clearance setting'],
    image: ASSET_IMAGES.blowerRepair
  },
  {
    id: 'airlocks',
    name: 'Rotary Airlock Feeders',
    category: 'Air & Gas',
    tagline: 'Pneumatic Conveying & Dust Collector Valves',
    description: 'Restoration of heavy rotary valves, blow-through feeders, and high-pressure rotary airlock systems.',
    commonIssues: ['Housing bore wash-out', 'Rotor vane tip wear', 'Shaft seal blow-by', 'Material bridging/jamming'],
    repairSolutions: ['Housing boring and hard chrome', 'Rotor blade tip buildup & turning', 'Shaft gland packing upgrade', 'Endplate facing'],
    image: ASSET_IMAGES.machiningLathe
  },
  {
    id: 'extruders',
    name: 'Extruder Screws & Barrels',
    category: 'Processing & Extrusion',
    tagline: 'Single, Twin-Screw & Compounding Drives',
    description: 'High-wear flight rebuilding, barrel relining, and thrust bearing assembly overhauls for polymer and chemical extruders.',
    commonIssues: ['Flight OD abrasive wear', 'Barrel ovality/washout', 'Thrust bearing assembly failure', 'Drive spline shearing'],
    repairSolutions: ['Stellite flight hardfacing', 'Precision CNC screw grinding', 'Barrel honing/bimetallic sleeve', 'Spline shaft remake'],
    image: ASSET_IMAGES.extruderScrews
  },
  {
    id: 'mixers',
    name: 'Mixers, Agitators & Blenders',
    category: 'Processing & Extrusion',
    tagline: 'High-Shear, Ribbon Blenders & Reactor Agitators',
    description: 'Shaft straightening, seal cartridge rebuilding, and impeller blade replacement for batch and continuous mixing vessels.',
    commonIssues: ['Shaft runout/bending', 'Cartridge seal destruction', 'Blade crack propagation', 'Bearing pedestal deflection'],
    repairSolutions: ['Hydraulic press straightening', 'Dynamic balancing of full rotor', 'Weld repair & dye penetrant test', 'Journal spray & grind'],
    image: ASSET_IMAGES.agitatorRepair
  },
  {
    id: 'shafts',
    name: 'Heavy Industrial Drive Shafts',
    category: 'Heavy Components',
    tagline: 'Line Shafts, Drive Spindles & Agitator Shafts',
    description: 'Machining, metallizing, and precision grinding of long-bed shafts up to 20 feet in length and 60 inches in diameter.',
    commonIssues: ['Bearing seat fretting', 'Keyway wallowing', 'Seal groove grooving', 'TIR runout & bending'],
    repairSolutions: ['Thermal spray dimensional restoration', 'Recutting standard/oversized keyways', 'Precision OD cylindrical grinding', 'TIR truing to 0.0005"'],
    image: ASSET_IMAGES.thermalSpray
  },
  {
    id: 'grinders-shredders',
    name: 'Shredders, Grinders & Pulverizers',
    category: 'Processing & Extrusion',
    tagline: 'High-Torque Shredder Rotors & Hammermills',
    description: 'Rotor shaft rebuilds, hardfacing of cutter hooks, bearing journal renewal, and dynamic balancing of heavy rotating drums.',
    commonIssues: ['Severe shock-load shaft bending', 'Bearing pocket fracture', 'Cutter seat wallowing', 'Heavy unbalance vibration'],
    repairSolutions: ['Heavy weld build-up & hardfacing', 'Bore repair with heavy-duty sleeves', 'Stress relief heat treating', 'Dynamic balancing to ISO G2.5'],
    image: ASSET_IMAGES.shredderRotor
  },
  {
    id: 'screws-barrels',
    name: 'Feed Screws & Barrels',
    category: 'Processing & Extrusion',
    tagline: 'Injection Molding & Conveyor Augers',
    description: 'Flight restoration, root diameter machining, chrome plating, and barrel bore honing for molding and processing plants.',
    commonIssues: ['Polymer/filler abrasive wear', 'Flight chipping', 'Drive tang cracking', 'Thermal warping'],
    repairSolutions: ['Colmonoy hardfacing overlay', 'CNC flight milling & polishing', 'Barrel internal re-honing', 'Custom alloy replacement screws'],
    image: ASSET_IMAGES.extruderScrews
  },
  {
    id: 'hydraulic-cylinders',
    name: 'Heavy Hydraulic Cylinders',
    category: 'Heavy Components',
    tagline: 'High-Pressure Industrial & Mill Cylinders',
    description: 'Rod re-chroming, barrel honing, custom gland manufacturing, and high-pressure seal repackaging for press & crane equipment.',
    commonIssues: ['Rod scoring and corrosion pitting', 'Internal barrel bypass scratching', 'Gland seal extrusion', 'Eyelet/clevis bushing wear'],
    repairSolutions: ['Hard chrome rod grinding', 'Internal barrel hone up to 24" ID', 'New Bronze gland CNC machining', 'Hydrostatic test to 5,000 PSI'],
    image: ASSET_IMAGES.cylinderRepair
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'chemical-plants',
    name: 'Chemical Plants & Petrochemical',
    iconName: 'FlaskConical',
    description: 'Corrosion-resistant pump overhauls, high-alloy shaft rebuilds, and hazardous service mechanical seal conversions.',
    primaryEquipment: ['API 610 Process Pumps', 'Magnetic Drive Pumps', 'Reactor Agitators', 'Centrifugal Blowers'],
    commonFailures: ['Chemical pitting & acid erosion', 'High-temp seal blowout', 'Exotic alloy shaft galling'],
    primeSolution: '316L / Hastelloy weld cladding, silicon-carbide mechanical seal upgrades, and dynamic balancing.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial Facilities',
    iconName: 'Factory',
    description: 'Plant-wide rotating equipment turnaround, line shaft repairs, overhead crane gearbox rebuilds, and custom spares.',
    primaryEquipment: ['Plant Air Compressors', 'Cooling Tower Pumps', 'Drive Spindles', 'Speed Reducers'],
    commonFailures: ['Continuous runtime bearing fatigue', 'Housing vibration wear', 'Shaft keyway wallowing'],
    primeSolution: 'Fast-track emergency turnaround, CMM dimensional verification, and drop-in component reproduction.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'concrete-aggregate',
    name: 'Concrete & Aggregate',
    iconName: 'Building2',
    description: 'Severe duty slurry pump rebuilding, rock crusher drive rebuilds, and heavy-duty conveyor gearbox overhauls.',
    primaryEquipment: ['Slurry & Dredge Pumps', 'Jaw Crusher Eccentric Shafts', 'Vibrating Screen Drives', 'Bucket Elevator Gearboxes'],
    commonFailures: ['Extreme particulate abrasive wear', 'High shock-load tooth shearing', 'Shaft seal contamination'],
    primeSolution: 'Tungsten carbide thermal spray, high-chrome white iron replacement impellers, and labyrinth taconite seal retrofits.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'plastics',
    name: 'Plastics & Polymers',
    iconName: 'Layers',
    description: 'Extruder screw rebuilding, barrel relining, compounding gearbox overhauls, and pelletizer rotor balancing.',
    primaryEquipment: ['Single & Twin Screw Extruders', 'Pelletizer Cutters', 'Chiller Pumps', 'Melt Pump Drives'],
    commonFailures: ['Flight OD clearance widening', 'Barrel ovality', 'Extruder thrust bearing collapse'],
    primeSolution: 'Colmonoy flight hardfacing, CNC precision flight profiling, bimetallic barrel sleeves, and thrust box overhauls.',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'recycling',
    name: 'Recycling & Waste Management',
    iconName: 'Recycle',
    description: 'High-torque shredder rotor rebuilding, hammermill shaft truing, and baler hydraulic cylinder overhauls.',
    primaryEquipment: ['Industrial Shredders', 'Granulator Rotors', 'Scrap Balers', 'Conveyor Reducers'],
    commonFailures: ['Uncrushable foreign object jam damage', 'Shaft deflection', 'Bearing housing fracture'],
    primeSolution: 'Heavy ASME structural weld repair, journal thermal spray recovery, and dynamic balancing under ISO G2.5.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'paper-pulp',
    name: 'Paper & Pulp Mills',
    iconName: 'FileText',
    description: 'Paper machine roll journal grinding, pulper drive overhauls, stock pump rebuilding, and vacuum pump restoration.',
    primaryEquipment: ['Stock Pumps', 'Vacuum Pumps', 'Refiner Drives', 'Suction Roll Journals'],
    commonFailures: ['Corrosive black liquor erosion', 'High humidity seal breakdown', 'Journal runout vibration'],
    primeSolution: 'Stainless/Hastelloy overlay, dynamic multi-plane balancing, and fast-track outage turnaround.',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'food-processing',
    name: 'Food & Beverage Processing',
    iconName: 'Utensils',
    description: 'Sanitary stainless pump rebuilding, food-grade gearbox overhauls, homogenizer drive repairs, and decanter centrifuges.',
    primaryEquipment: ['Sanitary Lobe Pumps', 'Centrifugal CIP Pumps', 'Decanter Centrifuges', 'Stainless Reducers'],
    commonFailures: ['Washdown chemical corrosion', 'Food-grade seal leak', 'Sanitary shaft sleeve grooving'],
    primeSolution: '316SS micro-finish shaft machining, USDA/FDA compliant seal retrofits, and non-toxic dye penetrant testing.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'energy',
    name: 'Energy, Power & Oil & Gas',
    iconName: 'Zap',
    description: 'Boiler feed pumps, cooling water circulation pumps, turbine speed reducers, and mud pump drive overhauls.',
    primaryEquipment: ['Multi-Stage Boiler Feed Pumps', 'Vertical Turbine Pumps', 'Pipeline Boosters', 'Gear Increasers'],
    commonFailures: ['Extreme pressure cavitation', 'High-RPM thermal vibration', 'Thrust collar breakdown'],
    primeSolution: 'API 610 specification conformance, laser bore alignment, and ISO G1.0 high-speed dynamic balancing.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'industrial-processing',
    name: 'Industrial Processing & Refining',
    iconName: 'Cpu',
    description: 'Heavy rotating process equipment restoration across refining, mineral processing, and industrial gas applications.',
    primaryEquipment: ['High-Pressure Split Case Pumps', 'Kiln Drives', 'Heavy Agitator Shafts', 'Rotary Airlocks'],
    commonFailures: ['Continuous thermal cycling', 'Bearing fretting corrosion', 'Gear tooth micropitting'],
    primeSolution: 'Precision housing line boring, AGMA Class 12 gear replacements, and thermal spray dimensional recovery.',
    image: ASSET_IMAGES.gearboxRebuild
  },
  {
    id: 'general-manufacturing',
    name: 'General Manufacturing',
    iconName: 'Wrench',
    description: 'Complete rotating machinery maintenance support, precision spare manufacturing, and preventive repair programs.',
    primaryEquipment: ['Motor Spindles', 'Hydraulic Power Units', 'Material Blowers', 'Exhaust Fans'],
    commonFailures: ['Bearing cage collapse', 'Seal failure from shaft runout', 'Obsolete spare part shortages'],
    primeSolution: 'Reverse engineering of discontinued OEM parts, rapid turnaround, and emergency hotline dispatch.',
    image: ASSET_IMAGES.heroFacility
  }
];

export const WHY_CHOOSE_PILLARS: WhyChoosePillar[] = [
  {
    id: 'experienced-repair',
    title: 'EXPERIENCED REPAIR',
    description: 'Industrial equipment repair focused on getting critical equipment back in service. Decades of combined rotating equipment expertise tackling the most demanding plant failures.',
    metric: '100%',
    metricLabel: 'Critical Equipment Focus',
    iconName: 'ShieldCheck'
  },
  {
    id: 'precision-machining',
    title: 'PRECISION MACHINING',
    description: 'Comprehensive in-house CNC turning, milling, and grinding capabilities for repair and custom components up to ±0.0002" tolerances.',
    metric: '±0.0002"',
    metricLabel: 'Machining Precision',
    iconName: 'Cpu'
  },
  {
    id: 'complete-rebuilds',
    title: 'COMPLETE REBUILDS',
    description: 'From initial inspection and disassembly through machining, assembly, dynamic balancing, testing, and finishing under one roof.',
    metric: 'Turnkey',
    metricLabel: 'Single-Source Accountability',
    iconName: 'Wrench'
  },
  {
    id: 'reverse-engineering',
    title: 'REVERSE ENGINEERING',
    description: 'Custom component reproduction when OEM parts are obsolete, unavailable, or burdened with 20+ week lead times.',
    metric: 'Zero OEM Delay',
    metricLabel: 'Obsolete Part Reproduction',
    iconName: 'Boxes'
  },
  {
    id: 'fast-turnaround',
    title: 'FAST TURNAROUND',
    description: 'Focused on minimizing equipment downtime with standard quick turnarounds and 24/7 emergency hot-job expedite services.',
    metric: '24/7',
    metricLabel: 'Emergency Response',
    iconName: 'Clock'
  }
];

export const REPAIR_PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'INSPECT',
    action: 'Evaluate the equipment & identify failures.',
    description: 'Complete visual and non-destructive examination upon arrival. We clean, disassemble, log baseline dimensions, check runouts, and take high-resolution photographic evidence.',
    keyChecks: ['Teardown & parts cataloging', 'Non-Destructive Testing (NDT)', 'TIR runout & bearing seat measurement', 'Failure mode identification'],
    iconName: 'Search',
    standardTime: '2–8 Hours',
    image: ASSET_IMAGES.cmmInspection
  },
  {
    step: '02',
    title: 'DIAGNOSE',
    action: 'Determine root cause & required repairs.',
    description: 'Our senior mechanical engineers assess why the component failed (misalignment, cavitation, lubrication starvation, vibration) and provide a detailed scope of work with firm pricing and timeline.',
    keyChecks: ['Root cause failure analysis (RCFA)', 'Engineering repair scope formulation', 'Material specification verification', 'Transparent customer quote package'],
    iconName: 'FileCheck',
    standardTime: '4–12 Hours',
    image: ASSET_IMAGES.cmmInspection
  },
  {
    step: '03',
    title: 'REPAIR / MACHINE',
    action: 'Restore or manufacture damaged components.',
    description: 'Precision in-house machining, shaft turning, thermal spray metalizing, housing line boring, welding, and grinding to restore all damaged surfaces to exact OEM standards.',
    keyChecks: ['CNC turning, milling & grinding', 'Twin-wire arc thermal spray', 'Housing line boring & sleeving', 'CMM dimensional verification'],
    iconName: 'Cpu',
    standardTime: '1–4 Days',
    image: ASSET_IMAGES.machiningLathe
  },
  {
    step: '04',
    title: 'REBUILD',
    action: 'Install bearings, seals & complete assembly.',
    description: 'Assembly by seasoned millwrights using premium Timken/SKF bearings, Viton seals, and OEM-spec torque sequences. Multi-plane dynamic balancing performed on all rotating assemblies.',
    keyChecks: ['ISO 1940 dynamic balancing', 'Clean room bearing induction heating', 'Backlash & tooth contact setting', 'Mechanical seal installation & setting'],
    iconName: 'Settings',
    standardTime: '1–2 Days',
    image: ASSET_IMAGES.dynamicBalance
  },
  {
    step: '05',
    title: 'TEST & RETURN',
    action: 'Test the equipment & prepare it for service.',
    description: 'Full testing prior to release: hydrostatic pressure testing, no-load and simulated load spin runs, vibration spectra recording, temperature baseline, protective painting, and rapid delivery.',
    keyChecks: ['Hydrostatic pressure test', 'Vibration & FFT frequency report', 'Temperature & noise baseline check', 'Protective coating & crating'],
    iconName: 'CheckCircle2',
    standardTime: 'Same Day as Final Assembly',
    image: ASSET_IMAGES.pressureTesting
  }
];

export const PROJECTS_GALLERY: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Sterling Extruder Gearbox Complete Overhaul & Rebuild',
    category: 'Gearbox',
    industry: 'Plastics & Polymer Extrusion',
    equipmentType: 'Sterling Heavy-Duty Extruder Drive Gearbox',
    challenge: 'Severe gear wear, bearing degradation, and housing bore misalignment causing excessive heat, vibration, and production downtime.',
    solution: 'Full teardown, line boring of bearing bores, thrust bearing replacement, precision gear tooth profiling, barrel flange re-machining, new seals, high-grade protective coating, and dynamic spin testing.',
    turnaroundTime: 'Rapid Expedited Rebuild',
    image: ASSET_IMAGES.sterlingAfter,
    hasBeforeAfter: true,
    beforeImage: ASSET_IMAGES.sterlingBefore,
    afterImage: ASSET_IMAGES.sterlingAfter,
    metrics: [
      { label: 'OEM Tolerances Restored', value: '100% Factory Spec' },
      { label: 'TIR Final Runout', value: '<0.0003"' },
      { label: 'Vibration Level', value: '0.03 in/s (ISO Class A)' }
    ]
  },
  {
    id: 'proj-2',
    title: 'Multi-Stage Boiler Feed Pump Rebuild & Impeller Balancing',
    category: 'Pump',
    industry: 'Power Generation',
    equipmentType: 'Ingersoll-Rand 8-Stage Centrifugal Boiler Feed Pump',
    challenge: 'Severe cavitation damage across 8 stages resulting in 40% pressure drop and dangerous high-frequency vibration.',
    solution: 'Re-machined all internal wear rings, rebuilt 8 impellers with stainless weld overlay, precision shaft straightening, and dynamic balancing to ISO G1.0.',
    turnaroundTime: '5 Days',
    image: ASSET_IMAGES.pumpRebuild,
    hasBeforeAfter: true,
    beforeImage: ASSET_IMAGES.agitatorRepair,
    afterImage: ASSET_IMAGES.pumpRebuild,
    metrics: [
      { label: 'Pressure Restored', value: '1,450 PSI (100% OEM)' },
      { label: 'Impeller Balance', value: 'ISO 1940 G1.0' },
      { label: 'Hydrostatic Test', value: '2,200 PSI Held 60min' }
    ]
  },
  {
    id: 'proj-3',
    title: 'Large 4340 Alloy Drive Shaft CNC Machining & Grinding',
    category: 'Machining',
    industry: 'Concrete & Aggregate',
    equipmentType: 'Jaw Crusher Main Drive Eccentric Shaft (18ft length)',
    challenge: 'OEM replacement had an 18-month lead time from overseas manufacturer with crushing plant completely stopped.',
    solution: 'Reverse engineered from broken shaft using portable CMM, CNC turned from 4340 annealed forged billet, heat treated, and finish ground to ±0.0002".',
    turnaroundTime: '6 Days',
    image: ASSET_IMAGES.machiningLathe,
    metrics: [
      { label: 'Material', value: '4340 Quenched & Tempered' },
      { label: 'Bearing Fit Tolerance', value: '+0.0002" / -0.0000"' },
      { label: 'Plant Saved', value: '$850k in downtime' }
    ]
  },
  {
    id: 'proj-4',
    title: 'Roots-Type Positive Displacement Blower Timing & Rebuild',
    category: 'Balancing',
    industry: 'Chemical & Polymer Processing',
    equipmentType: 'Roots Whispair 1021 Rotary Lobe Gas Blower',
    challenge: 'Timing gear failure caused lobe-to-lobe galling and headplate gouging under corrosive gas operation.',
    solution: 'Resurfaced headplates, rebuilt lobes with 316SS overlay, fitted new precision AGMA 12 timing gears, set clearances to 0.002", and spin tested.',
    turnaroundTime: '4 Days',
    image: ASSET_IMAGES.blowerRepair,
    metrics: [
      { label: 'Clearance Restored', value: '0.0025" Cold Clearances' },
      { label: 'Test CFM', value: '100% Rated Volume' },
      { label: 'Bearings Used', value: 'Timken Heavy Duty Spherical' }
    ]
  },
  {
    id: 'proj-5',
    title: 'Shaft Dimensional Restoration via Twin-Wire Metal Spraying',
    category: 'Metal Spray',
    industry: 'Recycling / Shredding',
    equipmentType: 'High-Torque Shredder Rotor Stub Shafts',
    challenge: 'Bearing inner race spun on shaft journal, wearing the shaft 0.065" undersize and causing severe wobble.',
    solution: 'Grit blasted, deposited high-bond nickel-chrome alloy via twin-wire arc spray with zero heat distortion, and precision ground to standard bearing bore fit.',
    turnaroundTime: '48 Hours',
    image: ASSET_IMAGES.thermalSpray,
    metrics: [
      { label: 'Bond Strength', value: '8,500 PSI' },
      { label: 'Substrate Temp', value: '<200°F (No Warping)' },
      { label: 'Ground Finish', value: '16 Ra Micro-finish' }
    ]
  },
  {
    id: 'proj-6',
    title: 'Heavy Agitator Impeller & Shaft Multi-Plane Balancing',
    category: 'Balancing',
    industry: 'Plastics & Compounding',
    equipmentType: '8,000 lb High-Viscosity Reactor Agitator Assembly',
    challenge: 'Severe resonance vibration at 450 RPM shaking the reactor vessel and destroying mechanical seals every 3 weeks.',
    solution: 'Precision dynamic balancing in our 15,000-lb hard-bearing balancing bay, identifying phase lag and correcting unbalance at both top and bottom planes.',
    turnaroundTime: '24 Hours',
    image: ASSET_IMAGES.dynamicBalance,
    metrics: [
      { label: 'Starting Unbalance', value: '480 g-mm' },
      { label: 'Final Unbalance', value: '14 g-mm (ISO G1.0)' },
      { label: 'Vibration Drop', value: '91% Reduction' }
    ]
  },
  {
    id: 'proj-7',
    title: 'Rotary Airlock Feeder Housing Re-machining & Rotor Buildup',
    category: 'Welding',
    industry: 'Food & Grain Processing',
    equipmentType: '16x16 Heavy Duty Blow-Through Airlock Valve',
    challenge: 'Severe abrasive washout in housing bore allowing air pressure blow-by and dropping conveying line efficiency by 50%.',
    solution: 'Line bored housing cylinder, applied hard chrome wear layer, built up 8 rotor vane tips with 316SS and precision turned to 0.003" running clearance.',
    turnaroundTime: '3 Days',
    image: ASSET_IMAGES.gearManufacturing,
    metrics: [
      { label: 'Blow-by Reduced', value: '98%' },
      { label: 'Rotor Clearance', value: '0.0035" Uniform' },
      { label: 'Material', value: 'Sanitary Grade 316 SS' }
    ]
  },
  {
    id: 'proj-8',
    title: 'Heavy Extruder Drive Gearbox Full Overhaul & Testing',
    category: 'Finished',
    industry: 'Plastics & Extrusion',
    equipmentType: 'Krauss-Maffei Twin Screw Extruder Gearbox',
    challenge: 'Thrust bearing pack failure damaged thrust collar and output hollow shaft splines.',
    solution: 'Complete teardown, line boring of housing, remanufactured heavy thrust sleeve, installed precision matched thrust bearings, and full-load spin testing.',
    turnaroundTime: '7 Days',
    image: ASSET_IMAGES.extruderScrews,
    metrics: [
      { label: 'Thrust Load Rated', value: '250 Tons' },
      { label: 'Gear Backlash', value: 'Set to 0.008" OEM spec' },
      { label: 'Warranty', value: '12-Month Industrial Rebuild Warranty' }
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "When our main boiler feed pump seized during a cold snap, OEM quoted 18 weeks. Prime Pump & Gear picked it up within 2 hours, remachined the shaft, rebalanced the impellers, and delivered it back running perfectly in 4 days. They saved our plant millions in potential downtime.",
    role: "Plant Maintenance Superintendent",
    companyType: "Petrochemical Refinery",
    location: "Baytown, TX",
    highlight: "Saved 17 weeks vs OEM lead time"
  },
  {
    quote: "Their CNC machining and dynamic balancing capabilities are second to none in the Houston area. We send all our Falk and Sumitomo heavy gearboxes to Prime. Every unit comes back painted, certified with vibration spectra, and ready for immediate drop-in service.",
    role: "Director of Reliability Engineering",
    companyType: "Aggregate & Materials Producer",
    location: "Pasadena, TX",
    highlight: "Zero rework across 40+ gearbox overhauls"
  },
  {
    quote: "Prime reverse-engineered a set of discontinued mixer drive gears that we thought were impossible to replace. The precision fit and tooth contact were flawless. True craftsmen who understand industrial urgency.",
    role: "Operations Manager",
    companyType: "Polymer Processing Facility",
    location: "Freeport, TX",
    highlight: "Flawless obsolete component reproduction"
  }
];
