import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={clsx(
        `mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16
        ${className}`
      )}
    >
      {children}
    </div>
  );
}