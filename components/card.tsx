import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Card: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={cn(`rounded-xl bg-white p-6`, className)}>{children}</div>
  );
};
