"use client";

import { useTheme } from "next-themes";
import { Kbd } from "@/components/ui/kbd";
import { MoonIcon } from "@/components/ui/moon";
import { SunIcon } from "@/components/ui/sun";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            aria-label="Toggle Mode"
            className="border-none"
            onClick={() => switchTheme()}
            size="icon-sm"
            variant="ghost"
          >
            <MoonIcon
              className={cn("relative hidden after:absolute after:-inset-2", [
                resolvedTheme === "dark" && "block",
              ])}
            />
            <SunIcon
              className={cn("relative hidden after:absolute after:-inset-2", [
                resolvedTheme === "light" && "block",
              ])}
            />
          </Button>
        }
      />
      <TooltipContent className="pr-2 pl-3">
        <div className="flex items-center gap-3">
          Toggle Mode
          <Kbd>D</Kbd>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
