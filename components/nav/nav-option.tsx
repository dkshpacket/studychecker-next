import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const NavOption: React.FC<{
  href: string;
  icon: React.FC<any>;
  children: ReactNode;
}> = ({ href, icon: Icon, children }) => {
  const currentPath = usePathname();
  return (
    <a
      href={href}
      className={cn(
        " text-xs flex-col rounded-full flex items-center justify-center aspect-square",
        currentPath == href
          ? "text-indigo-500 fill-indigo-500"
          : "text-gray-600"
      )}
    >
      <Icon className="w-5 h-5" />
      <span className="text-[10px] mt-[2px]">{children}</span>
    </a>
  );
};
export default NavOption;
