import { GitHubContributions } from "@/components/github-contributions";
import { getCachedContributions } from "@/lib/data/get-cached-contributions";

const contributions = getCachedContributions("kapishdima");
const profileUrl = "https://github.com/kapishdima";

export const GithubGraph = () => (
  <GitHubContributions
    contributions={contributions}
    githubProfileUrl={profileUrl}
  />
);
