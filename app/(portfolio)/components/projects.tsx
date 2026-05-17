import { GithubIcon, Link03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type React from "react";
import { projects } from "@/lib/config/portfolio";

export const Projects: React.FC = () => (
  <div className="mt-8 mb-4">
    <h2 className="mb-2 text-lg">Projects</h2>
    <ul className="divide-y divide-border/60">
      {projects.map((project) => (
        <li
          className="flex items-start justify-between gap-4 py-4"
          key={project.name}
        >
          <div className="min-w-0">
            <a
              className="font-medium text-sm underline-offset-4 hover:underline"
              href={project.websiteUrl}
              rel="noopener"
              target="_blank"
            >
              {project.name}
            </a>
            <p className="mt-1 text-muted-foreground text-xs leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-x-2">
            <a
              aria-label={`${project.name} website`}
              className="text-muted-foreground transition-colors hover:text-foreground"
              href={project.websiteUrl}
              rel="noopener"
              target="_blank"
            >
              <HugeiconsIcon
                color="currentColor"
                icon={Link03Icon}
                size={14}
                strokeWidth={1.5}
              />
            </a>
            <a
              aria-label={`${project.name} on GitHub`}
              className="text-muted-foreground transition-colors hover:text-foreground"
              href={project.githubUrl}
              rel="noopener"
              target="_blank"
            >
              <HugeiconsIcon
                color="currentColor"
                icon={GithubIcon}
                size={14}
                strokeWidth={1.5}
              />
            </a>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
