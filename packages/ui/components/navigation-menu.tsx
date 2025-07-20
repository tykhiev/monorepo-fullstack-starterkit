import {
  Content as NavigationMenuContentPrimitive,
  Indicator as NavigationMenuIndicatorPrimitive,
  Item as NavigationMenuItemPrimitive,
  Link as NavigationMenuLinkPrimitive,
  List as NavigationMenuListPrimitive,
  Root as NavigationMenuRoot,
  Trigger as NavigationMenuTriggerPrimitive,
  Viewport as NavigationMenuViewportPrimitive,
} from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import React from "react";

import { cn } from "@pkgs/ui/lib/cn";

const NavigationMenu = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuRoot>) => (
  <NavigationMenuRoot
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuRoot>
);
NavigationMenu.displayName = NavigationMenuRoot.displayName;

const NavigationMenuList = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuListPrimitive>) => (
  <NavigationMenuListPrimitive
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className,
    )}
    ref={ref}
    {...props}
  />
);
NavigationMenuList.displayName = NavigationMenuListPrimitive.displayName;

const NavigationMenuItem = NavigationMenuItemPrimitive;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 font-medium text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent/50 data-active:bg-accent/50",
);

const NavigationMenuTrigger = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuTriggerPrimitive>) => (
  <NavigationMenuTriggerPrimitive
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    ref={ref}
    {...props}
  >
    {children}
    <ChevronDown
      aria-hidden="true"
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
    />
  </NavigationMenuTriggerPrimitive>
);
NavigationMenuTrigger.displayName = NavigationMenuTriggerPrimitive.displayName;

const NavigationMenuContent = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuContentPrimitive>) => (
  <NavigationMenuContentPrimitive
    className={cn(
      "data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out md:absolute md:w-auto ",
      className,
    )}
    ref={ref}
    {...props}
  />
);
NavigationMenuContent.displayName = NavigationMenuContentPrimitive.displayName;

const NavigationMenuLink = NavigationMenuLinkPrimitive;

const NavigationMenuViewport = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuViewportPrimitive>) => (
  <div className={cn("absolute top-full left-0 flex justify-center")}>
    <NavigationMenuViewportPrimitive
      className={cn(
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top-center overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
);
NavigationMenuViewport.displayName =
  NavigationMenuViewportPrimitive.displayName;

const NavigationMenuIndicator = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuIndicatorPrimitive>) => (
  <NavigationMenuIndicatorPrimitive
    className={cn(
      "data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-1 flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=visible]:animate-in",
      className,
    )}
    ref={ref}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuIndicatorPrimitive>
);
NavigationMenuIndicator.displayName =
  NavigationMenuIndicatorPrimitive.displayName;

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
};
