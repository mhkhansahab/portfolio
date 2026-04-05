import type { SocialLink } from "@/types/portfolio";
import { SocialIcon } from "@/components/portfolio/social-icon";

export function FooterSocials({ links }: { links: SocialLink[] }) {
  return (
    <footer className="mt-20 flex flex-col items-center gap-4">
      <div className="flex items-center gap-6">
        {links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sleek-secondary transition-colors hover:text-foreground" aria-label={link.label}>
            <SocialIcon type={link.type} className="size-5" />
          </a>
        ))}
      </div>
    </footer>
  );
}
