"use client";
import { useEffect, useState } from "react";

import { AboutNarrativeCard } from "@/components/portfolio/about-narrative-card";
import { ContactCTA } from "@/components/portfolio/contact-cta";
import { CursorCat } from "@/components/portfolio/cursor-cat";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { FooterSocials } from "@/components/portfolio/footer-socials";
import { GithubContributionsCard } from "@/components/portfolio/github-contributions-card";
import { HeroAbout } from "@/components/portfolio/hero-about";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { QuoteBlock } from "@/components/portfolio/quote-block";
import { StickyNav } from "@/components/portfolio/sticky-nav";
import type { PortfolioProfile } from "@/types/portfolio";

export function PortfolioPageShell({ profile }: { profile: PortfolioProfile }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 350);
    return () => window.clearTimeout(timer);
  }, []);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div
          className="h-10 w-10 animate-spin rounded-none border-[2.5px] border-muted-foreground/25 border-t-foreground"
          role="status"
          aria-label="Loading"
        />
      </div>
    );
  }

  const githubLink =
    profile.social_links.find((link) => link.label.toLowerCase() === "github")?.href ??
    "https://github.com/mhkhansahab";
  const githubUsername = githubLink.replace(/\/+$/, "").split("/").pop() ?? "mhkhansahab";

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <CursorCat />
      <div id="top" className="sleek-p3 relative min-h-screen w-full bg-background pb-24 font-sans" style={{ opacity: 1, ["--radius" as string]: "0.625rem" }}>
        <StickyNav imageUrl={profile.img} imageAlt={profile.img_alt} />

        <div className="container mx-auto max-w-3xl animate-fade-in-blur px-4">
          <HeroAbout profile={profile} />
          <AboutNarrativeCard />
          <ExperienceSection experience={profile.experience} />
          <ProjectsSection projects={profile.projects} />
          <GithubContributionsCard username={githubUsername} href={githubLink} />
          <ContactCTA label={profile.meeting_link.label} href={profile.meeting_link.href} imageUrl={profile.img} imageAlt={profile.img_alt} />
          <QuoteBlock text={profile.quote.text} author={profile.quote.author} />
          <FooterSocials links={profile.social_links} />
        </div>
      </div>
    </div>
  );
}
