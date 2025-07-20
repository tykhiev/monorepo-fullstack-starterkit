"use client";

import {
  Group,
  ItemIndicator,
  Menu,
  CheckboxItem as MenubarCheckboxItemPrimitive,
  Content as MenubarContentPrimitive,
  Item as MenubarItemPrimitive,
  Label as MenubarLabelPrimitive,
  RadioItem as MenubarRadioItemPrimitive,
  Root as MenubarRoot,
  Separator as MenubarSeparatorPrimitive,
  SubContent as MenubarSubContentPrimitive,
  SubTrigger as MenubarSubTriggerPrimitive,
  Trigger as MenubarTriggerPrimitive,
  Portal,
  RadioGroup,
  Sub,
} from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";
import React, { type ComponentPropsWithRef } from "react";

import { cn } from "@pkgs/ui/lib/cn";

const MenubarMenu = Menu;

const MenubarGroup = Group;

const MenubarPortal = Portal;

const MenubarSub = Sub;

const MenubarRadioGroup = RadioGroup;

const Menubar = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof MenubarRoot>) => (
  <MenubarRoot
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className,
    )}
    ref={ref}
    {...props}
  />
);
Menubar.displayName = MenubarRoot.displayName;

const MenubarTrigger = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof MenubarTriggerPrimitive>) => (
  <MenubarTriggerPrimitive
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 font-medium text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className,
    )}
    ref={ref}
    {...props}
  />
);
MenubarTrigger.displayName = MenubarTriggerPrimitive.displayName;

const MenubarSubTrigger = ({
  ref,
  className,
  inset,
  children,
  ...props
}: ComponentPropsWithRef<typeof MenubarSubTriggerPrimitive> & {
  inset?: boolean;
}) => (
  <MenubarSubTriggerPrimitive
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarSubTriggerPrimitive>
);
MenubarSubTrigger.displayName = MenubarSubTriggerPrimitive.displayName;

const MenubarSubContent = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof MenubarSubContentPrimitive>) => (
  <MenubarSubContentPrimitive
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=closed]:animate-out data-[state=open]:animate-in",
      className,
    )}
    ref={ref}
    {...props}
  />
);
MenubarSubContent.displayName = MenubarSubContentPrimitive.displayName;

const MenubarContent = ({
  ref,
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentPropsWithRef<typeof MenubarContentPrimitive>) => (
  <Portal>
    <MenubarContentPrimitive
      align={align}
      alignOffset={alignOffset}
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in",
        className,
      )}
      ref={ref}
      sideOffset={sideOffset}
      {...props}
    />
  </Portal>
);
MenubarContent.displayName = MenubarContentPrimitive.displayName;

const MenubarItem = ({
  ref,
  className,
  inset,
  ...props
}: ComponentPropsWithRef<typeof MenubarItemPrimitive> & {
  inset?: boolean;
}) => (
  <MenubarItemPrimitive
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      inset && "pl-8",
      className,
    )}
    ref={ref}
    {...props}
  />
);
MenubarItem.displayName = MenubarItemPrimitive.displayName;

const MenubarCheckboxItem = ({
  ref,
  className,
  children,
  checked,
  ...props
}: React.ComponentPropsWithRef<typeof MenubarCheckboxItemPrimitive>) => (
  <MenubarCheckboxItemPrimitive
    checked={checked}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <Check className="h-4 w-4" />
      </ItemIndicator>
    </span>
    {children}
  </MenubarCheckboxItemPrimitive>
);
MenubarCheckboxItem.displayName = MenubarCheckboxItemPrimitive.displayName;

const MenubarRadioItem = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithRef<typeof MenubarRadioItemPrimitive>) => (
  <MenubarRadioItemPrimitive
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ItemIndicator>
    </span>
    {children}
  </MenubarRadioItemPrimitive>
);
MenubarRadioItem.displayName = MenubarRadioItemPrimitive.displayName;

const MenubarLabel = ({
  ref,
  className,
  inset,
  ...props
}: ComponentPropsWithRef<typeof MenubarLabelPrimitive> & {
  inset?: boolean;
}) => (
  <MenubarLabelPrimitive
    className={cn(
      "px-2 py-1.5 font-semibold text-sm",
      inset && "pl-8",
      className,
    )}
    ref={ref}
    {...props}
  />
);
MenubarLabel.displayName = MenubarLabelPrimitive.displayName;

const MenubarSeparator = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof MenubarSeparatorPrimitive>) => (
  <MenubarSeparatorPrimitive
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    ref={ref}
    {...props}
  />
);
MenubarSeparator.displayName = MenubarSeparatorPrimitive.displayName;

const MenubarShortcut = ({
  className,
  ...props
}: ComponentPropsWithRef<"span">) => {
  return (
    <span
      className={cn(
        "ml-auto text-muted-foreground text-xs tracking-widest",
        className,
      )}
      {...props}
    />
  );
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
};
