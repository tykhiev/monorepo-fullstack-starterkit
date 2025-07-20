"use client";

import { Root as ToggleRoot } from "@radix-ui/react-toggle";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@pkgs/ui/lib/cn";
import type { ComponentPropsWithRef } from "react";

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium text-sm ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 min-w-10 px-3",
        sm: "h-9 min-w-9 px-2.5",
        lg: "h-11 min-w-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Toggle = ({
  ref,
  className,
  variant,
  size,
  ...props
}: ComponentPropsWithRef<typeof ToggleRoot> &
  VariantProps<typeof toggleVariants>) => (
  <ToggleRoot
    className={cn(toggleVariants({ variant, size, className }))}
    ref={ref}
    {...props}
  />
);

Toggle.displayName = ToggleRoot.displayName;

export { Toggle, toggleVariants };
