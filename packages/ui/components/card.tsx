"use client";
import { cn } from "@pkgs/ui/lib/cn";
import React from "react";

// Original Card component (unchanged from shadcn)
const Card = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-xs",
      className,
    )}
    ref={ref}
    {...props}
  />
);
Card.displayName = "Card";

const CardHeader = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    ref={ref}
    {...props}
  />
);
CardHeader.displayName = "CardHeader";

const CardTitle = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div
    className={cn(
      "font-semibold text-xl leading-none tracking-tight",
      className,
    )}
    ref={ref}
    {...props}
  />
);
CardTitle.displayName = "CardTitle";

// CardDescription (unchanged)
const CardDescription = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div
    className={cn("text-muted-foreground text-sm", className)}
    ref={ref}
    {...props}
  />
);
CardDescription.displayName = "CardDescription";

// CardContent (unchanged)
const CardContent = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div
    className={cn("p-6 pt-0", className)}
    ref={ref}
    {...props}
  />
);
CardContent.displayName = "CardContent";

// CardFooter (unchanged)
const CardFooter = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div
    className={cn("flex items-center p-6 pt-0", className)}
    ref={ref}
    {...props}
  />
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
