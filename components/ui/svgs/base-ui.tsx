"use client";

import { useTheme } from "next-themes";
import { BaseUiDark } from "@/components/ui/svgs/base-ui-dark";
import { BaseUiLight } from "@/components/ui/svgs/base-ui-light";

const icons = {
  light: <BaseUiLight />,
  dark: <BaseUiDark />,
} as const;

export const BaseUi = () => {
  const { resolvedTheme } = useTheme();

  if (!resolvedTheme) {
    return icons.light;
  }

  return icons[resolvedTheme as keyof typeof icons];
};
