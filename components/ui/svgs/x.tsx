"use client";

import { useTheme } from "next-themes";
import { XDark } from "@/components/ui/svgs/x-dark";
import { XLight } from "@/components/ui/svgs/x-light";

const icons = {
  light: <XLight />,
  dark: <XDark />,
} as const;

export const XIcon = () => {
  const { resolvedTheme } = useTheme();

  if (!resolvedTheme) {
    return icons.light;
  }

  return icons[resolvedTheme as keyof typeof icons];
};
