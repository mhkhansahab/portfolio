import { NextResponse } from "next/server";
import type { GitHubContributionsResponse } from "@/types/portfolio";

type RouteContext = {
  params: Promise<{
    username: string;
  }>;
};

type GitHubGraphqlResponse = {
  data?: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: Array<{
            contributionDays: Array<{
              date: string;
              contributionCount: number;
              contributionLevel: "NONE" | "FIRST_QUARTILE" | "SECOND_QUARTILE" | "THIRD_QUARTILE" | "FOURTH_QUARTILE";
            }>;
          }>;
        };
      };
    } | null;
  };
  errors?: Array<{ message: string }>;
};

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";
const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;
const REVALIDATE_SECONDS = 60 * 60;

function jsonWithCache(payload: GitHubContributionsResponse, status = 200) {
  return NextResponse.json(payload, {
    status,
    headers: {
      "Cache-Control": `public, s-maxage=${REVALIDATE_SECONDS}, stale-while-revalidate=86400`,
    },
  });
}

function fallbackPayload(username: string, error: string): GitHubContributionsResponse {
  return {
    username,
    weeks: [],
    totalContributions: 0,
    fetchedAt: new Date().toISOString(),
    error,
  };
}

export async function GET(_: Request, context: RouteContext) {
  const { username } = await context.params;

  if (!username?.trim()) {
    return jsonWithCache(fallbackPayload("unknown", "Invalid GitHub username."), 400);
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return jsonWithCache(fallbackPayload(username, "Missing GITHUB_TOKEN on server."), 503);
  }

  const to = new Date();
  const from = new Date(Date.now() - ONE_YEAR_MS);

  const query = `
    query ContributionCalendar($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(GITHUB_GRAPHQL_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "portfolio-github-contributions",
      },
      body: JSON.stringify({
        query,
        variables: {
          username,
          from: from.toISOString(),
          to: to.toISOString(),
        },
      }),
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return jsonWithCache(
        fallbackPayload(username, `GitHub API request failed (${response.status}).`),
        response.status,
      );
    }

    const payload = (await response.json()) as GitHubGraphqlResponse;
    console.log(payload.data?.user?.contributionsCollection.contributionCalendar);
    if (payload.errors?.length) {
      return jsonWithCache(fallbackPayload(username, payload.errors[0]?.message ?? "GitHub API error."), 502);
    }

    const calendar = payload.data?.user?.contributionsCollection.contributionCalendar;
    if (!calendar) {
      return jsonWithCache(fallbackPayload(username, "GitHub user not found or no contribution data."), 404);
    }

    const normalized: GitHubContributionsResponse = {
      username,
      weeks: calendar.weeks.map((week) => ({
        contributionDays: week.contributionDays.map((day) => ({
          date: day.date,
          contributionCount: day.contributionCount,
          contributionLevel: day.contributionLevel,
        })),
      })),
      totalContributions: calendar.totalContributions,
      fetchedAt: new Date().toISOString(),
    };

    return jsonWithCache(normalized);
  } catch {
    return jsonWithCache(
      fallbackPayload(username, "Unable to load contributions right now."),
      500,
    );
  }
}
