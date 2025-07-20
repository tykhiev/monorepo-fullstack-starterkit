"use client";

import {
  Content as AccordionContentPrimitive,
  Header as AccordionHeaderPrimitive,
  Item as AccordionItemPrimitive,
  Root as AccordionRoot,
  Trigger as AccordionTriggerPrimitive,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import React from "react";

import { cn } from "@pkgs/ui/lib/cn";

const Accordion = AccordionRoot;

const AccordionItem = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof AccordionItemPrimitive>) => (
  <AccordionItemPrimitive
    className={cn("border-b", className)}
    ref={ref}
    {...props}
  />
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithRef<typeof AccordionTriggerPrimitive>) => (
  <AccordionHeaderPrimitive className="flex">
    <AccordionTriggerPrimitive
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionTriggerPrimitive>
  </AccordionHeaderPrimitive>
);
AccordionTrigger.displayName = AccordionTriggerPrimitive.displayName;

const AccordionContent = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithRef<typeof AccordionContentPrimitive>) => (
  <AccordionContentPrimitive
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    ref={ref}
    {...props}
  >
    <div className={cn("pt-0 pb-4", className)}>{children}</div>
  </AccordionContentPrimitive>
);

AccordionContent.displayName = AccordionContentPrimitive.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
