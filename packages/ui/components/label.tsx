"use client";

import { Root as LabelRoot } from "@radix-ui/react-label";
import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

import { cn } from "@pkgs/ui/lib/cn";

const labelVariants = cva(
  "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const Label = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof LabelRoot> &
  VariantProps<typeof labelVariants>) => (
  <LabelRoot
    className={cn(labelVariants(), className)}
    ref={ref}
    {...props}
  />
);
Label.displayName = LabelRoot.displayName;

export { Label };
