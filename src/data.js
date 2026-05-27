// ─────────────────────────────────────────────
// Portfolio Data — Joyal Jojo
// Edit this file to update all portfolio content.
// Swap placeholder images with real ones as needed.
// ─────────────────────────────────────────────

export const profile = {
  name: 'Joyal Jojo',
  title: 'Mechanical Engineer',
  tagline: 'System Design & Optimisation · CAD & 3D Modelling · Aerospace · Reliability & Maintenance',
  email: 'joyaljojo.connect@gmail.com',
  linkedin: 'https://www.linkedin.com/in/joyal-jojo',
  location: 'Melbourne, Australia',
  // Replace with your own photo path when ready (place in public/ folder)
  photo: './profile-photo.jpg.jpg',
  summary:
    'Proactive and multidisciplinary Mechanical Engineer with strengths in system design & optimisation, product development, process improvement, and root cause analysis. Applies engineering rigour under high pressure, technically demanding environments — from aerospace overhaul to manufacturing optimisation. Driven by first-principles thinking and systems engineering to deliver robust, high-performance solutions across diverse engineering contexts.',
  workRights: 'Full work rights under Temporary Graduate Visa (Subclass 485)',
};

export const profileHighlights = [
  { icon: '🎓', label: 'Master\'s — University of Melbourne' },
  { icon: '🏆', label: 'Capstone Merit Endeavour Award' },
  { icon: '📜', label: 'Lean Six Sigma Green Belt' },
  { icon: '✈️', label: 'Aerospace Engineering Intern' },
  { icon: '⚙️', label: 'System Design & Optimisation' },
  { icon: '🌏', label: 'India → Australia' },
];

export const beyondEngineering = [
  {
    role: 'Rideshare Partner',
    company: 'Uber',
    period: 'Melbourne',
    icon: '🚗',
    description:
      'Drove to immerse in Australian culture and connect with people from all walks of life — different backgrounds, ages, and perspectives. Built strong interpersonal and communication skills that complement technical expertise.',
  },
  {
    role: 'Children\'s Crossing Supervisor',
    company: 'Banyule City Council',
    period: 'Melbourne',
    icon: '🛡️',
    description:
      'Ensured the safety of school children at designated crossings, demonstrating responsibility, vigilance, and commitment to community well-being — reinforcing safety-first engineering values.',
  },
];

export const skills = {
  technical: [
    'Lean Six Sigma (Green Belt)',
    'Kaizen & DMAIC',
    'DFM / DFA',
    'Root Cause Analysis (RCA)',
    'FMEA',
    'QMS (ISO 9001)',
    'Wing Load Validation',
    'Strain Gauge Testing',
    'Forensic Material Analysis',
    'Automation & Control Systems',
    'Rapid Prototyping',
    'AS1100 / AS1210 / AS1170',
  ],
  software: [
    'SolidWorks',
    'AutoCAD',
    'Siemens NX',
    'Python',
    'C++',
    'MATLAB & Simulink',
    'FEA (Abaqus / ANSYS)',
    'AnyLogic',
    'PLC Ladder Logic',
    'G-Code / M-Code',
    'Spartan (Linux HPC)',
    'Microsoft 365',
  ],
  soft: [
    'Stakeholder Management',
    'Teamwork & Collaboration',
    'Problem Solving',
    'Critical Thinking',
    'Adaptability',
    'Attention to Detail',
    'Time Management',
    'Leadership',
    'HSE / WHS Compliance',
    'Fast Learner',
  ],
};

