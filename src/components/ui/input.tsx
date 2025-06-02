import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          (className =
            "flex h-12 w-full rounded-xl border border-gray-300 bg-white text-black px-5 py-3 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition disabled:cursor-not-allowed disabled:opacity-50"),

          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
