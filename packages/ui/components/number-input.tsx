import { ChevronDown, ChevronUp } from "lucide-react";
import React, { forwardRef, useCallback, useEffect, useState } from "react";
import { NumericFormat, type NumericFormatProps } from "react-number-format";
import { Button } from "./button";
import { Input } from "./input";

export interface NumberInputProps
  extends Omit<NumericFormatProps, "value" | "onValueChange"> {
  stepper?: number;
  thousandSeparator?: string;
  placeholder?: string;
  defaultValue?: number;
  min?: number;
  max?: number;
  value?: number; // Controlled value
  suffix?: string;
  prefix?: string;
  onValueChange?: (value: number | undefined) => void;
  fixedDecimalScale?: boolean;
  decimalScale?: number;
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      stepper,
      thousandSeparator,
      placeholder,
      defaultValue,
      min = Number.NEGATIVE_INFINITY,
      max = Number.POSITIVE_INFINITY,
      onValueChange,
      fixedDecimalScale = false,
      decimalScale = 0,
      suffix,
      prefix,
      value: controlledValue,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState<number | undefined>(
      controlledValue ?? defaultValue,
    );

    const handleIncrement = useCallback(() => {
      setValue((prev) =>
        prev === undefined
          ? (stepper ?? 1)
          : Math.min(prev + (stepper ?? 1), max),
      );
    }, [stepper, max]);

    const handleDecrement = useCallback(() => {
      setValue((prev) =>
        prev === undefined
          ? -(stepper ?? 1)
          : Math.max(prev - (stepper ?? 1), min),
      );
    }, [stepper, min]);

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (
          document.activeElement ===
          (ref as React.RefObject<HTMLInputElement>).current
        ) {
          if (e.key === "ArrowUp") {
            handleIncrement();
          } else if (e.key === "ArrowDown") {
            handleDecrement();
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [handleIncrement, handleDecrement, ref]);

    useEffect(() => {
      if (controlledValue !== undefined) {
        setValue(controlledValue);
      }
    }, [controlledValue]);

    const handleChange = (values: {
      value: string;
      floatValue: number | undefined;
    }) => {
      const newValue =
        values.floatValue === undefined ? undefined : values.floatValue;
      setValue(newValue);
      if (onValueChange) {
        onValueChange(newValue);
      }
    };

    const handleBlur = () => {
      if (value !== undefined) {
        if (value < min) {
          setValue(min);
          // biome-ignore lint/style/noNonNullAssertion: <explanation>
          (ref as React.RefObject<HTMLInputElement>).current!.value =
            String(min);
        } else if (value > max) {
          setValue(max);
          // biome-ignore lint/style/noNonNullAssertion: <explanation>
          (ref as React.RefObject<HTMLInputElement>).current!.value =
            String(max);
        }
      }
    };

    return (
      <div className="flex items-center">
        <NumericFormat
          allowNegative={min < 0}
          className="relative rounded-r-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          customInput={Input}
          decimalScale={decimalScale}
          fixedDecimalScale={fixedDecimalScale}
          getInputRef={ref}
          max={max}
          min={min}
          onBlur={handleBlur}
          onValueChange={handleChange}
          placeholder={placeholder}
          prefix={prefix}
          suffix={suffix}
          thousandSeparator={thousandSeparator}
          value={value}
          valueIsNumericString={true}
          {...props}
        />

        <div className="flex flex-col">
          <Button
            aria-label="Increase value"
            className="h-5 rounded-l-none rounded-br-none border-input border-b-[0.5px] border-l-0 px-2 focus-visible:relative"
            disabled={value === max}
            onClick={handleIncrement}
            type="button"
            variant="outline"
          >
            <ChevronUp className="size-3.5" />
          </Button>
          <Button
            aria-label="Decrease value"
            className="h-5 rounded-l-none rounded-tr-none border-input border-t-[0.5px] border-l-0 px-2 focus-visible:relative"
            disabled={value === min}
            onClick={handleDecrement}
            type="button"
            variant="outline"
          >
            <ChevronDown className="size-3.5" />
          </Button>
        </div>
      </div>
    );
  },
);
