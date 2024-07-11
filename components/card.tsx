import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Card: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={cn(`rounded-xl  bg-white px-6 py-5`, className)}>
      {children}
    </div>
  );
};
