import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function Testimonial({ className, ...props }: ComponentProps<"figure">) {
  return (
    <figure
      className={cn("flex h-full flex-col", className)}
      data-slot="testimonial"
      {...props}
    />
  );
}

export function TestimonialQuote({
  className,
  ...props
}: ComponentProps<"blockquote">) {
  return (
    <blockquote
      className={cn(
        "grow text-pretty px-4 py-3 text-foreground text-sm",
        className
      )}
      data-slot="testimonial-quote"
      {...props}
    />
  );
}

export function TestimonialAuthor({
  className,
  ...props
}: ComponentProps<"figcaption">) {
  return (
    <figcaption
      className={cn(
        "grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-x-3.5 px-4 pt-1 pb-3",
        className
      )}
      data-slot="testimonial-author"
      {...props}
    />
  );
}

export function TestimonialAvatar({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn("relative row-span-2 size-8 shrink-0", className)}
      data-slot="testimonial-avatar"
      {...props}
    />
  );
}

export function TestimonialAvatarImg({
  className,
  src,
  alt,
  ...props
}: ComponentProps<"img">) {
  return (
    // biome-ignore lint/correctness/useImageSize: <external lib>
    // biome-ignore lint/performance/noImgElement: <external lib>
    <img
      alt={alt}
      className={cn("size-8 select-none rounded-full", className)}
      data-slot="testimonial-avatar-img"
      src={src}
      {...props}
    />
  );
}

export function TestimonialAvatarRing({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 inset-ring-1 inset-ring-black/10 rounded-full dark:inset-ring-white/15",
        className
      )}
      data-slot="testimonial-avatar-ring"
      {...props}
    />
  );
}

export function TestimonialAuthorName({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 font-semibold text-foreground text-sm leading-4.5",
        className
      )}
      data-slot="testimonial-author-name"
      {...props}
    />
  );
}

export function TestimonialAuthorTagline({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-balance text-muted-foreground text-xs leading-4",
        className
      )}
      data-slot="testimonial-author-tagline"
      {...props}
    />
  );
}

export function TestimonialVerifiedBadge({
  className,
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex [&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-slot="testimonial-verified-badge"
      {...props}
    />
  );
}
