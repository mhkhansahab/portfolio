import type { PortfolioProfile } from "@/types/portfolio";

export const portfolioProfile: PortfolioProfile = {
  template: "portfolio",
  img: "/assets/profile/avatar-2.svg",
  img_alt: "Profile photo",
  heading_bold: "Hamza",
  heading_light: "I build AI automations that save teams real hours every week.",
  desc_1:
    "I help SMB service businesses automate repetitive operations, improve response time, and ship client-facing web apps faster.",
  desc_2:
    "My core offer is a 2-week AI Automation Sprint focused on practical workflow wins your team can use immediately.",
  desc_3:
    "From AI agent orchestration to production web implementation, I deliver systems that are reliable, maintainable, and built for business outcomes.",
  trust_companies: ["SmythOS", "IOMechs", "ICPlan", "AZM"],
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
      label: "Book Discovery Call",
      href: "https://calendly.com/hamza-khansahab/30min",
      icon: "LU FileText",
    },
    {
      type: "secondary",
      label: "Email me",
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
  services: [
    {
      title: "AI Automation Sprint",
      timeline: "2 weeks",
      ideal_for: "SMB teams with repetitive manual workflows in sales, support, or operations.",
      deliverables: [
        "Workflow audit and automation map",
        "1-2 production AI automations shipped",
        "Handoff docs + async walkthrough",
      ],
      pricing_text: "Fixed-scope quote",
      cta_label: "Book Discovery Call",
      cta_href: "https://calendly.com/hamza-khansahab/30min",
      recommended: true,
    },
    {
      title: "Custom AI Agent Build",
      timeline: "4-6 weeks",
      ideal_for: "Businesses needing bespoke AI agents integrated with internal tools and APIs.",
      deliverables: [
        "Agent architecture and implementation",
        "Tool integration and guardrails",
        "Monitoring, prompt tuning, and support plan",
      ],
      pricing_text: "Starting from project-based scope",
      cta_label: "Discuss Build Scope",
      cta_href: "https://calendly.com/hamza-khansahab/30min",
    },
    {
      title: "Web App + AI Integration",
      timeline: "4-8 weeks",
      ideal_for: "Teams launching or modernizing a product with AI-assisted workflows.",
      deliverables: [
        "Frontend + backend delivery",
        "AI-assisted feature integration",
        "Deployment-ready implementation",
      ],
      pricing_text: "Starting from project-based scope",
      cta_label: "Plan My Project",
      cta_href: "https://calendly.com/hamza-khansahab/30min",
    },
  ],
  process_steps: [
    {
      title: "Discovery",
      description: "We map your bottlenecks, define priority workflows, and lock success criteria.",
    },
    {
      title: "Build",
      description: "I implement the agreed scope with transparent updates and milestone demos.",
    },
    {
      title: "Deploy",
      description: "You get production-ready rollout with testing, safeguards, and documentation.",
    },
    {
      title: "Support",
      description: "Post-launch refinements, optimization, and iteration based on real usage.",
    },
  ],
  faqs: [
    {
      question: "How fast can we start?",
      answer: "Most engagements start within 3-7 days after a discovery call and scope sign-off.",
    },
    {
      question: "How do you communicate during projects?",
      answer: "I provide async updates, milestone demos, and a clear weekly execution summary.",
    },
    {
      question: "Do you offer maintenance after delivery?",
      answer: "Yes. I offer post-launch support windows and optional ongoing optimization retainers.",
    },
    {
      question: "How do you handle security and sensitive data in automations?",
      answer: "I use scoped access, least-privilege integrations, and explicit data-flow boundaries in every build.",
    },
  ],
  testimonials: [
    {
      quote:
        "I worked with Hamza on SmythOS projects and the guy just delivers. Clean code, solid logic, and you almost never have to go back and fix something he built which in AI agent development is honestly a big deal. He covers a lot of ground and does it well across the board. But what I appreciate most is that he actually cares about the quality of what he ships, not just getting it done. Would work with him again without hesitation.",
      name: "Leonardo Raul Velasco Parihuana",
      role: "AI Agent Developer & QA Specialist",
    },
    {
      quote:
        "I had the pleasure of working alongside Hamza on the same team, and I can confidently say he is a strong and thoughtful engineer. He approaches problems with clarity and isn't afraid to dive into new challenges, quickly getting up to speed and contributing meaningful solutions. Hamza has a solid foundation as a critical thinker and problem solver. He asks the right questions, analyzes situations carefully, and brings a practical mindset to his work. His ability to break down complex problems and tackle them methodically makes him a valuable team member. I would gladly recommend Hamza to any team looking for a capable and dependable engineer.",
      name: "Ahmed Essam",
      role: "Software Engineer",
    },
    {
      quote:
        "Hamza is a talented Fullstack Engineer on my team. He brings strong technical expertise across both frontend and backend, combined with excellent problem-solving skills. Hamza is not only effective at tackling complex challenges, but also at proposing pragmatic solutions within his scope. As a team player, he collaborates seamlessly, communicates clearly, and consistently contributes to a positive and productive engineering culture. A reliable and impactful engineer, I'm glad to have him on my team.",
      name: "Alaa-eddine KADDOURI",
      role: "VP of Engineering",
    },
    {
      quote:
        "I had the pleasure of working with Hamza and his dedication to excellence is truly admirable. His front-end expertise is exceptional, and his ability to collaborate across teams has been invaluable. He is positive, supportive, and consistently goes above and beyond for the team.",
      name: "Muhammad Ahmer Hussain",
      role: "Senior SQA",
    },
    {
      quote:
        "Hamza is an absolute rockstar front-end developer. His JavaScript and React.js expertise is top-notch, and he is a fantastic team player who is always open to feedback and collaboration. You can count on him to deliver high-quality work every time.",
      name: "Rechelle Ann Fuertes, CSSGB",
      role: "Head of Marketing",
    },
    {
      quote:
        "I had the privilege of working with Hamza for over a year. He is proactive, responsible, and technically sound, always ready to put in the effort to get the job done. His troubleshooting and analytical skills in JavaScript-related technologies are exceptional.",
      name: "Aahad Aazar",
      role: "AI & Product Engineer",
    },
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
        "Contributed to ICPlan's internal communications platform with a focus on frontend delivery and production quality.",
      business_problem:
        "Teams needed a scalable internal communications platform that stayed usable while product complexity grew.",
      solution:
        "Built and refined core frontend flows, improved UI consistency, and supported stable delivery across evolving requirements.",
      result:
        "Improved implementation velocity and reduced delivery friction for ongoing feature releases.",
      href: "https://icplan.com/",
      image: "/assets/projects/icplan-hero.webp",
      tech: ["Angular.js", "TypeScript", "RxJS", "NgRX"],
    },
    {
      title: "SmythOS",
      description:
        "Worked on enterprise AI agent infrastructure and agent-builder product experience.",
      business_problem:
        "Teams needed reliable agent orchestration and secure deployment workflows for production AI automation.",
      solution:
        "Implemented agent builder workflows, multimodal interaction modules, and security-oriented product features.",
      result:
        "Helped ship production-ready AI capabilities with stronger reliability and safer deployment behavior.",
      href: "https://smythos.com/",
      image: "/assets/projects/smythos-hero.jpg",
      tech: ["Vanilla JavaScript", "Next.js", "TypeScript", "Node.js", "Zustand", "AI Agents", "Security"],
    },
    {
      title: "AZM (IOMechs)",
      description:
        "Contributed to AZM's retail IMS/POS platform with a focus on responsive, production-ready interfaces.",
      business_problem:
        "Retail teams needed a unified IMS/POS experience that reduced day-to-day operational overhead.",
      solution:
        "Delivered frontend modules and interface improvements to support smoother inventory, POS, and operational workflows.",
      result:
        "Enabled a more reliable operator experience and faster day-to-day task completion across product flows.",
      href: "https://snad.csolit.com/",
      image: "/assets/projects/snad-hero.svg",
      tech: ["Angular.js", "TypeScript", "RxJS", "NgRX"],
    },
  ],
  meeting_link: {
    label: "Book Discovery Call",
    href: "https://calendly.com/hamza-khansahab/30min",
  },
  contact_pitch:
    "Share your workflow bottleneck and I will map a practical execution plan in our first call.",
  quote: {
    text: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
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
