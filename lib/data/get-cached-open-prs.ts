import { cacheLife } from "next/cache";

export interface OpenPullRequest {
  createdAt: string;
  htmlUrl: string;
  id: number;
  number: number;
  repository: string;
  title: string;
}

interface GitHubSearchItem {
  created_at: string;
  html_url: string;
  id: number;
  number: number;
  repository_url: string;
  title: string;
}

interface GitHubSearchResponse {
  items?: GitHubSearchItem[];
}

const REPO_URL_PREFIX = "https://api.github.com/repos/";

export const getCachedOpenPullRequests = async (
  username: string
): Promise<OpenPullRequest[]> => {
  "use cache";
  cacheLife("hours");

  try {
    const query = `is:pr is:open author:${username} -user:${username}`;
    const url = `https://api.github.com/search/issues?q=${encodeURIComponent(query)}&sort=updated&order=desc&per_page=20`;

    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    if (!response.ok) {
      return [];
    }

    const json = (await response.json()) as GitHubSearchResponse;
    const items = json.items ?? [];

    return items.map((item) => ({
      id: item.id,
      number: item.number,
      title: item.title,
      htmlUrl: item.html_url,
      repository: item.repository_url.replace(REPO_URL_PREFIX, ""),
      createdAt: item.created_at,
    }));
  } catch {
    return [];
  }
};
