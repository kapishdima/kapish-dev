import { Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { IconArrowUpRight } from "@tabler/icons-react";
import type React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/components/ui/item";
import { Discord } from "@/components/ui/svgs/discord";
import { Github } from "@/components/ui/svgs/github";
import { Telegram } from "@/components/ui/svgs/telegram";
import { XIcon } from "@/components/ui/svgs/x";
import { contacts } from "@/lib/config/portfolio";
import { projects } from "@/lib/config/projects";

export const Projects: React.FC = async () => (
  <ItemGroup>
    {projects.map(async (project) => {
      const stars = await project.stars();
      return (
        <Item
          className="items-start px-4 py-3"
          key={project.name}
          variant="muted"
        >
          <ItemContent>
            <ItemTitle>{project.name}</ItemTitle>
            <ItemDescription>{project.description}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button asChild size="xs" variant="secondary">
              <a
                aria-label={`${project.name} on GitHub`}
                href={project.githubUrl}
                rel="noopener"
                target="_blank"
              >
                <span className="mr-1 font-mono text-xs tabular-nums">
                  {stars}
                </span>
                <Github />
              </a>
            </Button>
            <Button asChild size="icon-xs" variant="secondary">
              <a
                aria-label={`${project.name} website`}
                href={project.websiteUrl}
                rel="noopener"
                target="_blank"
              >
                <IconArrowUpRight className="size-4" />
              </a>
            </Button>
          </ItemActions>
        </Item>
      );
    })}
    <Item variant="muted">
      <ItemContent>
        <ItemTitle>Let’s add your project here</ItemTitle>
      </ItemContent>
      <ItemActions>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Contact with me</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-40">
            <DropdownMenuGroup>
              {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
              <DropdownMenuItem asChild>
                <a href={contacts.twitterDM} rel="noopener" target="_blank">
                  <XIcon />
                  Twitter DM
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={contacts.discord} rel="noopener" target="_blank">
                  <Discord />
                  Discord
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={contacts.telegram} rel="noopener" target="_blank">
                  <Telegram />
                  Telegram
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={`mailto:${contacts.email}`}>
                  <HugeiconsIcon
                    color="currentColor"
                    icon={Mail01Icon}
                    size={12}
                    strokeWidth={2}
                  />
                  Email
                </a>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ItemActions>
    </Item>
  </ItemGroup>
);
