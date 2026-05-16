"use client";

import { useTheme } from "next-themes";
import { RadixUiDark } from "@/components/ui/svgs/radix-ui-dark";
import { RadixUiLight } from "@/components/ui/svgs/radix-ui-light";

const icons = {
  light: <RadixUiLight />,
  dark: <RadixUiDark />,
} as const;

export const RadixUi = () => {
  const { resolvedTheme } = useTheme();

  if (!resolvedTheme) {
    return icons.light;
  }

  return icons[resolvedTheme as keyof typeof icons];
};
