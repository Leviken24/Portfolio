export interface Project {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  domain: string;
  category: 'cybersec' | 'ai-hacking' | 'robotics' | 'cloud' | 'iot';
  executiveSummary: string;
  problemStatement: string;
  technicalSolution: string;
  attackVectorOrSpec: string;
  architecturePoints: string[];
  toolsUsed: string[];
  metrics: { value: string; label: string }[];
  githubUrl: string;
  demoUrl?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string; // "Expert" | "Advanced" | "Specialist"
    description: string;
    tools: string[];
  }[];
}

export interface ServicePackage {
  id: string;
  title: string;
  tagline: string;
  deliverables: string[];
  timeline: string;
  scope: string;
}

export const PERSONAL_DOSSIER = {
  name: "H S SHREEJA",
  signature: "H S Shreeja",
  primaryTitle: "SECURITY RESEARCHER & CYBER-PHYSICAL ENGINEER",
  specializations: "Cyber Security ✦ AI Hacking ✦ Autonomous Robotics ✦ Cloud ✦ IoT",
  location: "Bangalore, India // Working Worldwide",
  availabilityStatus: "AVAILABLE FOR RESEARCH & HIGH-IMPACT COLLABORATIONS ✦",
  email: "leviken24@gmail.com",
  phone: "+91 8453445469",
  linkedin: "https://www.linkedin.com/in/hs-shreeja-668bb130a/",
  linkedinHandle: "hs-shreeja-668bb130a",
  github: "https://github.com/Leviken24",
  githubHandle: "Leviken24",
  executiveBio: "Specializing in the intersection of offensive cyber security, adversarial AI stress-testing, autonomous robotics kinematics, and hardened cloud-IoT infrastructure. Dedicated to diagnosing critical architectural vulnerabilities, reversing low-level binary protocols, and engineering proactive defense systems.",
  stats: [
    { value: "05", label: "Specialized Domains", note: "CyberSec, Robotics, Cloud, IoT, AI Hacking" },
    { value: "140+", label: "Vulnerabilities Cataloged", note: "Prompt injection vectors, CAN frames, IAM graphs" },
    { value: "98.4%", label: "Adversarial Detection", note: "Empirical precision in tensor perturbation tests" },
    { value: "24/7", label: "Research Dedication", note: "Zero-day defense & firmware reverse engineering" }
  ]
};

export const DOMAIN_SPECIALIZATIONS = [
  {
    id: "cybersec",
    num: "01",
    title: "Cyber Security & Threat Intel",
    tagline: "Offensive Penetration & Systemic Perimeter Defense",
    overview: "Conducting rigorous vulnerability assessments, binary decompilation, exploit payload synthesis, and enterprise network defense to neutralize sophisticated threat actors.",
    coreCompetencies: ["Network & Web App Pentesting", "Binary Reverse Engineering (Ghidra, IDA)", "Kernel Exploitation Analysis", "Zero-Trust Architecture Design"],
    deliverable: "Comprehensive Penetration Audits & Exploit PoCs"
  },
  {
    id: "ai-hacking",
    num: "02",
    title: "AI Hacking & Red Teaming",
    tagline: "Adversarial Machine Learning & LLM Vulnerability Auditing",
    overview: "Stress-testing frontier generative AI models and autonomous agent workflows against recursive prompt injections, token smuggling, jailbreaks, and training data poisoning.",
    coreCompetencies: ["Multi-Turn Prompt Injection Audits", "Adversarial Tensor Perturbations", "Model Weight Extraction Defenses", "Automated Guardrail Engineering"],
    deliverable: "AI Safety Benchmarks & Jailbreak Mitigation"
  },
  {
    id: "robotics",
    num: "03",
    title: "Autonomous Robotics",
    tagline: "ROS2, SLAM Kinematics & Embedded Micro-Architectures",
    overview: "Designing autonomous ground rovers and robotic manipulators using ROS2, visual odometry, LiDAR point-cloud processing, and real-time sensory fusion.",
    coreCompetencies: ["ROS2 & Gazebo Simulation", "LiDAR / Visual SLAM Mapping", "Sensor Fusion (EKF, IMU, GPS)", "Actuator Control & Microcontrollers"],
    deliverable: "Autonomous Navigation Systems & Telemetry"
  },
  {
    id: "cloud",
    num: "04",
    title: "Cloud Defense & DevSecOps",
    tagline: "Multi-Cloud Governance & Automated Hardening",
    overview: "Architecting hardened cloud boundaries across AWS and GCP, isolating containerized microservices in Kubernetes, and identifying transitive IAM privilege escalation paths.",
    coreCompetencies: ["AWS / GCP Security Architecture", "Kubernetes Hardening & eBPF", "Terraform Infrastructure-as-Code", "CI/CD Threat Scanning Pipelines"],
    deliverable: "Zero-Trust Cloud Blueprints & Policy Scanners"
  },
  {
    id: "iot",
    num: "05",
    title: "IoT & Hardware Pentesting",
    tagline: "Firmware Extraction & Automotive CAN Bus Auditing",
    overview: "Extracting proprietary device firmware via hardware debug ports (UART, JTAG, SPI), reverse-engineering micro-controller instructions, and auditing CAN bus vehicle telemetry.",
    coreCompetencies: ["Firmware Extraction & Emulation", "CAN Bus Telemetry Injection", "UART / JTAG Hardware Interfacing", "ESP32 & ARM Cortex Security"],
    deliverable: "Hardware Vulnerability Reports & ECU Telemetry"
  }
];

