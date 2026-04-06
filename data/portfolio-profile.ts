import type { PortfolioProfile } from "@/types/portfolio";

export const portfolioProfile: PortfolioProfile = {
  template: "portfolio",
  img: "/assets/profile/avatar-2.svg",
  img_alt: "Profile photo",
  heading_bold: "Hamza",
  heading_light: "A Full Stack Engineer.",
  desc_1:
    "Full Stack Engineer specializing in AI Agents, Chrome Extensions, and scalable web applications. I focus on architecting functional solutions to complex problems and building robust, production-ready systems.",
  tech_stack: [
    { iconName: "SI Typescript", visibleName: "TypeScript", tier: "primary" },
    { iconName: "SI React", visibleName: "React", tier: "primary" },
    { iconName: "SI Angular", visibleName: "Angular", tier: "primary" },
    { iconName: "SI Nextdotjs", visibleName: "Next.js", tier: "primary" },
    { iconName: "SI Nodedotjs", visibleName: "Node.js", tier: "primary" },
    { iconName: "SI Postgresql", visibleName: "Postgres", tier: "primary" },
    { iconName: "SmythOS", visibleName: "SmythOS SDK", tier: "secondary" },
    { iconName: "SI OpenAI", visibleName: "LLMs / OpenAI", tier: "secondary" },
    { iconName: "SI Claude", visibleName: "LLMs / Claude", tier: "secondary" },
    { iconName: "SI Googlegemini", visibleName: "LLMs / Gemini", tier: "secondary" },
    { iconName: "WebExtensions", visibleName: "WebExtensions API", tier: "secondary" },
    { iconName: "SI Tailwindcss", visibleName: "Tailwind CSS", tier: "secondary" },
  ],
  cta_buttons: [
    {
      type: "primary",
      label: "Resume / CV",
      href: "https://canva.link/hamza-khan-resume",
      icon: "LU FileText",
    },
    {
      type: "secondary",
      label: "Get in touch",
      href: "mailto:m_hamzakhan@outlook.com",
      icon: "BI Send",
    },
  ],
  social_links: [
    {
      type: "SI Linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/m-hamza-khan/",
    },
    {
      type: "SI Github",
      label: "GitHub",
      href: "https://github.com/mhkhansahab",
    },
    { type: "BI Envelope", label: "Email", href: "mailto:m_hamzakhan@outlook.com" },
  ],
  experience: [
    {
      company: "SmythOS",
      role: "Full Stack Engineer",
      period: "March 2025 – Present",
      location: "United States (Remote)",
      tech: ["React.js", "Next.js", "TypeScript", "Node.js", "Security", "SmythOS SDK", "LLM Orchestration"],
      bullets: [
        "Architected and optimized the Agent Builder Studio experience for AI agent creation.",
        "Developed voice and form embodiment modules for seamless multi-modal interactions.",
        "Implemented security protocols and access management for safer agent deployments.",
      ],
    },
    {
      company: "IOMechs",
      role: "Software Engineer",
      period: "July 2023 – February 2025",
      location: "Pakistan",
      tech: ["React.js", "Angular.js", "TypeScript", "Next.js"],
      bullets: [
        "Served as Frontend Lead and directed web resources across multiple projects.",
        "Designed software architecture and executed performance optimization strategies.",
        "Led weekly mentorship and technical growth sessions for the engineering team.",
      ],
    },
    {
      company: "Sudofy",
      role: "Junior Software Engineer",
      period: "August 2021 – May 2022",
      location: "Pakistan",
      tech: ["Vanilla JavaScript", "React.js", "DOM Scripting", "Chrome Extensions", "Automation"],
      bullets: [
        "Engineered responsive interfaces from design mockups into reusable components.",
        "Built and maintained Chrome Extension workflows and communication syncing.",
        "Developed DOM-injection and event-driven automation scripts for browser workflows.",
      ],
    },
  ],
  projects: [
    {
      title: "ICPlan (IOMechs)",
      description:
        "Contributed to ICPlan's internal communications platform during my time at IOMechs, focusing on frontend delivery, UX quality, and production-grade web implementation.",
      href: "https://icplan.com/",
      image: "/assets/projects/icplan-hero.webp",
      tech: ["Angular.js", "TypeScript", "RxJS", "NgRX"],
    },
    {
      title: "SmythOS",
      description:
        "Worked on SmythOS enterprise AI agent infrastructure, including agent builder experience, multimodal interactions, and secure deployment-oriented product features.",
      href: "https://smythos.com/",
      image: "/assets/projects/smythos-hero.jpg",
      tech: ["Vanilla JavaScript", "Next.js", "TypeScript", "Node.js", "Zustand", "AI Agents", "Security"],
    },
    {
      title: "SNAD (IOMechs)",
      description:
        "Contributed to SNAD's retail-focused IMS and POS platform at IOMechs, helping deliver responsive frontend experience and production-ready web interfaces.",
      href: "https://snad.csolit.com/",
      image: "/assets/projects/snad-hero.svg",
      tech: ["Angular.js", "TypeScript", "RxJS", "NgRX"],
    },
  ],
  meeting_link: {
    label: "Book a Meeting",
    href: "https://calendly.com/hamza-khansahab/30min",
  },
  quote: {
    text: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
  },
  theme: {
    colors: {
      bg: "#0b0b0b",
      text: "#f5f5f5",
      muted: "#a3a3a3",
      accent: "#ffffff",
      border: "#262626",
    },
  },
};
