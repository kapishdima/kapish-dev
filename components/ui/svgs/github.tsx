"use client";

import { useTheme } from "next-themes";
import { GithubDark } from "@/components/ui/svgs/github-dark";
import { GithubLight } from "@/components/ui/svgs/github-light";

const icons = {
  light: <GithubLight />,
  dark: <GithubDark />,
} as const;

export const Github = () => {
  const { resolvedTheme } = useTheme();

  if (!resolvedTheme) {
    return icons.light;
  }

  return icons[resolvedTheme as keyof typeof icons];
};
