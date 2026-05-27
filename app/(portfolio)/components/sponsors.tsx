import { IconPlus } from "@tabler/icons-react";
import type React from "react";
import { SponsorDialog } from "@/app/(portfolio)/components/sponsor-dialog";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Progress } from "@/components/ui/progress";
import { sponsors, sponsorshipGoal } from "@/lib/config/sponsors";

const computePercent = (current: number, goal: number) => {
  if (goal <= 0) {
    return 0;
  }
  return Math.min(100, Math.round((current / goal) * 100));
};

const goldSponsors = sponsors.filter((s) => s.tier === "gold");

export const Sponsors: React.FC = () => {
  const percent = computePercent(
    sponsorshipGoal.currentMrr,
    sponsorshipGoal.goalMrr
  );
  const hasGoldSponsors = goldSponsors.length > 0;

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-pretty text-muted-foreground text-xs">
          <span>
            Working toward the goal of building only open-source projects
          </span>
          <div className="flex items-center gap-2">
            <span className="tabular-nums">
              ${sponsorshipGoal.currentMrr} / ${sponsorshipGoal.goalMrr} MRR
            </span>
          </div>
        </div>
        <Progress className="h-1.5" value={percent} />
      </div>

      {hasGoldSponsors && (
        <div className="grid grid-cols-3 gap-3">
          {goldSponsors.map((sponsor) => (
            <a
              aria-label={sponsor.name}
              className={
                "inline-flex aspect-6/2 items-center justify-center rounded-md bg-muted/50 text-muted-foreground opacity-70 grayscale hover:text-foreground hover:opacity-100 hover:grayscale-0"
              }
              href={sponsor.websiteUrl}
              key={sponsor.name}
              rel="noopener sponsored"
              target="_blank"
              title={sponsor.name}
            >
              {/* biome-ignore lint/performance/noImgElement: sponsor logos may load from external CDNs without a Next config entry */}
              <img
                alt={sponsor.name}
                className={`max-h-10 w-auto max-w-[60%] object-contain ${sponsor.className || ""}`}
                height={40}
                src={sponsor.logo}
                width={120}
              />
            </a>
          ))}
        </div>
      )}
      <ItemGroup>
        <Item variant="muted">
          <ItemMedia variant="icon">
            <div
              aria-hidden="true"
              className="inline-flex size-9 items-center justify-center rounded-md border border-border/60 border-dashed text-muted-foreground/60"
            >
              <IconPlus className="size-3.5" />
            </div>
          </ItemMedia>
          <ItemContent className="gap-0">
            <ItemTitle>Support my work</ItemTitle>
            <ItemDescription>
              Help keep this work open. Logos appear here once you sponsor
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <SponsorDialog />
          </ItemActions>
        </Item>
      </ItemGroup>
    </section>
  );
};
