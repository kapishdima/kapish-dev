import type React from "react";
import { SponsorDialog } from "@/app/(portfolio)/components/sponsor-dialog";
import { Progress } from "@/components/ui/progress";
import { sponsors, sponsorshipGoal, sponsorTiers } from "@/lib/config/sponsors";

const computePercent = (current: number, goal: number) => {
  if (goal <= 0) {
    return 0;
  }
  return Math.min(100, Math.round((current / goal) * 100));
};

export const Sponsors: React.FC = () => {
  const percent = computePercent(
    sponsorshipGoal.currentMrr,
    sponsorshipGoal.goalMrr
  );

  return (
    <section className="space-y-6">
      <p className="text-pretty text-sm">
        Working toward the goal of building only open-source projects
      </p>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-muted-foreground text-xs">
          <span>Monthly sponsorship</span>
          <span className="tabular-nums">
            ${sponsorshipGoal.currentMrr} / ${sponsorshipGoal.goalMrr} MRR
          </span>
        </div>
        <Progress className="h-1.5" value={percent} />
      </div>

      <div className="space-y-4">
        {sponsorTiers.map((tier) => {
          const tierSponsors = sponsors.filter((s) => s.tier === tier.id);
          const slotStyle = { width: tier.logoSize, height: tier.logoSize };

          return (
            <div
              className="grid grid-cols-[56px_1fr] items-center gap-4"
              key={tier.id}
            >
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                {tier.name}
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {tierSponsors.length > 0
                  ? tierSponsors.map((sponsor) => (
                      <a
                        aria-label={sponsor.name}
                        className="inline-flex items-center justify-center rounded-md text-muted-foreground opacity-70 grayscale hover:text-foreground hover:opacity-100 hover:grayscale-0"
                        href={sponsor.websiteUrl}
                        key={sponsor.name}
                        rel="noopener"
                        style={slotStyle}
                        target="_blank"
                        title={sponsor.name}
                      >
                        {sponsor.logo}
                      </a>
                    ))
                  : Array.from(
                      { length: tier.placeholderSlots },
                      (_, i) => `${tier.id}-placeholder-${i}`
                    ).map((slotKey) => (
                      <div
                        aria-hidden="true"
                        className="rounded-md border border-border/60 border-dashed"
                        key={slotKey}
                        style={slotStyle}
                      />
                    ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-end">
        <SponsorDialog />
      </div>
    </section>
  );
};
