import { About } from "@/app/(portfolio)/components/about";
import { GithubGraph } from "@/app/(portfolio)/components/github-graph";
import { IntroGrid } from "@/app/(portfolio)/components/intro";
import { ProfileAvatar } from "@/app/(portfolio)/components/profile-avatar";
import { TechStack } from "@/app/(portfolio)/components/tech-stack";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Page() {
  return (
    <main className="">
      <header className="flex items-center justify-between border-border/60 border-b py-4">
        <ProfileAvatar />

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </header>

      <div className="my-5">
        <About />
      </div>

      <IntroGrid />

      <TechStack />

      <GithubGraph />
    </main>
  );
}
