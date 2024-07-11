import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Link from "next/link";

const NavOption: React.FC<{
  href: string;
  icon: React.FC<any>;
  children: ReactNode;
}> = ({ href, icon: Icon, children }) => {
  const currentPath = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        " text-xs flex-col rounded-full flex items-center justify-center aspect-square",
        currentPath == href ? "text-blue-500 fill-blue-500" : "text-gray-600"
      )}
    >
      <Icon className="w-5 h-5" />
      <span className="text-[10px] mt-[2px]">{children}</span>
    </Link>
  );
};
export default NavOption;
