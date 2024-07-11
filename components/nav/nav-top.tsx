"use client";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { UserMenu } from "./user-menu";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export const NavTop = () => {
  const { data: session } = useSession();

  const path = usePathname();

  if (path === "/onboarding") {
    return null;
  }

  return (
    <nav
      className={`py-4 px-2 text-xl font-medium  flex  items-center justify-between`}
    >
      <Link href="/">
        단붕이 <span className="font-bold">생활 도우미</span>
      </Link>
      {session && <UserMenu session={session} />}

      {!session && (
        <Link href="/login" className="text-sm">
          로그인
        </Link>
      )}
    </nav>
  );
};
