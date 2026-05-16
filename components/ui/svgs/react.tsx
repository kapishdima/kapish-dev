"use client";

import { useTheme } from "next-themes";
import { ReactDark } from "@/components/ui/svgs/react-dark";
import { ReactLight } from "@/components/ui/svgs/react-light";

const icons = {
  light: <ReactLight />,
  dark: <ReactDark />,
} as const;

export const React = () => {
  const { resolvedTheme } = useTheme();

  if (!resolvedTheme) {
    return icons.light;
  }

  return icons[resolvedTheme as keyof typeof icons];
};
