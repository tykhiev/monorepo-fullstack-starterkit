"use client";

import {
  Indicator as ProgressIndicator,
  Root as ProgressRoot,
} from "@radix-ui/react-progress";
import React from "react";

import { cn } from "@pkgs/ui/lib/cn";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressRoot>,
  React.ComponentPropsWithRef<typeof ProgressRoot> & { indicatorColor?: string }
>(({ className, value, indicatorColor = "#3b82f6", ...props }, ref) => (
  <ProgressRoot
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary", // Default background color for the root
      className,
    )}
    ref={ref}
    {...props}
  >
    <ProgressIndicator
      className="h-full w-full flex-1 transition-all"
      style={{
        width: `${value || 0}%`, // Set width based on value
        backgroundColor: indicatorColor, // Set the indicator color
      }}
    />
  </ProgressRoot>
));

Progress.displayName = ProgressRoot.displayName;

export { Progress };
