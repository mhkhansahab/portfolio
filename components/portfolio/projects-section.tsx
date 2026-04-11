/* eslint-disable @next/next/no-img-element */
"use client";

import type { ProjectItem } from "@/types/portfolio";
import { trackEvent } from "@/lib/analytics";

function ProjectCard({ project }: { project: ProjectItem }) {
  const handleClick = () => {
    trackEvent("project_click", {
      project_title: project.title,
      project_href: project.href,
      tech_stack: project.tech.join(", "),
    });
  };

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group block h-full"
    >
      <article className="flex h-full flex-col rounded-md border border-dashed border-black/20 bg-black/[0.035] p-4 transition-all dark:border-border/70 dark:bg-card/70">
        <div className="overflow-hidden rounded-md">
          <img
            src={project.image}
            alt={project.title}
            className="h-40 w-full object-cover transition-all duration-300 group-hover:scale-[1.03]"
          />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground [font-family:var(--profile-heading-font)] group-hover:text-primary group-hover:underline">
          {project.title}
        </h3>
        <p className="text-sleek-secondary mt-1 text-sm">{project.description}</p>
        <p className="text-sleek-secondary mt-2 text-xs">
          <span className="font-semibold text-foreground">Problem:</span> {project.business_problem}
        </p>
        <p className="text-sleek-secondary mt-1 text-xs">
          <span className="font-semibold text-foreground">Built:</span> {project.solution}
        </p>
        <p className="mt-1 text-xs font-semibold text-foreground">
          Results: {project.result}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="tag-inner-shadow rounded-md border border-dashed border-black/20 bg-black/[0.04] px-2 py-0.5 text-xs text-foreground dark:border-border/85 dark:bg-accent/45"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </a>
  );
}

export function ProjectsSection({ projects }: { projects: ProjectItem[] }) {
  return (
    <section id="projects" className="mt-20">
      <h2 className="text-2xl font-semibold text-foreground [font-family:var(--profile-heading-font)]">Projects</h2>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
