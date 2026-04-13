// ✅ No JSX here — plain data only so this file is safe in any server/client context
export type Project = {
  slug: string;
  title: string;
  desc: string;
  category: string;
  tags: string[];
  iconName: string;   // String key maps to icon in components
  externalLink: string;
  date: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "callorax-ai",
    title: "Callorax AI",
    desc: "AI Voice Agents for Lead Campaign Automation. Deploys intelligent AI agents to handle inbound inquiries and launch outbound campaigns 24/7 with human-like precision that converts.",
    category: "AI Automation Platform",
    tags: ["AI", "Voice Synthesis", "Automation", "CRM Integration"],
    iconName: "Mic",
    externalLink: "https://www.callorax.com/",
    date: "April 2026",
  },
  {
    slug: "testofire-platform",
    title: "TestOfire Web & App",
    desc: "A comprehensive coaching and student management platform built with Next.js, React Native, Node.js, and MongoDB. Features real-time communication protocols, secure payment gateway integrations, and robust analytics for cross-device performance optimization.",
    category: "Full Stack Infrastructure",
    tags: ["Next.js", "React Native", "Node.js", "MongoDB", "WebSockets"],
    iconName: "Server",
    externalLink: "https://www.testofire.in/",
    date: "July 2023",
  },
  {
    slug: "medical-kundali",
    title: "Medical Kundali",
    desc: "An innovative digital ecosystem engineered to help couples make informed decisions before marriage. Delivered via a scalable web architect and natively compiled Flutter mobile applications across both Android and iOS platforms.",
    category: "Cross-Platform Ecosystem",
    tags: ["Flutter", "Dart", "Firebase", "Node.js"],
    iconName: "Smartphone",
    externalLink: "https://medicalkundali.com/",
    date: "March 2025",
  },
  {
    slug: "mukherjee-website",
    title: "Mukherjee Website",
    desc: "A highly-performant interface designed natively in Next.js. Engineered translating complex modern design requirements into a scalable front-end architecture prioritizing absolute SEO standards and user-accessibility.",
    category: "Next.js Web App",
    tags: ["Next.js", "React", "TailwindCSS", "SEO"],
    iconName: "Monitor",
    externalLink: "https://mukherjee.ppgf.in/",
    date: "May 2025",
  },
  {
    slug: "talent-traction",
    title: "Talent Traction",
    desc: "A highly technical HR SaaS product providing a centralized dashboard workflow for job creators. Optimized API integration enables fast, streamlined tracking of applicants and hiring workflows utilizing clean React architecture.",
    category: "SaaS Dashboard",
    tags: ["React", "Dashboard", "REST API", "SaaS"],
    iconName: "Briefcase",
    externalLink: "https://hire.talenttraction.org/",
    date: "Dec 2025",
  },
  {
    slug: "bright-gold",
    title: "Bright Gold",
    desc: "Architected the primary digital presence interface for Bright Digital Gold, focusing heavily on responsive modern UI frameworks aligned with the brand's complex financial domain logic and aesthetic capabilities.",
    category: "Fintech Website",
    tags: ["Fintech", "UI/UX", "Frontend Architecture"],
    iconName: "Shield",
    externalLink: "https://www.brightgold.com/",
    date: "Dec 2025",
  },
  {
    slug: "axis-global-traders",
    title: "AXIS GLOBAL TRADERS",
    desc: "Engineered the B2B web infrastructure for AXIS Global Trade RS resulting in a rapidly responsive, user-focused digital interface explicitly built to manage extensive business data and brand requirements flawlessly.",
    category: "Corporate Web Platform",
    tags: ["B2B Platform", "Responsive Web Design"],
    iconName: "Globe",
    externalLink: "https://www.axisglobaltraders.com/",
    date: "Oct 2025",
  },
  {
    slug: "ppgf",
    title: "PPGF",
    desc: "Designed and developed the PPGF institutional website delivering an exceptionally clean, rapid loading web-experience compliant with modern accessibility standards.",
    category: "Enterprise Web Design",
    tags: ["Web Architecture", "UI Design"],
    iconName: "Layout",
    externalLink: "https://www.ppgf.in/",
    date: "May 2025",
  },
  {
    slug: "uflex",
    title: "Uflex",
    desc: "Developed a massively responsive and heavily performance-optimized digital real-estate platform minimizing load times and prioritizing ultra-modern usability thresholds.",
    category: "Performance Optimization",
    tags: ["Performance", "Optimization", "React"],
    iconName: "Zap",
    externalLink: "#",
    date: "Dec 2025",
  },
];
