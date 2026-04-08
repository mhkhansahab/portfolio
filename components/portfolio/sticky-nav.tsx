/* eslint-disable @next/next/no-img-element */
import { ThemeToggle } from "@/components/portfolio/theme-toggle";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function StickyNav({ imageUrl, imageAlt }: { imageUrl: string; imageAlt: string }) {
  return (
    <nav className="sleek-p3 sm:sticky top-0 z-20 rounded-md bg-background/35 py-4 backdrop-blur-sm dark:bg-background/55">
      <div className="container mx-auto flex max-w-3xl items-center justify-between px-6">
        <div className="flex flex-wrap items-baseline gap-2 sm:gap-4">
          <a className="flex shrink-0 items-center" href="#top">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border/70 bg-blue-300 p-0.5 transition-all duration-300 ease-in-out hover:scale-90 dark:bg-yellow-300 sm:h-12 sm:w-12">
              <img src={imageUrl} alt={imageAlt} className="h-full w-full rounded-[0.45rem] object-cover sm:rounded-[0.6rem]" />
            </span>
          </a>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                className="text-sleek-secondary transition-all duration-300 ease-in-out hover:text-foreground hover:underline hover:decoration-2 hover:underline-offset-4"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
