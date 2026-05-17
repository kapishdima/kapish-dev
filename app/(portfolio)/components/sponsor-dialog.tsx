"use client";

import { IconCheck } from "@tabler/icons-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { type SponsorTier, sponsorTiers } from "@/lib/config/sponsors";
import { cn } from "@/lib/utils";

type Cadence = "monthly" | "one-time";

const TierCard: React.FC<{
  tier: SponsorTier;
  cadence: Cadence;
}> = ({ tier, cadence }) => {
  const price = cadence === "monthly" ? tier.monthlyPrice : tier.oneTimePrice;
  const link = cadence === "monthly" ? tier.links.monthly : tier.links.oneTime;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{tier.name}</CardTitle>
        <CardDescription className="text-pretty text-xs">
          {tier.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex items-baseline gap-1">
          <span className="font-semibold text-3xl tabular-nums">${price}</span>
          <span className="text-muted-foreground text-xs">
            {cadence === "monthly" ? "/mo" : "one-time"}
          </span>
        </div>
        <ul className="mt-4 space-y-2 text-muted-foreground text-xs">
          {tier.perks.map((perk) => (
            <li className="flex items-start gap-1.5" key={perk}>
              <IconCheck
                aria-hidden="true"
                className="mt-0.5 size-3 shrink-0"
              />
              <span>{perk}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" size="sm">
          <a href={link} rel="noopener" target="_blank">
            Sponsor
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export const SponsorDialog: React.FC = () => {
  const [cadence, setCadence] = useState<Cadence>("monthly");

  return (
    <Dialog>
      <DialogTrigger>
        <Button size="sm">Become a sponsor</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader className="mb-0">
          <DialogTitle>Become a sponsor</DialogTitle>
          <DialogDescription>
            Support the work. Pick a tier and a cadence.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-end gap-3">
          <Label
            className={cn(
              "cursor-pointer text-sm",
              cadence === "monthly"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
            htmlFor="cadence-switch"
          >
            Monthly
          </Label>
          <Switch
            checked={cadence === "one-time"}
            id="cadence-switch"
            onCheckedChange={(checked) =>
              setCadence(checked ? "one-time" : "monthly")
            }
          />
          <Label
            className={cn(
              "cursor-pointer text-sm",
              cadence === "one-time"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
            htmlFor="cadence-switch"
          >
            One-time
          </Label>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {sponsorTiers.map((tier) => (
            <TierCard cadence={cadence} key={tier.id} tier={tier} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
