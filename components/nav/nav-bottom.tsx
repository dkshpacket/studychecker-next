"use client";
import { usePathname } from "next/navigation";
import NavOption from "./nav-option";
import { Home, LampDesk, MessageCircleMore, Search, Settings, Timer } from "lucide-react";
 

const dontshow = [
  "/login",
  "/signup",
  "/forgot-password",
  "/reset-password",
  "/study",
];

export const NavBottom = () => {
  const currentPath = usePathname();
  return (
    <>
      {!dontshow.includes(currentPath) && (
        <nav className="px-8 max-w-2xl shadow-xl w-full mx-auto py-2  z-50 inset-x-0 bottom-0 fixed bg-white border-t border-x flex items-center rounded-t-2xl justify-between border-indigo-100">
          <NavOption icon={Home} href="/">
            홈
          </NavOption>
          <NavOption icon={LampDesk} href="/study">
            자습실 출석
          </NavOption>
          <NavOption icon={Timer} href="/timer">
            타이머
          </NavOption>
          <NavOption icon={Search} href="/search">
            검색
          </NavOption>
          <NavOption icon={MessageCircleMore} href="/community">
            커뮤니티
          </NavOption>
         
        </nav>
      )}
    </>
  );
};
