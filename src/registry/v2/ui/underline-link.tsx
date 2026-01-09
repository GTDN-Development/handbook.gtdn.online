"use client";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Link, type LinkProps } from "./link";

const underlineLinkVariants = cva("relative min-h-max max-w-max min-w-max whitespace-nowrap", {
  variants: {
    variant: {
      "appear-bottom": [
        // Basic styling
        "before:absolute before:w-full",
        // Transition
        "before:transform-gpu before:transition before:duration-200",
        // Initial state
        "before:inset-x-0 before:top-[105%] before:h-px before:origin-center before:translate-y-[-0.2875em] before:bg-current/0",
        // Hover state
        "hover:before:translate-y-0 hover:before:bg-current/60",
      ],
      "slide-back": [
        // Basic styling
        "before:absolute before:w-full",
        "after:absolute after:w-full",
        // Transition
        "before:transform-gpu before:transition before:duration-300",
        "after:transform-gpu after:transition after:duration-300",
        // Initial state
        "before:inset-x-0 before:top-[105%] before:h-px before:origin-left before:scale-x-100 before:bg-current/60",
        "after:inset-x-0 after:top-[105%] after:h-px after:origin-right after:scale-x-0 after:bg-current/60",
        // Hover state
        "hover:before:origin-right hover:before:scale-x-0 hover:before:bg-current/60",
        "hover:after:origin-left hover:after:scale-x-100 hover:after:bg-current/60 hover:after:delay-300",
      ],
    },
  },
  defaultVariants: {
    variant: "appear-bottom",
  },
});

function UnderlineLink({
  className,
  variant,
  ...props
}: LinkProps & VariantProps<typeof underlineLinkVariants>) {
  return <Link {...props} className={cn(underlineLinkVariants({ variant, className }))} />;
}

export { UnderlineLink, underlineLinkVariants };
