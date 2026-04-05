/* eslint-disable @next/next/no-img-element */
import { PrimaryActions } from "@/components/portfolio/primary-actions";
import { SocialLinksRow } from "@/components/portfolio/social-links-row";
import { TechBadge } from "@/components/portfolio/tech-badge";
import type { PortfolioProfile } from "@/types/portfolio";

export function HeroAbout({ profile }: { profile: PortfolioProfile }) {
  const heroParagraphs = [profile.desc_1, profile.desc_2, profile.desc_3].filter((value) => value?.trim().length);
  const primarySkills = profile.tech_stack.filter((item) => item.tier !== "secondary");
  const secondarySkills = profile.tech_stack.filter((item) => item.tier === "secondary");

  return (
    <section id="about" className="pt-12">
      <div className="size-24 shrink-0 overflow-hidden rounded-full bg-blue-300 p-1 dark:bg-yellow-300" aria-hidden="true">
        <img src={profile.img} alt={profile.img_alt} className="h-full w-full rounded-full object-cover" />
      </div>

      <div className="mt-8 flex flex-col gap-2">
        <h1 className="text-4xl leading-tight font-bold tracking-tight text-foreground [font-family:var(--profile-heading-font)]">
          Hi, I&apos;m {profile.heading_bold} — <span className="text-sleek-secondary">{profile.heading_light}</span>
        </h1>
        <div className="text-sleek-secondary mt-4 space-y-3 text-base leading-relaxed md:text-lg">
          {heroParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex flex-wrap gap-2">
          {primarySkills.map((item) => (
            <TechBadge key={item.visibleName} item={item} />
          ))}
        </div>
        {secondarySkills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {secondarySkills.map((item) => (
              <TechBadge key={item.visibleName} item={item} />
            ))}
          </div>
        )}
      </div>

      {primarySkills.length === 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {profile.tech_stack.map((item) => (
          <TechBadge key={item.visibleName} item={item} />
          ))}
        </div>
      )}

      <PrimaryActions buttons={profile.cta_buttons} />
      <SocialLinksRow links={profile.social_links} />
    </section>
  );
}