export const PROJECTS_DOSSIER: Project[] = [
  {
    id: "aegis-ai",
    code: "CASE STUDY // 01",
    title: "A.E.G.I.S — Neural Red-Teaming Engine",
    subtitle: "Automated Adversarial LLM Vulnerability Scanner & Jailbreak Defense Suite",
    domain: "AI HACKING / NEURAL SECURITY",
    category: "ai-hacking",
    executiveSummary: "An enterprise-grade red-teaming platform designed to stress-test large language models and autonomous AI agents against recursive prompt injections, token smuggling, and inference inversion exploits.",
    problemStatement: "Frontier LLM agents deployed in enterprise environments frequently fall prey to indirect prompt injections hidden within unstructured documents or retrieved context, leading to unauthorized tool execution and data exfiltration.",
    technicalSolution: "Developed a dynamic attack generator using gradient-guided token permutations combined with cosine-similarity distance tracking in vector embedding space to detect and intercept adversarial drift in real time.",
    attackVectorOrSpec: "Vector Space Evasion & Recursive Context Poisoning",
    architecturePoints: [
      "Dynamic prompt mutator generating 140+ targeted jailbreak permutations",
      "Embedding space distance anomaly detection using cosine thresholding",
      "Automated compliance scoring against MITRE ATLAS & OWASP GenAI Top 10",
      "Interactive red-team dashboard with real-time sandbox execution"
    ],
    toolsUsed: ["Python", "PyTorch", "FastAPI", "HuggingFace", "Docker", "TailwindCSS"],
    metrics: [
      { value: "98.4%", label: "Exploit Detection Rate" },
      { value: "140+", label: "Attack Permutations" },
      { value: "<12ms", label: "Latency Overhead" }
    ],
    githubUrl: "https://github.com/Leviken24"
  },
  {
    id: "can-sentinel",
    code: "CASE STUDY // 02",
    title: "CYBER-CAN — Automotive Telemetry Auditor",
    subtitle: "Hardware CAN Bus Injection Harness & ECU Diagnostics Security Probe",
    domain: "IOT & AUTOMOTIVE SECURITY",
    category: "iot",
    executiveSummary: "A combined hardware transceiver and telemetry analytics software platform that interfaces with physical OBD-II vehicle diagnostic ports to discover unauthenticated commands across electronic control units.",
    problemStatement: "Modern vehicular CAN networks lack native cryptographic authentication, allowing compromised periphery nodes to broadcast rogue arbitration IDs that override critical powertrain or braking subsystems.",
    technicalSolution: "Engineered an isolated ESP32 hardware harness coupled with a differential frame analyzer that reconstructs packet frequency patterns, identifies frame anomalies, and extracts micro-controller firmware.",
    attackVectorOrSpec: "Arbitrary Arbitration ID Frame Injection & Diagnostic Override",
    architecturePoints: [
      "Custom ESP32 hardware transceiver with isolated MCP2515 CAN controller",
      "Real-time packet sniffing and visual bitrate frequency analyzer",
      "Automated replay attack simulator with CRC checksum re-calculation",
      "Firmware flash dumper via hardware test points (UART/JTAG)"
    ],
    toolsUsed: ["C++", "ESP32", "SocketCAN", "Ghidra", "Python", "Wireshark"],
    metrics: [
      { value: "500 kbps", label: "Zero-Packet-Drop Throughput" },
      { value: "40+", label: "ECU PIDs Cataloged" },
      { value: "100%", label: "Physical Signal Isolation" }
    ],
    githubUrl: "https://github.com/Leviken24"
  },
  {
    id: "sentinel-cloud",
    code: "CASE STUDY // 03",
    title: "ZERO-VOID — Multi-Cloud Threat Sentinel",
    subtitle: "Automated IAM Graph Traversal & Decoy Honeytoken Infrastructure Engine",
    domain: "CLOUD DEFENSE / DEVSECOPS",
    category: "cloud",
    executiveSummary: "An infrastructure-as-code security scanner and automated honeynet engine that graphs transitive privilege escalation paths and enforces zero-trust boundaries across AWS and GCP environments.",
    problemStatement: "Complex cloud infrastructures often accumulate multi-hop IAM permission paths where an unprivileged service account can assume a cascade of roles to achieve full administrative control.",
    technicalSolution: "Implemented a directed-graph traversal algorithm that models all IAM relationships and deploys dynamic canary honeytokens to catch unauthorized credential access within seconds.",
    attackVectorOrSpec: "Transitive IAM Role Chaining & Unauthenticated Storage Enumeration",
    architecturePoints: [
      "Directed graph database modeling IAM permissions and assume-role chains",
      "Decoy honeytoken generator with automated webhook alerting",
      "Kubernetes admission controller enforcing read-only root filesystems",
      "Prometheus & Grafana visualization cluster for cloud event metrics"
    ],
    toolsUsed: ["AWS Security Hub", "Kubernetes", "Terraform", "Go", "Docker", "Prometheus"],
    metrics: [
      { value: "<2.0s", label: "Honeytoken Alert Latency" },
      { value: "100%", label: "IaC Policy Enforcement" },
      { value: "0", label: "False-Positive Escalations" }
    ],
    githubUrl: "https://github.com/Leviken24"
  },
  {
    id: "neuro-rover",
    code: "CASE STUDY // 04",
    title: "NEURO-ROVER — Autonomous Edge Defense Robot",
    subtitle: "LiDAR SLAM Ground Rover with Hardened Sensor Telemetry & Visual Odometry",
    domain: "AUTONOMOUS ROBOTICS",
    category: "robotics",
    executiveSummary: "A compact autonomous ground vehicle equipped with sensory fusion (2D LiDAR, Depth Camera, 9-DOF IMU) capable of navigating GPS-denied environments while protecting onboard telemetry from sensor spoofing.",
    problemStatement: "Autonomous robotic rovers operating in contested environments are vulnerable to physical sensor spoofing (laser blinding or acoustic IMU resonance attacks) that corrupt autonomous pathfinding.",
    technicalSolution: "Designed a dual Extended Kalman Filter (EKF) state estimator combined with hardware-secured cryptographic boot validation to reject anomalous sensor telemetry and maintain continuous SLAM navigation.",
    attackVectorOrSpec: "Adversarial Acoustic & Optical Sensor Jamming Defense",
    architecturePoints: [
      "NVIDIA Jetson Nano handling edge neural inferencing and ROS2 Nav2 stack",
      "Hardware cryptographic module (ATECC608A) for secure node boot validation",
      "Dual EKF combining wheel odometry, visual feature tracking, and IMU data",
      "Fail-safe dynamic watchdog circuit resetting actuators on packet corruption"
    ],
    toolsUsed: ["ROS2", "Python", "OpenCV", "Jetson Nano", "C++", "FreeRTOS"],
    metrics: [
      { value: "<5cm", label: "Localization Precision" },
      { value: "15 FPS", label: "Edge Tensor Processing" },
      { value: "100%", label: "Tamper-Resistant Boot" }
    ],
    githubUrl: "https://github.com/Leviken24"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Cyber Security & Reverse Engineering",
    description: "Offensive exploitation, network auditing, protocol reverse engineering, and threat modeling.",
    skills: [
      { name: "Penetration Testing & Burp Suite", level: "Expert", description: "OWASP Top 10, automated fuzzing, manual exploit crafting", tools: ["Burp Suite Pro", "Nmap", "SQLmap"] },
      { name: "Binary Decompilation & Reverse Eng", level: "Advanced", description: "Disassembling x86/ARM executables, control-flow graphing", tools: ["Ghidra", "IDA Pro", "GDB"] },
      { name: "Network Forensics & Packet Inspection", level: "Expert", description: "Deep protocol telemetry analysis, payload decoding", tools: ["Wireshark", "Zeek", "TCPDump"] },
      { name: "Applied Cryptography & PKI", level: "Advanced", description: "Zero-knowledge proofs, asymmetric key lifecycle", tools: ["OpenSSL", "KMS", "HashiCorp Vault"] }
    ]
  },
  {
    title: "AI Hacking & Machine Learning",
    description: "Red-teaming generative AI models, adversarial attacks, and safety guardrails.",
    skills: [
      { name: "Adversarial Machine Learning", level: "Expert", description: "Gradient-guided perturbation attacks, evasion techniques", tools: ["PyTorch", "CleverHans", "Foolbox"] },
      { name: "LLM Red Teaming & Jailbreaks", level: "Expert", description: "Multi-turn prompt injection, cognitive deception vectors", tools: ["LangChain", "Llama Guard", "Transformers"] },
      { name: "Neural Network Architectures", level: "Advanced", description: "Computer vision, transformer embeddings, fine-tuning", tools: ["TensorFlow", "HuggingFace", "NumPy"] },
      { name: "AI Safety & Guardrail Engineering", level: "Advanced", description: "Semantic boundary validation and input filtering", tools: ["NeMo Guardrails", "Semantic Router"] }
    ]
  },
  {
    title: "Autonomous Robotics & Embedded",
    description: "ROS2 navigation stacks, kinematics, microcontroller firmware, and sensor fusion.",
    skills: [
      { name: "ROS2 & Nav2 Navigation Stack", level: "Advanced", description: "Lifecycle nodes, dynamic path planners, transform trees", tools: ["ROS2 Humble", "Gazebo", "RViz"] },
      { name: "Computer Vision & Visual SLAM", level: "Advanced", description: "Real-time edge object detection, point cloud alignment", tools: ["OpenCV", "PCL", "YOLOv8"] },
      { name: "Microcontrollers & Embedded C/C++", level: "Expert", description: "Real-time scheduling, hardware interrupts, timers", tools: ["ESP32", "STM32", "FreeRTOS"] },
      { name: "Hardware Interfacing & Debugging", level: "Advanced", description: "Bus sniffing, logic analysis, voltage glitching", tools: ["UART", "JTAG", "Saleae Logic"] }
    ]
  },
  {
    title: "Cloud Infrastructure & DevSecOps",
    description: "Hardening cloud perimeters, container isolation, and policy automation.",
    skills: [
      { name: "AWS & GCP Security Architecture", level: "Advanced", description: "IAM least privilege, VPC peering, Security Hub, KMS", tools: ["AWS", "Google Cloud", "CloudTrail"] },
      { name: "Kubernetes & Container Hardening", level: "Expert", description: "Non-root isolation, AppArmor profiles, network policies", tools: ["Docker", "Kubernetes", "eBPF / Cilium"] },
      { name: "Infrastructure-as-Code & Scanning", level: "Advanced", description: "Declarative security templates, static IaC audits", tools: ["Terraform", "Trivy", "Checkov"] },
      { name: "CI/CD Pipeline Security Automation", level: "Advanced", description: "Automated vulnerability gating, secret detection", tools: ["GitHub Actions", "SonarQube"] }
    ]
  },
  {
    title: "IoT & Hardware Pentesting",
    description: "Firmware extraction, binary reverse engineering, CAN bus diagnostics, and hardware debugging.",
    skills: [
      { name: "Firmware Extraction & Emulation", level: "Expert", description: "Flash memory dumping, entropy analysis, QEMU binary emulation", tools: ["Binwalk", "Ghidra", "QEMU"] },
      { name: "CAN Bus Vehicle Telemetry", level: "Advanced", description: "Differential frame sniffing, OBD-II injection, ECU command bypass", tools: ["SocketCAN", "Wireshark", "C++"] },
      { name: "Hardware Probing (UART / JTAG / SPI)", level: "Advanced", description: "Logic analysis, serial console breakout, glitching", tools: ["Saleae Logic", "Bus Pirate", "OpenOCD"] },
      { name: "Microcontroller Security (ESP32 / ARM)", level: "Expert", description: "Secure boot validation, flash encryption, memory protection", tools: ["ESP-IDF", "FreeRTOS", "Keil"] }
    ]
  }
];

