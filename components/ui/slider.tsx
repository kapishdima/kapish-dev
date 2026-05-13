"use client";

import { Slider as SliderPrimitive } from "radix-ui";
import { type ComponentProps, useMemo } from "react";

import { cn } from "@/lib/utils";

function resolveSliderValues(
  value: number[] | undefined,
  defaultValue: number[] | undefined,
  min: number,
  max: number
): number[] {
  if (Array.isArray(value)) {
    return value;
  }
  if (Array.isArray(defaultValue)) {
    return defaultValue;
  }
  return [min, max];
}

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = useMemo(
    () => resolveSliderValues(value, defaultValue, min, max),
    [value, defaultValue, min, max]
  );
  const thumbKeys = useMemo(
    () => Array.from({ length: _values.length }, () => crypto.randomUUID()),
    [_values.length]
  );

  return (
    <SliderPrimitive.Root
      className={cn(
        "relative flex w-full touch-none select-none items-center data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col data-disabled:opacity-50",
        className
      )}
      data-slot="slider"
      defaultValue={defaultValue}
      max={max}
      min={min}
      value={value}
      {...props}
    >
      <SliderPrimitive.Track
        className="relative grow overflow-hidden rounded-none bg-muted data-horizontal:h-1 data-vertical:h-full data-horizontal:w-full data-vertical:w-1"
        data-slot="slider-track"
      >
        <SliderPrimitive.Range
          className="absolute select-none bg-primary data-horizontal:h-full data-vertical:w-full"
          data-slot="slider-range"
        />
      </SliderPrimitive.Track>
      {thumbKeys.map((thumbKey) => (
        <SliderPrimitive.Thumb
          className="relative block size-3 shrink-0 select-none rounded-none border border-ring bg-white ring-ring/50 transition-[color,box-shadow] after:absolute after:-inset-2 hover:ring-1 focus-visible:outline-hidden focus-visible:ring-1 active:ring-1 disabled:pointer-events-none disabled:opacity-50"
          data-slot="slider-thumb"
          key={thumbKey}
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