export const experience = [
  {
    role: 'Mechanical Engineer',
    company: 'Box Hill Miniature Steam Railway Society',
    location: 'Melbourne, VIC',
    period: 'Mar 2026 – Present',
    highlights: [
      'Apply core mechanical principles to troubleshooting and precision repair of steam and diesel-hydraulic locomotives.',
      'Execute passenger-carrying operations within a high-traffic, regulated environment, maintaining a zero-incident record.',
      'Re-engineered track carriage components and structural assemblies using CAD to enhance durability and load-bearing capacity.',
      'Coordinate technical inspections and infrastructure audits, leveraging systems-thinking to minimize lifecycle costs.',
    ],
    icon: '🚂',
    color: '#00f5ff',
    images: [
      { src: './Career timeline/Miniature Railways/PXL_20260503_004701335.jpg', alt: 'Miniature Railway 1' },
      { src: './Career timeline/Miniature Railways/PXL_20260503_010704096.jpg', alt: 'Miniature Railway 2' },
      { src: './Career timeline/Miniature Railways/PXL_20260503_010716570.jpg', alt: 'Miniature Railway 3' },
      { src: './Career timeline/Miniature Railways/PXL_20260503_022252102.jpg', alt: 'Miniature Railway 4' }
    ],
  },
  {
    role: 'Student Project Engineer',
    company: 'SiRe — Students in Renewable Energy',
    location: 'University of Melbourne, VIC',
    period: 'Feb 2024 – Nov 2025',
    highlights: [
      'Led the mechanical design and integration for a 10W small-scale wind turbine prototype across cross-functional teams.',
      'Managed the full project lifecycle from conceptual CAD modelling to physical prototyping, exceeding standard curriculum requirements.',
      'Acted as key technical liaison, streamlining communication between engineering sub-teams to resolve design bottlenecks.',
    ],
    icon: '💨',
    color: '#a855f7',
    images: [
      { src: './Career timeline/Sire/Sire_Wind team.jpg', alt: 'SIRE Wind Team' },
      { src: './Career timeline/Sire/V1.jpg', alt: 'SIRE Prototype V1' },
      { src: './Career timeline/Sire/V2.jpg', alt: 'SIRE Prototype V2' }
    ],
  },
  {
    role: 'Technical Consultant',
    company: 'PricewaterhouseCoopers (PwC)',
    location: 'Bangalore, India',
    period: 'Aug 2023 – Sept 2023',
    highlights: [
      'Selected from a highly competitive applicant pool for enterprise-level technical consulting.',
      'Shadowed senior consultants to observe translation of complex system requirements into actionable commercial strategies.',
    ],
    icon: '📊',
    color: '#fbbf24',
    files: [{ url: './Internship/pwc.pdf', label: 'Internship Certificate' }],
  },
  {
    role: 'Engineering Intern — Quality & Overhaul',
    company: 'Hindustan Aeronautics Ltd (HAL)',
    location: 'Bangalore, India',
    period: 'May 2022 – Jun 2022',
    highlights: [
      'Supported QMS activities during overhaul of Dassault Mirage 2000I fighter jets, ensuring aerospace safety standards.',
      'Facilitated root cause analysis workshops to investigate fluid system leaks with cross-functional engineering teams.',
      'Conducted process validations using strain gauge instrumentation and ground vibration testing for wing load compliance.',
    ],
    icon: '✈️',
    color: '#f43f5e',
    images: [
      { src: './Career timeline/HAL/Engine HAL.png', alt: 'HAL Engine' },
      { src: './Career timeline/HAL/HAL_hanger.jpg', alt: 'HAL Hangar 1' },
      { src: './Career timeline/HAL/Hanger_2.jpg', alt: 'HAL Hangar 2' },
      { src: './Career timeline/HAL/Hanger_3.jpg', alt: 'HAL Hangar 3' },
      { src: './Career timeline/HAL/Screenshot 2026-05-27 122323.png', alt: 'HAL Diagram' }
    ],
    files: [{ url: './Internship/HAL Internship certificate.pdf', label: 'Internship Certificate' }],
  },
  {
    role: 'Engineering Consulting (Virtual)',
    company: 'GHD Group — The Forage',
    location: 'Virtual',
    period: 'August 2024',
    highlights: [
      'Performed data analysis and options evaluation for rail alignments, summarising findings in a technical memorandum.',
      'Analysed stakeholder impacts to ensure project compliance with environmental and societal requirements.',
    ],
    icon: '🛤️',
    color: '#22d3ee',
    files: [{ url: './Internship/GHD.pdf', label: 'Consulting Certificate' }],
  },
];

