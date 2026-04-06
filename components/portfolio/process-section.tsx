import type { PortfolioProfile } from "@/types/portfolio";

export function ProcessSection({ steps }: { steps: PortfolioProfile["process_steps"] }) {
  return (
    <section id="process" className="mt-20">
      <p className="text-sleek-secondary text-lg">Delivery</p>
      <h2 className="text-2xl font-semibold text-foreground [font-family:var(--profile-heading-font)]">How I Work</h2>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-md border border-dashed border-black/20 bg-black/[0.035] p-4 dark:border-border/70 dark:bg-card/70">
            <p className="text-xs font-semibold text-sleek-secondary">Step {index + 1}</p>
            <h3 className="mt-1 text-lg font-semibold text-foreground [font-family:var(--profile-heading-font)]">{step.title}</h3>
            <p className="text-sleek-secondary mt-2 text-sm">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
