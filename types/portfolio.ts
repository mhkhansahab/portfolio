export type TechStackItem = {
  iconName: string;
  visibleName: string;
  tier?: "primary" | "secondary";
};

export type CtaButton = {
  type: "primary" | "secondary";
  label: string;
  href: string;
  icon: string;
};

export type SocialLink = {
  type: string;
  label: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  tech: string[];
  bullets: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  href: string;
  image: string;
  tech: string[];
};

export type BlogItem = {
  title: string;
  description: string;
  href: string;
  date: string;
  tags: string[];
};

export type PortfolioProfile = {
  template: string;
  img: string;
  img_alt: string;
  heading_bold: string;
  heading_light: string;
  desc_1: string;
  tech_stack: TechStackItem[];

  cta_buttons: CtaButton[];
  social_links: SocialLink[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  meeting_link: { label: string; href: string };
  quote: { text: string; author: string };
  theme: {
    colors: {
      bg: string;
      text: string;
      muted: string;
      accent: string;
      border: string;
    };
  };
};
