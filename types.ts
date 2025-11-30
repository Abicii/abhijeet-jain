import { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  achievements: string[];
  skills: string[];
}