"use client";

import { Root as SeparatorRoot } from "@radix-ui/react-separator";
import React from "react";

import { cn } from "@pkgs/ui/lib/cn";

const Separator = ({
  ref,
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentPropsWithRef<typeof SeparatorRoot>) => (
  <SeparatorRoot
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className,
    )}
    decorative={decorative}
    orientation={orientation}
    ref={ref}
    {...props}
  />
);
Separator.displayName = SeparatorRoot.displayName;

export { Separator };