export const SERVICE_OFFERINGS: ServicePackage[] = [
  {
    id: "audit",
    title: "Offensive Penetration & Red-Teaming",
    tagline: "Uncovering Systemic Attack Vectors Before Adversaries Do",
    deliverables: [
      "Full-scope web application & API penetration testing",
      "Network perimeter & Active Directory vulnerability scanning",
      "Detailed proof-of-concept exploit demonstrations",
      "Prioritized remediation roadmap with code-level fixes"
    ],
    timeline: "1 - 3 Weeks",
    scope: "Enterprise Networks, SaaS & Web Apps"
  },
  {
    id: "ai-safety",
    title: "Adversarial AI Stress-Testing",
    tagline: "Fortifying Frontier Models & Agents Against Exploitation",
    deliverables: [
      "Recursive prompt injection & jailbreak vulnerability audit",
      "Tool-calling agent sandbox escape stress testing",
      "Training data extraction & embedding inversion defense",
      "Custom semantic guardrail architecture implementation"
    ],
    timeline: "2 - 4 Weeks",
    scope: "LLM Applications, AI Agents & Neural Models"
  },
  {
    id: "hardware",
    title: "Hardware, IoT & CAN Bus Security",
    tagline: "Dissecting Connected Devices from Silicon to Telemetry",
    deliverables: [
      "Physical debug port exploitation (UART, JTAG, SPI)",
      "Firmware extraction, binary analysis, and key recovery",
      "Automotive CAN bus frame reverse engineering & injection",
      "Hardware tamper-resistance & secure boot validation"
    ],
    timeline: "2 - 5 Weeks",
    scope: "Connected IoT Devices, Automotive ECUs, Medical Hardware"
  },
  {
    id: "cloud-hardening",
    title: "Zero-Trust Cloud & DevSecOps",
    tagline: "Hardening Distributed Multi-Cloud Deployments",
    deliverables: [
      "Transitive IAM privilege escalation graph analysis",
      "Kubernetes cluster runtime hardening & eBPF inspection",
      "Automated infrastructure-as-code vulnerability gating",
      "Decoy honeynet & tripwire canary deployment"
    ],
    timeline: "1 - 3 Weeks",
    scope: "AWS, GCP, Kubernetes Clusters & CI/CD Pipelines"
  }
];
