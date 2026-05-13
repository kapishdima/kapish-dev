import { GitHubContributions } from "@/components/github-contributions";
import { ThemeProvider } from "@/components/theme-provider";
import { getCachedContributions } from "@/lib/data/get-cached-contributions";

const contributions = getCachedContributions("kapishdima");
const profileUrl = "https://github.com/kapishdima";

export const GithubGraph = () => (
  <ThemeProvider>
    <GitHubContributions
      contributions={contributions}
      githubProfileUrl={profileUrl}
    />
  </ThemeProvider>
);
