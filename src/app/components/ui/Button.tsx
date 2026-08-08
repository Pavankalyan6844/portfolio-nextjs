import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/app/lib/Utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-blue-500",
        variant === "primary" &&
          "bg-gradient-to-r from-blue-500 to-violet-600 text-white hover:scale-105 hover:shadow-lg",
        variant === "outline" &&
          "border border-slate-600 text-white hover:bg-slate-800",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}