import { cn } from "@pkgs/ui/lib/cn";
import React, { forwardRef, memo } from "react";

// Reusable helper to create components with consistent structure
const createComponent = <T extends HTMLElement>(
  tag: keyof React.JSX.IntrinsicElements,
  defaultClassName: string,
) => {
  // Use memo to prevent unnecessary re-renders
  const Component = memo(
    forwardRef<T, React.HTMLAttributes<T>>((props, ref) => {
      const { className, ...restProps } = props;
      return React.createElement(
        tag,
        { ...restProps, ref, className: cn(defaultClassName, className) },
        props.children,
      );
    }),
  );
  return Component;
};

export const H1 = createComponent<HTMLHeadingElement>(
  "h1",
  "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
);

export const H2 = createComponent<HTMLHeadingElement>(
  "h2",
  "scroll-m-20 border-b py-2 text-3xl font-semibold tracking-tight first:mt-0",
);

export const H3 = createComponent<HTMLHeadingElement>(
  "h3",
  "scroll-m-20 text-2xl font-semibold tracking-tight",
);

export const H4 = createComponent<HTMLHeadingElement>(
  "h4",
  "scroll-m-20 text-xl font-semibold tracking-tight",
);

export const H5 = createComponent<HTMLHeadingElement>(
  "h5",
  "scroll-m-20 font-bold text-base tracking-tight",
);

export const Lead = createComponent<HTMLParagraphElement>(
  "p",
  "text-xl text-muted-foreground",
);

export const P = createComponent<HTMLParagraphElement>(
  "p",
  "leading-7 [&:not(:first-child)]:mt-6",
);

export const Large = createComponent<HTMLDivElement>(
  "div",
  "text-lg font-semibold",
);

export const Small = createComponent<HTMLParagraphElement>(
  "p",
  "text-sm font-medium leading-none",
);

export const Muted = createComponent<HTMLSpanElement>(
  "span",
  "text-sm text-muted-foreground",
);

export const InlineCode = createComponent<HTMLSpanElement>(
  "code",
  "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
);

export const MultilineCode = createComponent<HTMLPreElement>(
  "pre",
  "relative rounded bg-muted p-4 font-mono text-sm font-semibold overflow-x-auto",
);

export const List = createComponent<HTMLUListElement>(
  "ul",
  "my-6 ml-6 list-disc [&>li]:mt-2",
);

export const Quote = createComponent<HTMLQuoteElement>(
  "blockquote",
  "mt-6 border-l-2 pl-6 italic text-muted-foreground",
);
