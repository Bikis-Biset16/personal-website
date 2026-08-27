export interface SiteConfig {
  meta: {
    title: string;
    description: string;
    author: string;
    url: string;
    ogImage?: string;
  };
  profile: {
    name: string;
    title: string;
    tagline: string;
    avatar?: string;
    location: string;
    email: string;
    resumeUrl?: string;
  };
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    devto?: string;
    website?: string;
  };
  navigation: { label: string; href: string }[];
  sections: {
    hero: boolean;
    about: boolean;
    skills: boolean;
    projects: boolean;
    experience: boolean;
    contact: boolean;
  };
  theme: {
    primaryColor: "brand" | "emerald" | "violet" | "rose" | "amber";
    darkMode: boolean;
  };
}

export interface Skill {
  name: string;
  category: "language" | "framework" | "tool" | "other";
  level: number; // 1-5
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  technologies: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
