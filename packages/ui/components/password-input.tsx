"use client";

import { Input } from "@pkgs/ui/components/input";
import { Label } from "@pkgs/ui/components/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useId, useState } from "react";

export function PasswordInput() {
  const id = useId();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Show/hide password input</Label>
      <div className="relative">
        <Input
          className="pe-9"
          id={id}
          placeholder="Password"
          type={isVisible ? "text" : "password"}
        />
        <button
          aria-controls="password"
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-pressed={isVisible}
          className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md text-muted-foreground/80 outline-none transition-[color,box-shadow] hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          onClick={toggleVisibility}
          type="button"
        >
          {isVisible ? (
            <EyeOffIcon
              aria-hidden="true"
              size={16}
            />
          ) : (
            <EyeIcon
              aria-hidden="true"
              size={16}
            />
          )}
        </button>
      </div>
    </div>
  );
}
