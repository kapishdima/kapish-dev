import type React from "react";

export type SponsorTierId = "gold" | "silver" | "bronze";

export interface Sponsor {
  logo: React.ReactNode;
  name: string;
  tier: SponsorTierId;
  websiteUrl: string;
}

export interface SponsorTier {
  description: string;
  id: SponsorTierId;
  links: {
    monthly: string;
    oneTime: string;
  };
  logoSize: number;
  monthlyPrice: number;
  name: string;
  oneTimePrice: number;
  perks: string[];
  placeholderSlots: number;
}

export const sponsorTiers: SponsorTier[] = [
  {
    id: "bronze",
    name: "Bronze",
    description: "A small thank-you that keeps the lights on.",
    monthlyPrice: 5,
    oneTimePrice: 49,
    perks: ["Name on README"],
    logoSize: 22,
    placeholderSlots: 4,
    links: {
      monthly: "",
      oneTime: "",
    },
  },
  {
    id: "silver",
    name: "Silver",
    description: "For independent makers who want to back the work.",
    monthlyPrice: 19,
    oneTimePrice: 199,
    perks: ["Logo on README", "Monthly progress shoutout"],
    logoSize: 28,
    placeholderSlots: 3,
    links: {
      monthly: "",
      oneTime: "",
    },
  },
  {
    id: "gold",
    name: "Gold",
    description: "For companies and power-users. Logo + thanks in the README.",
    monthlyPrice: 49,
    oneTimePrice: 499,
    perks: [
      "Logo on README and homepage",
      "Priority support over DM",
      "Monthly progress shoutout",
    ],
    logoSize: 36,
    placeholderSlots: 2,
    links: {
      monthly: "",
      oneTime: "",
    },
  },
];

export const sponsors: Sponsor[] = [];

export const sponsorshipGoal = {
  currentMrr: 0,
  goalMrr: 2000,
  currency: "USD",
} as const;
