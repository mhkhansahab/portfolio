export function TrustStrip({ companies }: { companies: string[] }) {
  return (
    <section className="mt-10 rounded-md border border-dashed border-black/20 bg-black/[0.03] px-4 py-4 dark:border-border/70 dark:bg-card/70">
      <p className="text-sleek-secondary text-sm">Trusted experience across teams at:</p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {companies.map((company) => (
          <span
            key={company}
            className="tag-inner-shadow inline-flex items-center rounded-md border border-dashed border-black/20 bg-black/[0.04] px-2 py-0.5 text-xs font-semibold text-foreground dark:border-border/85 dark:bg-accent/45"
          >
            {company}
          </span>
        ))}
      </div>
    </section>
  );
}
