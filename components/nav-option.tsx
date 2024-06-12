import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

const NavOption = ({ href, icon: Icon, children }) => {
  const currentPath = usePathname();
  return (
    <a
      href={href}
      className={cn(
        " text-xs space-y-1 flex-col   rounded-full flex items-center justify-center aspect-square",
        currentPath == href
          ? "text-indigo-500 fill-indigo-500"
          : "text-gray-600"
      )}
    >
      <Icon />
      <span>{children}</span>
    </a>
  );
};
export default NavOption;
