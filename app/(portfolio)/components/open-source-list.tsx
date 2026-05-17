"use client";

import {
  IconArrowUpRight,
  IconChevronDown,
  IconGitPullRequest,
} from "@tabler/icons-react";
import { useState } from "react";
import { MarqueeFadeBottom } from "@/components/kibo-ui/marquee";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import type { OpenPullRequest } from "@/lib/data/get-cached-open-prs";
import { cn } from "@/lib/utils";

const INITIAL_VISIBLE_COUNT = 3;

interface OpenSourceListProps {
  prs: OpenPullRequest[];
}

export const OpenSourceList = ({ prs }: OpenSourceListProps) => {
  const [open, setOpen] = useState(false);

  const visiblePrs = prs.slice(0, INITIAL_VISIBLE_COUNT);
  const hiddenPrs = prs.slice(INITIAL_VISIBLE_COUNT);
  const hasMore = hiddenPrs.length > 0;

  if (!hasMore) {
    return (
      <ItemGroup>
        {prs.map((pr) => (
          <OpenSourceItem key={pr.id} pr={pr} />
        ))}
      </ItemGroup>
    );
  }

  return (
    <Collapsible onOpenChange={setOpen} open={open}>
      <div className="relative">
        <ItemGroup>
          {visiblePrs.map((pr) => (
            <OpenSourceItem key={pr.id} pr={pr} />
          ))}
        </ItemGroup>

        {!open && <MarqueeFadeBottom aria-hidden className="h-20" />}

        <CollapsibleContent className="overflow-hidden data-closed:animate-collapsible-up data-open:animate-collapsible-down">
          <ItemGroup className="h-(--radix-collapsible-content-height) pt-4">
            {hiddenPrs.map((pr) => (
              <OpenSourceItem key={pr.id} pr={pr} />
            ))}
          </ItemGroup>
        </CollapsibleContent>
      </div>

      <div className="mt-4 flex justify-center">
        <CollapsibleTrigger asChild>
          <Button size="sm" variant="secondary">
            {open ? "Show less" : `Show ${hiddenPrs.length} more`}
            <IconChevronDown
              className={cn(
                "size-3.5 transition-transform duration-200",
                open && "rotate-180"
              )}
            />
          </Button>
        </CollapsibleTrigger>
      </div>
    </Collapsible>
  );
};

const OpenSourceItem = ({ pr }: { pr: OpenPullRequest }) => (
  <Item className="items-start gap-3 px-4 py-3" variant="muted">
    <ItemMedia
      aria-hidden
      className="mt-0.5 flex size-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
    >
      <IconGitPullRequest className="size-3.5" />
    </ItemMedia>
    <ItemContent className="min-w-0">
      <ItemTitle className="flex w-full items-center gap-2">
        <span className="truncate font-mono text-xs">{pr.repository}</span>
        <span className="font-mono text-muted-foreground text-xs">
          #{pr.number}
        </span>
      </ItemTitle>
      <ItemDescription>{pr.title}</ItemDescription>
    </ItemContent>
    <ItemActions>
      <Button asChild size="icon-xs" variant="secondary">
        <a
          aria-label={`Pull request #${pr.number} in ${pr.repository}`}
          href={pr.htmlUrl}
          rel="noopener"
          target="_blank"
        >
          <IconArrowUpRight className="size-4" />
        </a>
      </Button>
    </ItemActions>
  </Item>
);
