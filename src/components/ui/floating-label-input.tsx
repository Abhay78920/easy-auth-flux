import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "./input";

interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingLabelInput = React.forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ className, label, type, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative">
      <Input
        type={type}
        className={cn(
          "h-14 pt-4 pb-1 px-3 w-full rounded-lg border bg-background peer placeholder:text-transparent",
          className
        )}
        ref={ref}
        {...props}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value.length > 0);
          props.onBlur?.(e);
        }}
        onChange={(e) => {
          setHasValue(e.target.value.length > 0);
          props.onChange?.(e);
        }}
      />
      <label
        className={cn(
          "absolute left-3 transition-all duration-200 pointer-events-none text-muted-foreground",
          isFocused || hasValue
            ? "transform -translate-y-2 scale-75 top-2 text-primary"
            : "top-4"
        )}
      >
        {label}
      </label>
    </div>
  );
});

FloatingLabelInput.displayName = "FloatingLabelInput";

export { FloatingLabelInput };