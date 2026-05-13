import { cacheLife } from "next/cache";
import type { Activity } from "@/components/contribution-graph";

interface GitHubContributionsResponse {
  contributions: Activity[];
}

export const getCachedContributions = async (username: string) => {
  "use cache";
  cacheLife("days");

  const res = await fetch(
    `${process.env.GITHUB_CONTRIBUTIONS_API_URL || "https://github-contributions-api.jogruber.de"}/v4/${username}?y=last`
  );
  const data = (await res.json()) as GitHubContributionsResponse;
  return data.contributions;
};
