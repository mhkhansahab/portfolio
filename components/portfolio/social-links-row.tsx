import { SocialIcon } from "@/components/portfolio/social-icon";
import type { SocialLink } from "@/types/portfolio";

export function SocialLinksRow({ links }: { links: SocialLink[] }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-4 pt-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sleek-secondary transition-colors hover:text-foreground"
          aria-label={link.label}
        >
          <SocialIcon type={link.type} className="size-5" />
        </a>
      ))}
    </div>
  );
}
