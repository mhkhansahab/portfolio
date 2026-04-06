/* eslint-disable @next/next/no-img-element */
import { PlusIcon } from "@/components/portfolio/icons";

export function ContactCTA({
  label,
  href,
  imageUrl,
  imageAlt,
  pitch,
}: {
  label: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  pitch: string;
}) {
  return (
    <section id="contact" className="mt-20">
      <div className="rounded-md border border-dashed border-black/20 py-8 dark:border-border/70 dark:bg-card/45">
        <div className="mt-6 flex w-full flex-col px-6 pb-8 sm:flex-row sm:items-center sm:justify-between sm:px-12">
          <p className="text-sleek-secondary mb-4 text-center text-base sm:mb-3 md:text-xl">{pitch}</p>
          <div className="mt-4 flex w-full justify-center sm:mt-0 sm:w-auto sm:justify-end">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="tag-inner-shadow group inline-flex cursor-pointer items-center self-end rounded-md border border-dashed border-black/20 bg-black/[0.04] px-2 py-1 text-sm text-foreground shadow-[0_0_5px_rgba(0,0,0,0.1)] transition-all hover:border-black/30 dark:border-border/85 dark:bg-accent/45 dark:shadow-[0_0_5px_rgba(255,255,255,0.08)]"
            >
              <div className="relative z-20 flex items-center gap-2 transition-all duration-300 group-hover:gap-8">
                <div className="h-5 w-5 flex-shrink-0 overflow-hidden rounded-full bg-muted">
                  <img src={imageUrl} alt={imageAlt} className="h-full w-full object-cover bg-blue-300 dark:bg-yellow-300" />
                </div>
                <div className="absolute left-[24px] flex -translate-x-full transform items-center gap-0 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <PlusIcon className="h-3 w-3" />
                  <div className="mr-2 ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-300 dark:bg-yellow-300 text-[8px] text-background">You</div>
                </div>
                <span className="relative ml-0 block whitespace-nowrap text-sm font-bold transition-all duration-300 group-hover:ml-4">{label}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