export const projects = [
  // ── Product Design ──────────────────────────────
  {
    title: 'Industrial Redesign & DFM/DFA',
    subtitle: '3D Printer High-Volume Production',
    category: 'Product Design',
    description:
      'Redesigned 11 critical 3D printer components for high-volume production using CNC, injection moulding, PU casting, and sheet metal. Applied GD&T and AS1100 standards. Optimized assembly line layout using U-shaped cells and Takt time analysis for 10,000 units/year.',
    tags: ['DFM', 'CNC', 'GD&T', 'Lean'],
    gradient: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #6d28d9 100%)',
    icon: '🏭',
    award: false,
    bannerImage: './projects/industrial-redesign/Redesigned parts collage.png',
    images: [{ src: './projects/industrial-redesign/Redesigned parts collage.png', alt: 'Redesigned Parts Collage' }],
    files: [{ url: './projects/industrial-redesign/DMP_Assignment1.pdf', label: 'DMP Assignment Report' }],
  },
  {
    title: 'Pressure Vessel Integrity',
    subtitle: 'Viva Energy, Geelong',
    category: 'Product Design',
    description:
      'Conducted comprehensive structural integrity assessment of a vertical pressure vessel. Performed FEA to evaluate hoop and longitudinal stresses under seismic, wind, and hydrostatic loads. Ensured compliance with AS1210 and AS1170.',
    tags: ['FEA', 'AS1210', 'Structural'],
    gradient: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 50%, #be123c 100%)',
    icon: '⚙️',
    award: false,
    bannerImage: './projects/pressure-vessel/Pressure vessel.png',
    images: [
      { src: './projects/pressure-vessel/Pressure vessel.png', alt: 'Pressure Vessel Design' },
      { src: './projects/pressure-vessel/FEA_P_V.png', alt: 'FEA Analysis' }
    ],
    files: [
      { url: './projects/pressure-vessel/Solid_Report.pdf', label: 'Solid Mechanics Report' },
      { url: './projects/pressure-vessel/Pressure Vessel Drawing.pdf', label: 'Pressure Vessel Drawing' }
    ],
  },
  {
    title: 'Reverse Engineering — Actuators',
    subtitle: 'Medical Research Applications',
    category: 'Product Design',
    description:
      'Reverse-engineered a spinal tendon rig actuator (U-block) using SolidWorks and designed a custom bicycle frame in AutoCAD. Produced AS1100 compliant drawings and 3D printed components. Validated stress via FEA in Abaqus and ANSYS.',
    tags: ['SolidWorks', 'Abaqus', 'ANSYS', '3D Printing'],
    gradient: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 50%, #0891b2 100%)',
    icon: '🦴',
    award: false,
    bannerImage: './projects/reverse component from a spinal _rig/IMG_20250328_120804.jpg',
    images: [
      { src: './projects/reverse component from a spinal _rig/IMG_20250328_120804.jpg', alt: 'Physical Component' },
      { src: './projects/reverse component from a spinal _rig/half_size_5_1_5.png', alt: 'CAD Model' },
      { src: './projects/reverse component from a spinal _rig/Size8.png', alt: 'Size 8 Analysis' },
      { src: './projects/reverse component from a spinal _rig/Sze10.png', alt: 'Size 10 Analysis' }
    ],
    files: [
      { url: './projects/reverse component from a spinal _rig/Reverse Eng.pdf', label: 'Reverse Engineering Report' }
    ],
  },
  {
    title: 'Bicycle Frame Design & Analysis',
    subtitle: 'Custom Structural Design',
    category: 'Product Design',
    description:
      'Designed a custom bicycle frame in AutoCAD ensuring compliance with standard dimensional ergonomics. Validated structural integrity through extensive FEA under various loading conditions, confirming the design meets all safety factors.',
    tags: ['AutoCAD', 'FEA', 'Structural Analysis'],
    gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%)',
    icon: '🚲',
    award: false,
    bannerImage: './projects/Bicycle Frame/Isometric .png',
    images: [
      { src: './projects/Bicycle Frame/Isometric .png', alt: 'Isometric View' },
      { src: './projects/Bicycle Frame/FEA_Cycle.png', alt: 'FEA Simulation' },
      { src: './projects/Bicycle Frame/Top_S_Cycle.png', alt: 'Top Section' }
    ],
    files: [
      { url: './projects/Bicycle Frame/Design_and_analysis_of_a_bicycle_frame (1).pdf', label: 'Bicycle Frame Analysis' },
      { url: './projects/Bicycle Frame/2D.pdf', label: '2D Drawing' },
      { url: './projects/Bicycle Frame/2D_1.pdf', label: '2D Drawing 1' },
      { url: './projects/Bicycle Frame/Iso_Q2.pdf', label: 'Isometric View Q2' },
      { url: './projects/Bicycle Frame/Q3_1.pdf', label: 'FEA Results' }
    ],
  },
  {
    title: 'Bio-Environment Incubator',
    subtitle: 'Full Engineering Lifecycle',
    category: 'Product Design',
    description:
      'Managed the full engineering lifecycle from material selection to hardware assembly, sensor integration, and on-site installation. Developed validation protocols ensuring temperature/humidity stability. Delivered 100% operational reliability.',
    tags: ['Sensors', 'Validation', 'Hardware'],
    gradient: 'linear-gradient(135deg, #a3e635 0%, #84cc16 50%, #65a30d 100%)',
    icon: '🌱',
    award: false,
    bannerImage: './projects/bio-incubator/Chicken Incubator.png',
    images: [{ src: './projects/bio-incubator/Chicken Incubator.png', alt: 'Incubator Hardware' }],
  },
  // ── Control Systems ────────────────────────────
  {
    title: 'Advanced MIMO Control System',
    subtitle: 'Quanser AERO 2-DOF System',
    category: 'Control Systems',
    description:
      'Designed and implemented a MIMO controller with integral augmentation for precise pitch/yaw tracking. Developed linearized state-space representation and Luenberger observer, validated via MATLAB & Simulink (<2% steady-state error, <10s settling time).',
    tags: ['MATLAB', 'Simulink', 'Control Theory'],
    gradient: 'linear-gradient(135deg, #00f5ff 0%, #0ea5e9 50%, #2563eb 100%)',
    icon: '🎛️',
    award: false,
    bannerImage: './projects/mimo-control/Aero LQG.png',
    images: [
      { src: './projects/mimo-control/Aero LQG.png', alt: 'Aero LQG' },
      { src: './projects/mimo-control/Fixed robot link.png', alt: 'Fixed Robot Link' },
      { src: './projects/mimo-control/Flexible joint robot - tracking.png', alt: 'Flexible Joint Tracking' }
    ],
  },
  // ── AI Research ────────────────────────────────
  {
    title: 'Physics-Informed Neural Network AI',
    subtitle: 'Capstone — Merit Endeavour Award ⭐',
    category: 'AI Research',
    description:
      'Independently developed a physics-informed AI model to predict real gas behaviour (Hydrogen) under extreme conditions. Leveraged the Spartan Supercomputer (Linux) and Python to process complex thermodynamic datasets. Collaborated with Future Energy Exchange industry mentors.',
    tags: ['Python', 'AI / ML', 'HPC', 'Thermodynamics'],
    gradient: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
    icon: '🔬',
    award: true,
    bannerImage: './projects/physics-ai/Merit award.png',
    images: [{ src: './projects/physics-ai/Merit award.png', alt: 'Merit Award' }],
    files: [{ url: './projects/physics-ai/Poster PINN.pdf', label: 'Research Poster' }],
  },

  // ── Others ─────────────────────────────────────
  {
    title: 'Discrete-Event Simulation',
    subtitle: 'HEYTEA Optimisation — AnyLogic',
    category: 'Simulation & Optimisation',
    description:
      'Developed a high-fidelity simulation of a high-volume service environment using AnyLogic. Analysed customer arrival patterns with statistical distributions. Applied Lean Six Sigma to reduce wait times and optimise resource utilisation.',
    tags: ['AnyLogic', 'Lean Six Sigma', 'Simulation'],
    gradient: 'linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)',
    icon: '📈',
    award: false,
    bannerImage: './projects/discrete-simulation/Anylogic simulation.png',
    images: [
      { src: './projects/discrete-simulation/Anylogic simulation.png', alt: 'AnyLogic Simulation' },
      { src: './projects/discrete-simulation/Heytea, sensitivity.png', alt: 'Sensitivity Analysis' }
    ],
  },
  {
    title: 'FOG Mitigation & Systems Thinking',
    subtitle: 'SMEC Collaboration',
    category: 'Systems Engineering',
    description:
      'Collaborated with SMEC and a cross-functional team to address FOG buildup in commercial kitchen infrastructure. Developed an innovative behavioural marketing solution that proved more effective than technical filtration for long-term compliance.',
    tags: ['Systems Thinking', 'Cross-functional', 'Sustainability'],
    gradient: 'linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%)',
    icon: '🍳',
    award: false,
    bannerImage: './projects/FOG-SMEC/Research.png',
    images: [{ src: './projects/FOG-SMEC/Research.png', alt: 'Research Findings' }],
    files: [
      { url: './projects/FOG-SMEC/ConceptDiagram_Final_AJ3.pdf', label: 'Concept Diagram' },
      { url: './projects/FOG-SMEC/Final Report (1).docx', label: 'Final Report' }
    ],
  },
  {
    title: 'Advanced Materials Forensic Analysis',
    subtitle: 'CPFEM (DAMASK) Simulations',
    category: 'Materials Science',
    description:
      'Performed root-cause analysis of material failure modes (fracture and fatigue) using CPFEM simulations. Evaluated material suitability for high-stress environments and integrated findings into future design iterations.',
    tags: ['DAMASK', 'Fracture', 'Fatigue'],
    gradient: 'linear-gradient(135deg, #818cf8 0%, #6366f1 50%, #4f46e5 100%)',
    icon: '🔍',
    award: false,
    bannerImage: './projects/Advanced material forensic analysis/EBSD materials.png',
    images: [
      { src: './projects/Advanced material forensic analysis/EBSD materials.png', alt: 'EBSD Materials' },
      { src: './projects/Advanced material forensic analysis/Grain orientation.png', alt: 'Grain Orientation' }
    ],
  },
  {
    title: 'Statistical Quality Control',
    subtitle: 'Metrology & ML Prediction',
    category: 'AI Research',
    description:
      'Conducted MSA and calibration for precision instruments (LVDT, Comparators). Applied Machine Learning (Python/C++) to predict failure pressure in metallic pipelines from industrial datasets.',
    tags: ['ML', 'Python', 'Metrology', 'QC'],
    gradient: 'linear-gradient(135deg, #e879f9 0%, #d946ef 50%, #c026d3 100%)',
    icon: '📐',
    award: false,
    files: [
      { url: './projects/statistical-qc/Assembly_line.pdf', label: 'Assembly Line' },
      { url: './projects/statistical-qc/Design layout.pdf', label: 'Design Layout' },
      { url: './projects/statistical-qc/Total time estimate.pdf', label: 'Time Estimate' },
      { url: './projects/statistical-qc/Q4_part1.pdf', label: 'Analysis Part 1' }
    ],
  },
];

