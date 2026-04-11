"use client";

import { SocialIcon } from "@/components/portfolio/social-icon";
import type { SocialLink } from "@/types/portfolio";
import { trackEvent } from "@/lib/analytics";

export function SocialLinksRow({ links }: { links: SocialLink[] }) {
  const handleClick = (link: SocialLink) => {
    trackEvent("social_click", {
      platform: link.label,
      href: link.href,
    });
  };

  return (
    <div className="mt-4 flex flex-wrap items-center gap-4 pt-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleClick(link)}
          className="text-sleek-secondary transition-colors hover:text-foreground"
          aria-label={link.label}
        >
          <SocialIcon type={link.type} className="size-5" />
        </a>
      ))}
    </div>
  );
}
