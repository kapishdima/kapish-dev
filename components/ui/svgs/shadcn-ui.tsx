"use client";

import { useTheme } from "next-themes";
import { ShadcnUiDark } from "@/components/ui/svgs/shadcn-ui-dark";
import { ShadcnUiLight } from "@/components/ui/svgs/shadcn-ui-light";

const icons = {
  light: <ShadcnUiLight />,
  dark: <ShadcnUiDark />,
};

export const ShadcnUi = () => {
  const { resolvedTheme } = useTheme();

  if (!resolvedTheme) {
    return icons.light;
  }

  return icons[resolvedTheme as keyof typeof icons] || icons.light;
};