export const education = [
  {
    degree: "Master's in Mechanical Engineering",
    institution: 'The University of Melbourne',
    location: 'Victoria, Australia',
    period: 'Feb 2024 – Dec 2025',
    highlights: [
      'Recipient: Capstone Project Mechanical Engineering Merit Endeavour Award',
      'Advanced Control Systems, Advanced Solid Mechanics, Advanced Material Science',
      'Design & Manufacturing Practices, Manufacturing Automation & IT',
      'Industrial Simulation, Economic Analysis for Engineers',
      'Fluid Dynamics and Thermodynamics',
    ],
    color: '#00f5ff',
    files: [{ url: './education/Testamur_masters.pdf', label: 'Testamur' }],
  },
  {
    degree: "Bachelor's in Mechanical Engineering",
    institution: 'National Institute of Technology Calicut',
    location: 'Kerala, India',
    period: 'Jul 2019 – Apr 2023',
    highlights: [
      'Secured admission by competing against 1M+ candidates in JEE examination',
      'Developed ML model to predict failure pressure in metallic pipelines',
      'Researched CFRP-based preventive maintenance applications',
      'Engineering Optimisation Methods, CAD, Numerical Analysis',
      'System Modelling & Analysis, Management & Finance',
    ],
    color: '#a855f7',
    files: [{ url: './education/Bachelors certificate.pdf', label: 'Degree Certificate' }],
  },
];

