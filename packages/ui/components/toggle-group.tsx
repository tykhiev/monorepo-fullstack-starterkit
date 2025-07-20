"use client";

import {
  Item as ToggleGroupItemPrimitive,
  Root as ToggleGroupRoot,
} from "@radix-ui/react-toggle-group";
import type { VariantProps } from "class-variance-authority";
import { type ComponentPropsWithRef, createContext, useContext } from "react";

import { toggleVariants } from "@pkgs/ui/components/toggle";
import { cn } from "@pkgs/ui/lib/cn";

const ToggleGroupContext = createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = ({
  ref,
  className,
  variant,
  size,
  children,
  ...props
}: ComponentPropsWithRef<typeof ToggleGroupRoot> &
  VariantProps<typeof toggleVariants>) => (
  <ToggleGroupRoot
    className={cn("flex items-center justify-center gap-1", className)}
    ref={ref}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupRoot>
);

ToggleGroup.displayName = ToggleGroupRoot.displayName;

const ToggleGroupItem = ({
  ref,
  className,
  children,
  variant,
  size,
  ...props
}: ComponentPropsWithRef<typeof ToggleGroupItemPrimitive> &
  VariantProps<typeof toggleVariants>) => {
  const context = useContext(ToggleGroupContext);

  return (
    <ToggleGroupItemPrimitive
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: (context.size ?? -1 > 0) ? context.size : size,
        }),
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </ToggleGroupItemPrimitive>
  );
};

ToggleGroupItem.displayName = ToggleGroupItemPrimitive.displayName;

export { ToggleGroup, ToggleGroupItem };
