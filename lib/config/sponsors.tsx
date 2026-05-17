export type SponsorTierId = "gold" | "silver" | "bronze";

export interface Sponsor {
  logo: string;
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
  monthlyPrice: number;
  name: string;
  oneTimePrice: number;
  perks: string[];
}

export const sponsorTiers: SponsorTier[] = [
  {
    id: "gold",
    name: "Gold",
    description: "For companies and power-users",
    monthlyPrice: 50,
    oneTimePrice: 50,
    perks: [
      "Logo on README and homepage",
      "Priority support over DM",
      "Monthly progress shoutout",
    ],
    links: {
      monthly: "https://www.creem.io/payment/prod_58v8QqGfXU1f2VNzCvS8Qo",
      oneTime: "https://www.creem.io/payment/prod_2PA8ztbNyAhQxmlfMLtjHY",
    },
  },
  {
    id: "silver",
    name: "Silver",
    description: "For independent makers who want to back the work",
    monthlyPrice: 10,
    oneTimePrice: 10,
    perks: ["Logo on README", "Monthly progress shoutout"],
    links: {
      monthly: "https://www.creem.io/payment/prod_kC446LjEQ85KQNaN5jZGg",
      oneTime: "https://www.creem.io/payment/prod_4NqBYuXznPq6ejo7p1ouCj",
    },
  },
  {
    id: "bronze",
    name: "Bronze",
    description: "A small thank-you that keeps the lights on",
    monthlyPrice: 5,
    oneTimePrice: 5,
    perks: ["Name on README"],
    links: {
      monthly: "https://www.creem.io/payment/prod_47WYLYBCDAnMHVfcunOj2V",
      oneTime: "https://www.creem.io/payment/prod_26TrZN25ZeXZrsvhZsIQgx",
    },
  },
];

export const sponsors: Sponsor[] = [
  // {
  //   name: "SlidesAI",
  //   logo: "/sponsors/slidesai-logo.svg",
  //   websiteUrl:
  //     "https://www.slidesai.io?utm_source=fonttrio&utm_medium=sponsor&utm_campaign=fonttrio_sponsors_page",
  //   tier: "gold",
  // },
];

export const sponsorshipGoal = {
  currentMrr: 0,
  goalMrr: 2000,
  currency: "USD",
} as const;
