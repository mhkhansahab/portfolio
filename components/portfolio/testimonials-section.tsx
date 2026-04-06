import type { PortfolioProfile } from "@/types/portfolio";

export function TestimonialsSection({
  testimonials,
  linkedinHref,
}: {
  testimonials: PortfolioProfile["testimonials"];
  linkedinHref: string;
}) {
  const recommendationsHref = linkedinHref.endsWith("/")
    ? `${linkedinHref}details/recommendations/`
    : `${linkedinHref}/details/recommendations/`;

  return (
    <section id="proof" className="mt-20">
      <p className="text-sleek-secondary text-lg">Recommendations</p>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold text-foreground [font-family:var(--profile-heading-font)]">
          LinkedIn Recommendations
        </h2>
        <a
          href={recommendationsHref}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-sleek-secondary transition-all duration-300 hover:text-foreground hover:underline hover:decoration-2 hover:underline-offset-4"
        >
          View on LinkedIn
        </a>
      </div>
      {!testimonials?.length ? (
        <article className="mt-6 rounded-md border border-dashed border-black/20 bg-black/[0.035] p-5 dark:border-border/70 dark:bg-card/70">
          <p className="text-sm text-sleek-secondary">
            I am currently collecting direct client testimonials. You can view recommendations from colleagues and collaborators on LinkedIn.
          </p>
          <a
            href={recommendationsHref}
            target="_blank"
            rel="noreferrer"
            className="btn-inner-shadow mt-4 inline-flex items-center rounded-md border border-black/20 bg-white px-3 py-1.5 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 dark:border-white/20 dark:bg-black dark:text-white"
          >
            View LinkedIn Recommendations
          </a>
        </article>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <article
              key={`${item.name}-${item.role}`}
              className="rounded-md border border-dashed border-black/20 bg-black/[0.035] p-4 dark:border-border/70 dark:bg-card/70"
            >
              <p className="text-sleek-secondary text-sm">“{item.quote}”</p>
              <p className="mt-3 text-sm font-semibold text-foreground">{item.name}</p>
              <p className="text-sleek-secondary text-xs">{item.role}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
