export const personalInfo = {
  name: "SOHAEL SHAIK",
  subtitle: "Electronics & Embedded Systems Enthusiast",
  description: "Building practical electronic systems with Arduino, ESP32, sensors and embedded control logic.",
  education: {
    degree: "B.Tech in Electronics and Communication Engineering",
    university: "SRM University AP",
    year: "2023–2027",
    cgpa: "8.15/10",
  },
  email: "sohaelshaik@example.com",
  linkedin: "https://linkedin.com/in/sohaelshaik",
  github: "https://github.com/sohaelshaik",
  leetcode: "https://leetcode.com/sohaelshaik",
  resumeUrl: "",
  portfolioDriveUrl: "",
};

export const heroBadges = [
  "Arduino",
  "ESP32",
  "IoT",
  "Embedded Systems",
  "Sensors",
];

export const featuredProject = {
  id: "automatic-braking-system",
  title: "Automatic Braking System",
  shortDescription:
    "Developed a prototype automatic braking system using sensor input to enhance vehicle safety. Integrated distance sensing to detect obstacles and trigger a real-time braking response.",
  fullDescription:
    "Developed a prototype automatic braking system using sensor input to enhance vehicle safety. Integrated distance sensing to detect obstacles and trigger a real-time braking response. Implemented control logic to simulate collision avoidance and validated system performance in a laboratory environment.",
  problem: "Vehicle collisions due to delayed human reaction times and blind spots.",
  approach:
    "Designed a sensor-based detection system that continuously monitors the forward path. When an obstacle is detected within a critical distance threshold, the system automatically triggers a braking response faster than human reaction time.",
  technologies: [
    "Arduino",
    "ESP32",
    "Sensors",
    "Distance Detection",
    "Control Logic",
    "Electronics",
    "Prototype",
  ],
  myContribution:
    "Built the complete hardware prototype, implemented sensor interfacing and control logic, validated system performance in lab environment.",
  links: {
    github: null,
  },
};

export const projects = [
  {
    id: "driver-fatigue-detection",
    title: "Driver Fatigue Detection System",
    shortDescription:
      "Developed a Driver Fatigue Detection System to identify signs of driver drowsiness and improve road safety. Implemented real-time monitoring and fatigue detection logic.",
    fullDescription:
      "Developed a Driver Fatigue Detection System to identify signs of driver drowsiness and improve road safety. Implemented real-time monitoring and fatigue detection logic to analyze driver alertness continuously. Integrated an automated alert mechanism to notify drivers and help prevent fatigue-related accidents.",
    problem: "Fatigue-related accidents caused by driver drowsiness and loss of alertness.",
    approach:
      "Implemented continuous real-time monitoring of driver state with automated alert mechanism to notify drivers when fatigue signs are detected.",
    technologies: [
      "Embedded Systems",
      "Real-time Monitoring",
      "Fatigue Detection",
      "Alert System",
      "IoT",
      "Sensors",
    ],
    myContribution:
      "Designed and implemented the detection logic, integrated sensors, and built the alert mechanism.",
    links: {
      github: null,
    },
  },
  {
    id: "online-electrical-simulator",
    title: "Online Electrical Simulator",
    shortDescription:
      "Developed an online electrical simulation platform to visualize and analyze basic circuit behavior. Contributed primarily to backend development.",
    fullDescription:
      "Developed an online electrical simulation platform as part of a team to visualize and analyze basic circuit behavior. Contributed primarily to backend development by implementing core logic and managing application flow. Collaborated with team members to integrate frontend and backend components.",
    problem: "Need for accessible circuit simulation tool for learning and analysis.",
    approach:
      "Built backend logic for circuit simulation engine, implemented core analysis algorithms, and managed application state.",
    technologies: [
      "Electrical Simulation",
      "Circuit Analysis",
      "Web Development",
      "Backend Logic",
    ],
    myContribution:
      "Implemented core backend logic and simulation algorithms, managed application flow, collaborated on frontend integration.",
    links: {
      github: null,
    },
  },
];

export const buildProcess = [
  {
    step: "01",
    title: "IDEA",
    description: "Identify real-world problem and define system requirements",
    icon: "Lightbulb",
  },
  {
    step: "02",
    title: "CIRCUIT DESIGN",
    description: "Design schematics, select components, plan power and signal routing",
    icon: "Cpu",
  },
  {
    step: "03",
    title: "PROTOTYPE",
    description: "Assemble hardware on breadboard/PCB, wire sensors and actuators",
    icon: "Box",
  },
  {
    step: "04",
    title: "PROGRAM",
    description: "Write embedded firmware, implement control logic and sensor drivers",
    icon: "Code",
  },
  {
    step: "05",
    title: "TEST",
    description: "Validate sensor readings, verify timing, debug edge cases",
    icon: "CheckCircle",
  },
  {
    step: "06",
    title: "WORKING MODEL",
    description: "Final integration, demonstrate complete system operation",
    icon: "Zap",
  },
];

export const skills = {
  embedded: [
    { name: "Arduino", level: 85 },
    { name: "ESP32", level: 80 },
    { name: "IoT", level: 75 },
    { name: "Embedded Systems", level: 78 },
  ],
  electronics: [
    { name: "Digital Electronics", level: 82 },
    { name: "Basic Circuit Design", level: 78 },
    { name: "Sensor Interfacing", level: 80 },
  ],
  programming: [
    { name: "Java", level: 75 },
    { name: "SQL", level: 70 },
  ],
  tools: [
    { name: "VS Code", level: 85 },
    { name: "GitHub", level: 80 },
    { name: "Google Colab", level: 75 },
  ],
  ml: [
    { name: "Machine Learning — Basics", level: 65 },
  ],
};