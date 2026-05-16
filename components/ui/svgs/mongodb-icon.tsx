"use client";

import { useTheme } from "next-themes";
import { MongodbIconDark } from "@/components/ui/svgs/mongodb-icon-dark";
import { MongodbIconLight } from "@/components/ui/svgs/mongodb-icon-light";

const icons = {
  light: <MongodbIconLight />,
  dark: <MongodbIconDark />,
} as const;

export const MongodbIcon = () => {
  const { resolvedTheme } = useTheme();

  if (!resolvedTheme) {
    return icons.light;
  }

  return icons[resolvedTheme as keyof typeof icons];
};
