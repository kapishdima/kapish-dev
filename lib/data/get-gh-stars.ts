import { cacheLife } from "next/cache";

export const getStargazerCount = async (repo: string): Promise<number> => {
  "use cache";
  cacheLife("hours");

  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
      },
    });

    if (!response.ok) {
      return 0;
    }

    const json = (await response.json()) as { stargazers_count?: number };
    return Number(json?.stargazers_count) || 0;
  } catch {
    return 0;
  }
};
