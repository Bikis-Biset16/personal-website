import type { SiteConfig, Skill, Project, Experience } from "@/types";

export const siteConfig: SiteConfig = {
  meta: {
    title: "Bikis | Software Developer & AI Engineer",
    description:
      "Personal portfolio of Bikis — software engineer specializing in full-stack development with React, Next.js, and Python.",
    author: "Bikis",
    url: "https://yourdomain.com",
  
  },
  profile: {
    name: "Bikis Biset",
    title: "Software Developer | AI Engineer | Data Analyst | IT Support Specialist",
    tagline: "Building elegant solutions with React, Next.js & Python",
    location: "Addis Ababa, Ethiopia",
    email: "bikisbiset@gmail.com",
    resumeUrl: "/resume.pdf",
    avatar: "/profile.jpg",
  },
  social: {
    github: "https://github.com/Bikis-Biset16",
    linkedin: "https://linkedin.com/in/bikis-biset",
    twitter: "https://twitter.com/BikisBiset27",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  sections: {
    hero: true,
    about: true,
    skills: true,
    projects: true,
    experience: true,
    contact: true,
  },
  theme: {
    primaryColor: "brand",
    darkMode: true,
  },
};

export const skills: Skill[] = [
  // Languages
  { name: "Python", category: "language", level: 5 },
  { name: "SQL", category: "language", level: 4 },

  // AI & Data Frameworks / Libraries
  { name: "Scikit-Learn", category: "framework", level: 4 },
  { name: "Pandas", category: "framework", level: 5 },
  { name: "FastAPI", category: "framework", level: 4 },
  { name: "Flask", category: "framework", level: 4 },
  { name: "Dash", category: "framework", level: 4 },

  // Enterprise Systems & Network Tools
  { name: "Active Directory (AD DS)", category: "tool", level: 5 },
  { name: "Windows Server", category: "tool", level: 5 },
  { name: "Linux (Ubuntu/Kali)", category: "tool", level: 4 },
  { name: "Wireshark / Nmap", category: "tool", level: 4 },

  // Development & Data Tools
  { name: "Git", category: "tool", level: 5 },
  { name: "BeautifulSoup", category: "tool", level: 5 }
];
export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Framework",
    description:
      "A customizable personal website framework built with Next.js and FastAPI.",
    longDescription:
      "Full-stack portfolio template with JSON-driven content, dark mode, responsive design, and a Python API backend for contact forms and dynamic content.",
    tags: ["Next.js", "FastAPI", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://yourdomain.com",
    repoUrl: "https://github.com/yourusername/personal-website",
    featured: true,
  },
  {
    id: "2",
    title: "Task Automation API",
    description:
      "RESTful API for workflow automation with Python and FastAPI.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/yourusername/task-api",
    featured: true,
  },
  {
    id: "3",
    title: "Dashboard UI",
    description:
      "Real-time analytics dashboard with React and WebSocket integration.",
    tags: ["React", "TypeScript", "WebSockets", "Chart.js"],
    liveUrl: "https://dashboard.yourdomain.com",
    featured: false,
  },
];


export const experience: Experience[] = [
  {
    id: "1",
    company: "Ministry of Revenues",
    role: "IT Support Officer & Developer",
    location: "Addis Ababa, Ethiopia",
    startDate: "April 2024",
    endDate: "Present",
    description: [
      "Deployed and optimized Active Directory Domain Services (AD DS) infrastructure and managed Group Policy Objects (GPOs) across enterprise systems.",
      "Developed custom Python automation scripts and data extraction pipelines to streamline internal data workflows.",
      "Managed Windows Server environments, network configuration, and enterprise security auditing using diagnostic tools.",
      "Provided high-level IT support, user account management, and system troubleshooting for head office infrastructure.",
    ],
    technologies: [
      "Active Directory",
      "Windows Server",
      "Python",
      "FastAPI",
      "Pandas",
      "Linux",
      "Nmap/Wireshark",
    ],
  },
  {
    id: "2",
    company: "Private Academy",
    role: "ICT Instructor",
    location: "Addis Ababa, Ethiopia",
    startDate: "Sep 2022",
    endDate: "Apr 2024",
    description: [
      "Delivered comprehensive ICT instruction covering fundamental computer science concepts, programming logic, and software applications.",
      "Designed curriculum modules and practical hands-on lab exercises for students across multiple technical proficiency levels.",
      "Maintained lab computer systems, local area networks (LAN), and software configurations to ensure reliable learning environments.",
    ],
    technologies: [
      "Python",
      "Computer Networking",
      "System Administration",
      "Windows OS",
      "Educational Technology",
    ],
  },
];
export const aboutText = {
  intro:
    "Versatile Computer Scientist and AI Engineer specializing in data-driven systems, software development, and enterprise IT infrastructure. Passionate about bridging the gap between robust systems administration, intelligent data engineering, and scalable software solutions.",
  highlights: [
    "3+ years of professional development experience",
    "Python (Flask, FastAPI, Dash), Web Scraping & Data Extraction, RESTful APIs, Git.",
    "Strong focus Enterprise Infrastructure & Security",
    "Pipeline Automation, Data Wrangling, Pandas, SQL, Multiclass Classification.",
    "Natural Language Processing (NLP), Scikit-Learn, Predictive Modeling, Word2Vec, Model Deployment."
  ],
};
