import type { ExperienceItem } from "@/types/portfolio";

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="pt-2">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground [font-family:var(--profile-heading-font)]">{item.company}</h3>
          <p className="text-sleek-secondary mt-0.5 text-sm md:text-[1.05rem]">{item.role}</p>
        </div>
        <div className="text-right text-sm text-sleek-secondary md:min-w-[175px]">
          <p>{item.period}</p>
          <p>{item.location}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.tech.map((tech) => (
          <span key={tech} className="tag-inner-shadow rounded-md border border-dashed border-black/20 bg-black/[0.04] px-2 py-0.5 text-xs text-foreground dark:border-border/85 dark:bg-accent/45">
            {tech}
          </span>
        ))}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-sleek-secondary md:text-base">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="list-disc marker:text-foreground/80 marker:text-[0.75rem] ml-4 pl-1">
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ExperienceSection({ experience }: { experience: ExperienceItem[] }) {
  return (
    <section id="experience" className="mt-20">
      <p className="text-sleek-secondary text-lg">Featured</p>
      <h2 className="text-2xl font-semibold text-foreground [font-family:var(--profile-heading-font)]">Experience</h2>
      <div className="mt-6 grid grid-cols-1 gap-10">
        {experience.map((item) => (
          <ExperienceCard key={`${item.company}-${item.period}`} item={item} />
        ))}
      </div>
    </section>
  );
}
