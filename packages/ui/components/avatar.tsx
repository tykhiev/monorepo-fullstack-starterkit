"use client";

import {
  Fallback as AvatarFallbackPrimitive,
  Image as AvatarImagePrimitive,
  Root as AvatarRoot,
} from "@radix-ui/react-avatar";
import React from "react";

import { cn } from "@pkgs/ui/lib/cn";

const Avatar = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof AvatarRoot>) => (
  <AvatarRoot
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    ref={ref}
    {...props}
  />
);
Avatar.displayName = AvatarRoot.displayName;

const AvatarImage = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof AvatarImagePrimitive>) => (
  <AvatarImagePrimitive
    className={cn("aspect-square h-full w-full", className)}
    ref={ref}
    {...props}
  />
);
AvatarImage.displayName = AvatarImagePrimitive.displayName;

const AvatarFallback = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof AvatarFallbackPrimitive>) => (
  <AvatarFallbackPrimitive
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    ref={ref}
    {...props}
  />
);
AvatarFallback.displayName = AvatarFallbackPrimitive.displayName;

export { Avatar, AvatarFallback, AvatarImage };
