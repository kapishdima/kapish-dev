"use client";

import { HugeiconsIcon, type HugeiconsIconProps } from "@hugeicons/react";

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