export const certifications = [
  { name: 'Lean Six Sigma Green Belt (SSGI)', file: './certifications/SIX SIGMA.pdf' },
  { name: 'Machine Design (Coursera)', file: './certifications/machine design.pdf' },
  { name: 'Applications in Engineering Mechanics (Coursera)', file: './certifications/Applications in Engineering Mechanics.png' },
  { name: 'Learning SOLIDWORKS (Udemy)', file: './certifications/Solidworks.png' },
  { name: 'AI for Everyone (DeepLearning.AI)', file: './certifications/AI for everyone.png' },
  { name: 'Python Programming (U-Michigan)', file: './certifications/Python Programming.png' },
  { name: 'Business Analytics (LinkedIn)', file: './certifications/Business Analytics.png' },
  { name: 'Working with Children Check', file: './certifications/wwcc.jpg' },
];

export const memberships = [
  'Engineers Australia (EA)',
  'Mechanical Engineering Student Society (MESS)',
  'Students in Renewable Energy (SiRe)',
  'Box Hill Miniature Railway Society',
  'Graduate Student Council (GSC)',
];

export const volunteer = {
  role: 'President',
  organization: 'Bala-jana-sakyam (Student body)',
  period: 'Mar 2016 – Mar 2019',
  description:
    'Led a team of 100 student volunteers in organizing community well-being events including higher education awareness programs and food security initiatives.',
};
