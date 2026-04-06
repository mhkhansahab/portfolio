import type { PortfolioProfile } from "@/types/portfolio";

type Service = PortfolioProfile["services"][number];

function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      className={[
        "rounded-md border border-dashed p-4",
        service.recommended
          ? "border-foreground/35 bg-foreground/5 dark:border-foreground/45 dark:bg-foreground/10"
          : "border-black/20 bg-black/[0.035] dark:border-border/70 dark:bg-card/70",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-foreground [font-family:var(--profile-heading-font)]">{service.title}</h3>
        <span className="text-sleek-secondary text-xs">{service.timeline}</span>
      </div>
      <p className="text-sleek-secondary mt-2 text-sm">{service.ideal_for}</p>
      <ul className="text-sleek-secondary mt-3 space-y-1 text-sm">
        {service.deliverables.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
      <p className="mt-3 text-xs font-semibold text-foreground">{service.pricing_text}</p>
      <a
        href={service.cta_href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center rounded-md border border-dashed border-black/20 bg-background px-2 py-1 text-sm font-semibold text-foreground transition-colors hover:bg-accent dark:border-border/75"
      >
        {service.cta_label}
      </a>
    </article>
  );
}

export function ServicesSection({ services }: { services: PortfolioProfile["services"] }) {
  return (
    <section id="services" className="mt-20">
      <p className="text-sleek-secondary text-lg">Offer</p>
      <h2 className="text-2xl font-semibold text-foreground [font-family:var(--profile-heading-font)]">Services</h2>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}
