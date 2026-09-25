export interface Project {
  id: string;
  seasonEpisode: string;
  matchScore: string;
  title: string;
  tagline: string;
  fullDescription: string;
  isTeamProject: boolean;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  keyFeatures: string[];
  architectureDetails: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  bulletPoints: string[];
  skills: string[];
}

export interface SkillCategory {
  number: string;
  title: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Eswar Veera Vasanth Kumar Devisetty",
    nickname: "Eswar",
    headline: "Full-Stack Developer • AI Systems Engineer",
    subHeadline: "Java Developer & AI Engineering Specialist",
    shortBio: "Building production-oriented intelligent systems across LLM workflows, computer vision, and low-level backend architectures. Focusing on performance, observability, and resilient distributed execution.",
    location: "Chilakaluripeta, Palnadu, AP, India",
    currentRole: "Java Developer & AI Engineering Specialist",
    education: {
      degree: "B.Tech in Computer Science Engineering (Artificial Intelligence)",
      institution: "Narasaraopeta Engineering College",
      batch: "Class of 2022–2026",
      gpa: "CGPA: 7.0 / 10.0",
    },
    principles: [
      "Understand the problem before selecting the technology.",
      "Design systems that evolve without becoming fragile.",
      "Prefer observable systems over mysterious code.",
      "Embrace scalability over short-term fixes.",
    ],
    socials: {
      github: "https://github.com/Eswar-2629",
      linkedin: "https://www.linkedin.com/in/eswar-veera-vasanth-kumar-devisetty-a6b5b7386/",
      email: "eswarvasanth9@gmail.com",
    },
    statusBadge: "DEEP WORK • IN THE ZONE",
    streamingBannerText: [
      "STREAMING WORLDWIDE",
      "CLASSCAST DIGITAL CLASSROOM",
      "DEPENDENCY GUARDIAN SUPPLY CHAIN SECURITY",
      "CYBERTRACE DIGITAL FORENSICS AI",
      "CYBERSECURITY LOG INTELLIGENCE DASHBOARD",
      "SMART CAMPUS COLLABORATION",
      "LLM WORKFLOW ORCHESTRATOR",
      "JAVA & AI SYSTEMS ARCHITECT",
    ],
  },

  skillCategories: [
    {
      number: "01",
      title: "Languages",
      skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "C++"],
    },
    {
      number: "02",
      title: "Frontend",
      skills: ["React 19", "Next.js 14", "Tailwind CSS", "Framer Motion", "HTML5 / CSS3", "Vite"],
    },
    {
      number: "03",
      title: "Backend",
      skills: ["FastAPI", "Spring Boot (Java)", "Node.js", "Express", "WebSockets", "REST APIs"],
    },
    {
      number: "04",
      title: "Artificial Intelligence (AI)",
      skills: ["PyTorch", "OpenCV", "LLMs", "RAG Pipelines", "Computer Vision", "Neural Networks"],
    },
    {
      number: "05",
      title: "Data & DBs",
      skills: ["PostgreSQL", "Supabase", "Redis", "MongoDB", "MySQL", "Prisma"],
    },
    {
      number: "06",
      title: "Infra & Tooling",
      skills: ["Docker", "Git", "Linux", "CI/CD", "GitHub Actions", "Maven"],
    },
    {
      number: "07",
      title: "Engineering & Growth",
      skills: ["System Observability", "API Telemetry", "Technical SEO", "Performance Optimization", "Code Quality"],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "classcast",
      seasonEpisode: "S01 E01",
      matchScore: "99% MATCH",
      title: "ClassCast Digital Classroom",
      tagline: "Real-time interactive digital classroom and screen sharing broadcasting platform.",
      fullDescription: "ClassCast is an ultra-low-latency real-time digital classroom platform that enables seamless live interactive lectures, synchronized whiteboard drawing, student attendance tracking, and instant broadcast telemetry.",
      isTeamProject: false,
      tags: ["Java", "Flutter", "WebSockets", "WebRTC", "PostgreSQL", "Real-Time Telemetry"],
      githubUrl: "https://github.com/Eswar-2629/ClassCast",
      keyFeatures: [
        "Sub-second WebSockets & WebRTC streaming for multi-user classroom synchronization.",
        "Interactive canvas drawing board with multi-device touch support.",
        "Automated attendance tracking and live active participant ping telemetry.",
        "Robust Java backend handling concurrent high-throughput session state.",
      ],
      architectureDetails: "Built using a high-concurrency Java backend engine communicating over WebSockets to client viewports, backed by PostgreSQL for state persistence and low-latency buffer queues.",
    },
    {
      id: "dependency-guardian",
      seasonEpisode: "S01 E02",
      matchScore: "98% MATCH",
      title: "Dependency Guardian",
      tagline: "Software supply chain risk and dependency vulnerability analyzer.",
      fullDescription: "Dependency Guardian automates software supply chain risk audits by parsing project manifests, analyzing transitive dependency trees, checking known vulnerability databases (CVEs), and calculating health risk scores.",
      isTeamProject: false,
      tags: ["Python", "FastAPI", "Security AST", "CVE API", "Docker", "CLI Tool"],
      githubUrl: "https://github.com/Eswar-2629/Dependency-Guardian-Software-Supply-Chain-Risk-Analyzer",
      keyFeatures: [
        "Deep AST & manifest parser supporting Maven (Java), NPM, and PyPI dependencies.",
        "Real-time CVE threat database lookups and risk scoring heuristics.",
        "Automated pull-request security reports and lockfile drift warnings.",
        "Interactive web dashboard and CLI interface for automated CI/CD integration.",
      ],
      architectureDetails: "Features a modular Python engine with async HTTP connections to vulnerability registries, generating graph visualizations of deep transitive dependency chains.",
    },
    {
      id: "cybertrace",
      seasonEpisode: "S01 E03",
      matchScore: "97% MATCH",
      title: "CyberTrace Forensics AI",
      tagline: "AI-assisted digital forensics timeline analyzer and incident reconstruction engine.",
      fullDescription: "CyberTrace harnesses Natural Language Processing and Machine Learning to process heterogeneous system logs, extract forensic evidence artifacts, reconstruct timeline sequences, and pinpoint cyber attack entry vectors.",
      isTeamProject: true,
      tags: ["Python", "PyTorch", "NLP", "FastAPI", "React", "Digital Forensics"],
      githubUrl: "https://github.com/Eswar-2629/CyberTrace-AI-Assisted-Digital-Forensics-Timeline-Analyzer",
      keyFeatures: [
        "Unsupervised anomaly detection across syslog, auth logs, and network trace files.",
        "Natural language log querying allowing investigators to ask questions about attack timeline.",
        "Interactive incident timeline visualization with threat confidence heatmaps.",
        "Exportable forensic dispatch report generation for incident response teams.",
      ],
      architectureDetails: "Combines fine-tuned PyTorch transformers for log anomaly classification with an interactive React timeline viewer and FastAPI REST backend.",
    },
    {
      id: "cybersecurity-log-dashboard",
      seasonEpisode: "S01 E04",
      matchScore: "96% MATCH",
      title: "Log Intelligence Dashboard",
      tagline: "Real-time SIEM log analytics dashboard with live threat telemetry visualization.",
      fullDescription: "A high-performance security monitoring interface providing live stream processing of syslog events, IP geolocation mapping, alert threshold triggers, and real-time incident severity stats.",
      isTeamProject: false,
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "Chart.js", "Redis"],
      githubUrl: "https://github.com/Eswar-2629/Cybersecurity-Log-Intelligence-Dashboard",
      keyFeatures: [
        "Live WebSocket stream handling 10,000+ log events per minute with zero lag.",
        "Interactive threat map and chart breakdowns by protocol, IP, and threat level.",
        "Filterable log inspection table with fuzzy search and severity threshold alerts.",
        "Cyberpunk dark UI with customizable alert widgets and dark/neon aesthetics.",
      ],
      architectureDetails: "Designed with Next.js App Router, Tailwind CSS, Redis pub/sub for log event streaming, and custom reactive charts.",
    },
    {
      id: "smart-campus",
      seasonEpisode: "S01 E05",
      matchScore: "95% MATCH",
      title: "Smart Campus Digital Classroom",
      tagline: "Integrated campus management and academic collaboration ecosystem.",
      fullDescription: "Smart Campus unifies academic course scheduling, assignment submissions, digital attendance, and student-teacher communication into a single secure web platform.",
      isTeamProject: true,
      tags: ["Java", "Spring Boot", "PostgreSQL", "React", "REST APIs", "Tailwind CSS"],
      githubUrl: "https://github.com/Eswar-2629/Smart-Campus-Digital-Classroom",
      keyFeatures: [
        "Role-based access control (RBAC) for Students, Faculty, and Administrators.",
        "Automated attendance percentage tracking and low-attendance alert notifications.",
        "Course document sharing, assignment deadline reminders, and grading portals.",
        "Scalable Java Spring Boot REST backend with JWT authentication.",
      ],
      architectureDetails: "Architected with a Spring Boot backend, PostgreSQL database, and modern React single-page application frontend.",
    },
    {
      id: "llm-orchestrator",
      seasonEpisode: "S01 E06",
      matchScore: "99% MATCH",
      title: "LLM Agent DAG Orchestrator",
      tagline: "Visual multi-agent workflow orchestration engine for LLM reasoning chains.",
      fullDescription: "A visual DAG execution framework for designing, executing, and observing complex multi-step AI agent workflows with parallel execution branches and fallback retry handlers.",
      isTeamProject: false,
      tags: ["Python", "FastAPI", "React", "LangChain", "RAG", "WebSockets"],
      githubUrl: "https://github.com/Eswar-2629",
      keyFeatures: [
        "Topological DAG validation preventing circular agent dependencies.",
        "Real-time node-by-node execution state streaming over WebSockets.",
        "Built-in token consumption telemetry, prompt caching, and cost estimators.",
        "Custom tool integration layer supporting search, code execution, and database lookups.",
      ],
      architectureDetails: "Engineered with FastAPI async worker queues, WebSocket streaming, and a node-based graph editor in React.",
    },
  ] as Project[],

  experience: [
    {
      id: "exp-1",
      role: "Java Developer & AI Systems Engineer",
      company: "Independent / Project Engineering Scope",
      duration: "2024 – Present",
      description: "Architecting high-throughput backend services, WebSockets telemetry pipelines, and applied AI log analysis systems.",
      bulletPoints: [
        "Engineered Java & Spring Boot backend services with sub-second API latency and robust database query optimizations.",
        "Developed machine learning log threat classifiers and automated dependency vulnerability security scanners.",
        "Built real-time interactive React & Next.js user interfaces with custom Cyberpunk and dark theme visual systems.",
      ],
      skills: ["Java", "Python", "FastAPI", "Next.js", "WebSockets", "PyTorch", "PostgreSQL"],
    },
    {
      id: "exp-2",
      role: "AI & Software Engineering Specialist",
      company: "Narasaraopeta Engineering College",
      duration: "2022 – 2026",
      description: "Specialized in Artificial Intelligence, Computer Vision, software security, and distributed computing projects.",
      bulletPoints: [
        "Led team development for Smart Campus Digital Classroom and CyberTrace Digital Forensics AI tools.",
        "Maintained high academic standing in core CS & AI coursework including Data Structures, Algorithms, DBMS, and Neural Networks.",
        "Published open-source security and campus productivity utilities on GitHub.",
      ],
      skills: ["Java", "C++", "Python", "SQL", "OpenCV", "Algorithms", "System Design"],
    },
  ] as ExperienceItem[],
};
