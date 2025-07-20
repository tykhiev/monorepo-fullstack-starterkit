"use client";

import {
  Close as SheetClosePrimitive,
  Content as SheetContentPrimitive,
  Description as SheetDescriptionPrimitive,
  Overlay as SheetOverlayPrimitive,
  Portal as SheetPortalPrimitive,
  Root as SheetRoot,
  Title as SheetTitlePrimitive,
  Trigger as SheetTriggerPrimitive,
} from "@radix-ui/react-dialog";

import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

import { cn } from "@pkgs/ui/lib/cn";
import { X } from "lucide-react";

const Sheet = SheetRoot;

const SheetClose = SheetClosePrimitive;

const SheetPortal = SheetPortalPrimitive;

const SheetTrigger = SheetTriggerPrimitive;

const SheetOverlay = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof SheetOverlayPrimitive>) => (
  <SheetOverlayPrimitive
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=open]:animate-in",
      className,
    )}
    {...props}
    ref={ref}
  />
);
SheetOverlay.displayName = SheetOverlayPrimitive.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 border-b",
        bottom:
          "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 border-t",
        left: "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
        right:
          "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends React.ComponentPropsWithRef<typeof SheetContentPrimitive>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = ({
  ref,
  side = "right",
  className,
  children,
  ...props
}: SheetContentProps) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetTitlePrimitive>
      <SheetContentPrimitive
        className={cn(sheetVariants({ side }), className)}
        ref={ref}
        {...props}
      >
        {children}
        <SheetClose className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetClose>
      </SheetContentPrimitive>
    </SheetTitlePrimitive>
  </SheetPortal>
);
SheetContent.displayName = SheetContentPrimitive.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof SheetTitlePrimitive>) => (
  <SheetTitlePrimitive
    className={cn("font-semibold text-foreground text-lg", className)}
    ref={ref}
    {...props}
  />
);
SheetTitle.displayName = SheetTitlePrimitive.displayName;

const SheetDescription = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof SheetDescriptionPrimitive>) => (
  <SheetDescriptionPrimitive
    className={cn("text-muted-foreground text-sm", className)}
    ref={ref}
    {...props}
  />
);
SheetDescription.displayName = SheetDescriptionPrimitive.displayName;

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
