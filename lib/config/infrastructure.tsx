import {
  IconArchive,
  IconBrandTelegram,
  IconStack2,
} from "@tabler/icons-react";
import type React from "react";
import { Beszel } from "@/components/ui/svgs/beszel";
import { Coolify } from "@/components/ui/svgs/coolify";
import { OpenPanel } from "@/components/ui/svgs/openpanel";

export interface InfrastructureService {
  description: string;
  handle?: string;
  icon: React.ReactNode;
  name: string;
  websiteUrl: string;
}

export interface InfrastructureOp {
  icon: React.ReactNode;
  label: string;
}

export const vpsSpecs = {
  cpu: "8 vCPU",
  provider: "Hetzner",
  ram: "16 GB RAM",
  storage: "320 GB SSD",
  tagline: "AMD · Shared",
} as const;

export const infrastructureServices: InfrastructureService[] = [
  {
    name: "Coolify",
    handle: "@coolifyio",
    description: "Application platform — deploys, env, domains",
    websiteUrl: "https://coolify.io",
    icon: <Coolify className="size-4" />,
  },
  {
    name: "OpenPanel",
    handle: "@OpenPanelDev",
    description: "Product analytics, privacy-first",
    websiteUrl: "https://openpanel.dev",
    icon: <OpenPanel className="size-4" />,
  },
  {
    name: "Beszel",
    description: "Lightweight server & container monitoring",
    websiteUrl: "https://beszel.dev",
    icon: <Beszel className="size-4" />,
  },
];

export const infrastructureOps: InfrastructureOp[] = [
  {
    label: "Telegram alerts",
    icon: <IconBrandTelegram className="size-3" />,
  },
  {
    label: "Daily backups",
    icon: <IconArchive className="size-3" />,
  },
  {
    label: "Staging + Production",
    icon: <IconStack2 className="size-3" />,
  },
];
