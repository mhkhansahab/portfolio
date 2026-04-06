"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ExternalLinkIcon } from "@/components/portfolio/icons";
import type { GitHubContributionLevel, GitHubContributionsResponse } from "@/types/portfolio";

const LEVEL_CLASS: Record<GitHubContributionLevel, string> = {
  NONE: "border-[#d0d7de] bg-[#ebedf0] dark:border-[#30363d] dark:bg-[#161b22]",
  FIRST_QUARTILE: "border-[#9be9a8] bg-[#9be9a8]/70 dark:border-[#0e4429] dark:bg-[#0e4429]",
  SECOND_QUARTILE: "border-[#40c463] bg-[#40c463]/75 dark:border-[#006d32] dark:bg-[#006d32]",
  THIRD_QUARTILE: "border-[#30a14e] bg-[#30a14e]/85 dark:border-[#26a641] dark:bg-[#26a641]",
  FOURTH_QUARTILE: "border-[#216e39] bg-[#216e39]/90 dark:border-[#39d353] dark:bg-[#39d353]",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function GithubContributionsCard({ username, href }: { username: string; href: string }) {
  const [data, setData] = useState<GitHubContributionsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryTick, setRetryTick] = useState(0);
  const requestVersionRef = useRef(0);

  useEffect(() => {
    const controller = new AbortController();
    const requestVersion = ++requestVersionRef.current;

    const run = async () => {
      setLoading(true);
      setError(null);
      setData(null);

      try {
        const response = await fetch(`/api/github/contributions/${encodeURIComponent(username)}`, {
          signal: controller.signal,
          cache: "no-store",
        });
        const payload = (await response.json()) as GitHubContributionsResponse;

        if (requestVersion !== requestVersionRef.current || controller.signal.aborted) return;

        if (payload.error) {
          setError(payload.error);
          return;
        }

        setData(payload);
      } catch (caught) {
        if ((caught as Error).name === "AbortError") return;
        if (requestVersion !== requestVersionRef.current || controller.signal.aborted) return;
        setError("Unable to load contributions right now.");
      } finally {
        if (requestVersion !== requestVersionRef.current || controller.signal.aborted) return;
        setLoading(false);
      }
    };

    void run();
    return () => controller.abort();
  }, [username, retryTick]);

  const weeks = useMemo(() => data?.weeks ?? [], [data]);
  const hasData = weeks.some((week) => week.contributionDays.length > 0);
  const visibleWeeks = useMemo(() => {
    const maxWeeks = 44;
    if (weeks.length <= maxWeeks) return weeks;
    return weeks.slice(weeks.length - maxWeeks);
  }, [weeks]);

  const monthLabels = useMemo(
    () =>
      visibleWeeks.map((week, index) => {
        const first = week.contributionDays[0];
        if (!first) return "";
        const date = new Date(`${first.date}T00:00:00`);
        if (index === 0 || date.getDate() <= 7) return date.toLocaleString(undefined, { month: "short" });
        return "";
      }),
    [visibleWeeks],
  );
  const weekGridStyle = useMemo(
    () => ({
      gridTemplateColumns: `repeat(${Math.max(visibleWeeks.length, 1)}, minmax(0, 1fr))`,
    }),
    [visibleWeeks.length],
  );

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

          <div className="rounded-md border border-dashed border-border/70 bg-background/30 p-3">
            {loading ? (
              <div>
                <div className="mb-2 ml-7 grid gap-[2px]" style={{ gridTemplateColumns: "repeat(44, minmax(0, 1fr))" }}>
                    {Array.from({ length: 24 }, (_, index) => (
                      <span key={`skeleton-month-${index}`} className="h-3 w-full rounded-sm bg-muted/70 dark:bg-muted/40" />
                    ))}
                  </div>
                  <div className="grid grid-cols-[1.5rem_1fr] gap-2">
                    <div className="mr-2 grid grid-rows-7 gap-1 pt-[1px] text-[11px] leading-none text-transparent">
                      {["-", "Mon", "-", "Wed", "-", "Fri", "-"].map((label, rowIndex) => (
                        <span key={`${label}-${rowIndex}`} className="h-2">
                          {label}
                        </span>
                      ))}
                    </div>
                    <div className="grid gap-[2px]" style={{ gridTemplateColumns: "repeat(44, minmax(0, 1fr))" }}>
                      {Array.from({ length: 44 }, (_, weekIndex) => (
                        <div key={`skeleton-week-${weekIndex}`} className="grid grid-rows-7 gap-1">
                          {Array.from({ length: 7 }, (_, dayIndex) => (
                            <span key={`skeleton-day-${weekIndex}-${dayIndex}`} className="w-full aspect-square rounded-[2px] border border-border/40 bg-muted/60 dark:bg-muted/40" />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
            ) : error ? (
              <div className="flex min-h-20 flex-col items-start justify-center gap-2">
                <p className="text-sleek-secondary text-sm">Unable to load contributions right now.</p>
                <button
                  type="button"
                  onClick={() => setRetryTick((value) => value + 1)}
                  className="inline-flex items-center rounded-md border border-dashed border-border/70 px-2 py-1 text-xs font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  Retry
                </button>
              </div>
            ) : !hasData ? (
              <div className="flex min-h-20 items-center">
                <p className="text-sleek-secondary text-sm">No contribution data found for this account.</p>
              </div>
            ) : (
              <>
                <div className="mb-2">
                  <p className="text-sm font-semibold text-foreground">{data?.totalContributions ?? 0} contributions in the last year</p>
                </div>

                <div>
                  <div className="mb-2 ml-7 grid gap-[2px]" style={weekGridStyle}>
                      {monthLabels.map((month, index) => (
                        <span key={`month-${index}`} className="h-3 w-full text-[11px] leading-none text-sleek-secondary">
                          {month}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-[1.5rem_1fr] gap-2" role="img" aria-label={`GitHub contribution heatmap for ${username}`}>
                      <div className="mr-2 grid grid-rows-7 gap-1 pt-[1px] text-[11px] leading-none text-sleek-secondary">
                        {["", "Mon", "", "Wed", "", "Fri", ""].map((label, rowIndex) => (
                          <span key={`${label}-${rowIndex}`} className="h-2">
                            {label}
                          </span>
                        ))}
                      </div>
                      <div className="grid gap-[2px]" style={weekGridStyle}>
                        {visibleWeeks.map((week, weekIndex) => (
                          <div key={`week-${weekIndex}`} className="grid grid-rows-7 gap-1">
                            {week.contributionDays.map((day) => {
                              const label = `${day.contributionCount} contribution${day.contributionCount === 1 ? "" : "s"} on ${formatDate(day.date)}`;
                              return (
                                <span
                                  key={day.date}
                                  title={label}
                                  aria-label={label}
                                  className={`w-full aspect-square rounded-[2px] border ${LEVEL_CLASS[day.contributionLevel]}`}
                                />
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                <div className="mt-3 flex justify-end">
                  <div className="flex items-center gap-1 text-xs text-sleek-secondary">
                    <span>Less</span>
                    {(["NONE", "FIRST_QUARTILE", "SECOND_QUARTILE", "THIRD_QUARTILE", "FOURTH_QUARTILE"] as GitHubContributionLevel[]).map((level) => (
                      <span key={`legend-${level}`} className={`h-2 w-2 rounded-[2px] border ${LEVEL_CLASS[level]}`} />
                    ))}
                    <span>More</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
