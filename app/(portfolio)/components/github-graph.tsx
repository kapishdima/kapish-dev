import { GitHubContributions } from "@/components/github-contributions";
import { getCachedContributions } from "@/lib/data/get-cached-contributions";

export const GithubGraph = () => (
  <GitHubContributions contributions={getCachedContributions("kapishdima")} />
);
