import { IconCheck } from "@tabler/icons-react";
import type React from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type SponsorTier, sponsorTiers } from "@/lib/config/sponsors";

type Cadence = "monthly" | "one-time";

const TierCard: React.FC<{ tier: SponsorTier; cadence: Cadence }> = ({
  tier,
  cadence,
}) => {
  const price = cadence === "monthly" ? tier.monthlyPrice : tier.oneTimePrice;
  const link = cadence === "monthly" ? tier.links.monthly : tier.links.oneTime;

  return (
    <Card className="h-full" size="sm">
      <CardHeader>
        <CardTitle>{tier.name}</CardTitle>
        <CardDescription className="text-pretty text-xs">
          {tier.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex items-baseline gap-1">
          <span className="font-semibold text-2xl tabular-nums">${price}</span>
          <span className="text-muted-foreground text-xs">
            {cadence === "monthly" ? "/mo" : "one-time"}
          </span>
        </div>
        <ul className="mt-3 space-y-1 text-muted-foreground text-xs">
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

export const SponsorDialog: React.FC = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button size="sm">Become a sponsor</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-2xl">
      <DialogHeader>
        <DialogTitle>Become a sponsor</DialogTitle>
        <DialogDescription>
          Support the work. Pick a tier and a cadence
        </DialogDescription>
      </DialogHeader>
      <Tabs defaultValue="monthly">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="one-time">One-time</TabsTrigger>
        </TabsList>
        <TabsContent value="monthly">
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {sponsorTiers.map((tier) => (
              <TierCard cadence="monthly" key={tier.id} tier={tier} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="one-time">
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {sponsorTiers.map((tier) => (
              <TierCard cadence="one-time" key={tier.id} tier={tier} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </DialogContent>
  </Dialog>
);
