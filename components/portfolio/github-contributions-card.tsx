/* eslint-disable @next/next/no-img-element */
import { ExternalLinkIcon } from "@/components/portfolio/icons";

export function GithubContributionsCard({ username, href }: { username: string; href: string }) {
  return (
    <div className="mt-8">
      <div data-slot="card" className="bg-card text-card-foreground flex h-full w-full flex-col gap-6 overflow-hidden rounded-xl border border-border/70 p-0 shadow-none transition-all">
        <div data-slot="card-content" className="space-y-4 px-6 py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground [font-family:var(--profile-heading-font)]">GitHub</h3>
              <p className="text-sleek-secondary text-sm">
                Recent contributions by <span className="font-semibold text-foreground">{username}</span>
              </p>
            </div>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sleek-secondary hover:text-primary inline-flex items-center gap-1 text-sm transition-colors hover:underline hover:underline-offset-4"
            >
              View profile
              <ExternalLinkIcon className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="overflow-hidden rounded-md">
            <img
              src="/assets/github/contributions-light.svg"
              alt={`GitHub contribution chart for ${username}`}
              className="block w-[135%] max-w-none -translate-x-10 dark:hidden"
            />
            <img
              src="/assets/github/contributions-dark.svg"
              alt={`GitHub contribution chart for ${username}`}
              className="hidden w-[135%] max-w-none -translate-x-10 dark:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
