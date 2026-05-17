import { About } from "@/app/(portfolio)/components/about";
import { GithubGraph } from "@/app/(portfolio)/components/github-graph";
import { IntroGrid } from "@/app/(portfolio)/components/intro";
import { ProfileAvatar } from "@/app/(portfolio)/components/profile-avatar";
import { Projects } from "@/app/(portfolio)/components/projects";
import { TechStack } from "@/app/(portfolio)/components/tech-stack";
import { Testimonials } from "@/app/(portfolio)/components/testimonials";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Page() {
  return (
    <main>
      <header className="flex items-center justify-between border-border/60 border-b py-4">
        <ProfileAvatar />

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </header>

      <div className="pb-16">
        <div className="mt-8 space-y-4">
          <About />
          <IntroGrid />
        </div>
        <div className="mt-12 space-y-4">
          <GithubGraph />
          <TechStack />
        </div>
        <div className="mt-12">
          <Projects />
        </div>
        <div className="mt-10">
          <Testimonials />
        </div>
      </div>
    </main>
  );
}
