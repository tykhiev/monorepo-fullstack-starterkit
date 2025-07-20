"use client";
import {
  Range as SliderRange,
  Root as SliderRoot,
  Thumb as SliderThumb,
  Track as SliderTrack,
} from "@radix-ui/react-slider";
import React, { type ComponentRef, useId } from "react";

import { cn } from "@pkgs/ui/lib/cn";

interface SliderProps extends React.ComponentProps<typeof SliderRoot> {
  labelPosition?: "top" | "bottom";
  label?: (value: number | undefined) => React.ReactNode;
}

const Slider = React.forwardRef<ComponentRef<typeof SliderRoot>, SliderProps>(
  ({ className, label, labelPosition = "top", ...props }, ref) => {
    const initialValue = Array.isArray(props.value)
      ? props.value
      : [props.min, props.max];

    return (
      <SliderRoot
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className,
        )}
        ref={ref}
        {...props}
      >
        <SliderTrack className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
          <SliderRange className="absolute h-full bg-primary" />
        </SliderTrack>
        {initialValue.map((value) => (
          <React.Fragment key={useId()}>
            <SliderThumb className="relative block h-4 w-4 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              {label && (
                <span
                  className={cn(
                    "absolute flex w-full justify-center",
                    labelPosition === "top" && "-top-7",
                    labelPosition === "bottom" && "top-4",
                  )}
                >
                  {label(value)}
                </span>
              )}
            </SliderThumb>
          </React.Fragment>
        ))}
      </SliderRoot>
    );
  },
);
Slider.displayName = "Slider";

export { Slider };
