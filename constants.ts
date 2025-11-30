import { Github, Linkedin, Mail } from "lucide-react";
import { Project, SkillCategory, SocialLink, NavItem, ExperienceItem } from "./types";


export const META = {
  name: "Abhijeet Jain",
  role: "Frontend Developer & UI/UX Designer",
  tagline: "Designer till lunch. Developer after.",
  email: "abhijeettt.9876@gmail.com",
  aboutShort: "I build enterprise products from scratch with a focus on premium aesthetics and scalable architecture.",
  aboutLong: "I am a Frontend Developer and UI/UX Designer with deep experience in building enterprise-grade applications. I bridge the gap between creative design and engineering, ensuring that every pixel serves a purpose and every component is scalable. When I'm not coding, I design useful everyday objects—from tech tools to functional art.",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/abhijeetjain9876/", icon: Linkedin },
  { platform: "GitHub", url: "https://github.com/Abicii", icon: Github },
  { platform: "Email", url: `mailto:${META.email}`, icon: Mail },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "1",
    role: "Software Developer",
    company: "Cognizant",
    period: "Jan ‘24 - Present",
    achievements: [
      "Designed and developed an enterprise-scale platform hosting multiple AI-powered applications, streamlining automation workflows for engineers working on SAP, Salesforce, and Oracle by 80%-90%.",
      "Architected and delivered a centralized Admin Portal, enabling role-based access control and subscription-based feature management, which improved deployment flexibility and reduced client onboarding effort.",
      "Built a collaborative Agentic AI interface with dual-pane design and backend integration using Azure OpenAI and Google ADK, enabling real-time multi-agent collaboration and faster automation script generation.",
      "Created a reusable React.js component library and standardized UI/UX patterns, reducing UI development time across applications by 60% and improving maintainability.",
      "Owned end-to-end UI/UX design (Figma to production) for the marketing site, platform, and admin tools, delivering responsive, user-friendly interfaces that improved adoption and usability."
    ],
    skills: ["React.js", "Javascript", "Python (Flask)", "UI/UX Design", "Azure OpenAI", "Google ADK", "API Integration"]
  },
  {
    id: "2",
    role: "AI Research Intern",
    company: "Ishan Khosla Design",
    period: "May ‘23 - Aug ‘23",
    achievements: [
      "Developed an AI model to identify different types of tribal tattoo designs.",
      "Worked on image styling algorithms to transform any input image into Baiga tribal tattoo designs.",
      "Explored the intersection of tribal tattoo aesthetics and typeface design."
    ],
    skills: ["Python", "Machine Learning", "Neural Networks"]
  },
  {
    id: "3",
    role: "Internship",
    company: "IBM",
    period: "Jun ‘22 – Jul ‘22",
    achievements: [
      "Designed a neural network capable of learning multiple attributes of a single input.",
      "Achieved accuracy better than existing complex models for small datasets using support vector machines."
    ],
    skills: ["Python", "Machine Learning", "Neural Networks"]
  }
];

// Helper to resolve image path using import.meta.url
// This ensures correct path resolution relative to this file
let justImage = "just.png";
let rageImage = "rage.png";

try {
  // @ts-ignore
  justImage = new URL('./just.png', import.meta.url).href;
  // @ts-ignore
  rageImage = new URL('./rage.png', import.meta.url).href;
} catch (e) {
  console.warn("Could not resolve image path with import.meta.url, falling back to string");
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Just",
    category: "Product Design & Frontend",
    description: "A premium minimalist storefront built with React.js, focused on clean aesthetics and seamless shopping UX.",
    tags: ["React", "TypeScript", "Figma"],
    imageUrl: justImage,
    link: "https://just-ui-ten.vercel.app/",
    githubUrl: "https://github.com/Abicii/JUST.git",
    featured: true,
  },
  {
    id: "2",
    title: "Rage : Event Booking",
    category: "Product Design & Frontend",
    description: "A modern event discovery and ticketing platform for nightlife, techno gigs, and underground parties.",
    tags: ["framer", "React", "Typescript"],
    imageUrl: rageImage,
    link: "https://rage-ui-blush.vercel.app/",
    githubUrl: "https://github.com/Abicii/rage-ui.git",
    featured: true,
  },
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript(ES6+)", "Python", "Java"],
  },
  {
    title: "Methodologies",
    skills: ["Agile - Scrum/Kanban"],
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "Node.js", "HTML5", "CSS3", "jQuery", "Bootstrap", "Redux", "TypeScript"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Github", "Figma", "Postman", "Visual Studio Code", "Cursor"],
  },
];