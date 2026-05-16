"use client";

import {
  DiscordIcon,
  GithubIcon,
  Link03Icon,
  Location01Icon,
  Mail01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type HugeiconsIconProps } from "@hugeicons/react";
import { contacts } from "@/lib/config/portfolio";

export const IntroItem = ({
  icon,
  text,
  href,
}: {
  icon: HugeiconsIconProps["icon"];
  text: string;
  href: string;
}) => (
  <div className="flex items-center gap-x-3">
    <div className="flex items-center justify-center rounded-sm border border-gray-200 bg-gray-100 p-1.5 text-gray-900">
      <HugeiconsIcon
        color="currentColor"
        icon={icon}
        size={12}
        strokeWidth={1.5}
      />
    </div>
    <a className="link text-sm" href={href} rel="noopener" target="_blank">
      {text}
    </a>
  </div>
);

export const IntroGrid: React.FC = () => (
  <div className="mt-5 mb-10 grid grid-cols-3 gap-2">
    <IntroItem
      href={contacts.location}
      icon={Location01Icon}
      text="Ukraine, Odessa"
    />
    <IntroItem
      href={`mailto:${contacts.email}`}
      icon={Mail01Icon}
      text={contacts.email}
    />
    <IntroItem
      href={contacts.website}
      icon={Link03Icon}
      text={contacts.website}
    />
    <IntroItem
      href={contacts.twitter}
      icon={NewTwitterIcon}
      text="@kapish_dima"
    />
    <IntroItem
      href={contacts.github}
      icon={GithubIcon}
      text="github.com/kapishdima"
    />
    <IntroItem
      href={contacts.discord}
      icon={DiscordIcon}
      text="discord.com/kapishdima"
    />
  </div>
);
