"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HandCoins, LogOut, PlusCircle, Settings, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";

export const NavTop = () => {
  const { data: session, status } = useSession();

  console.log(session, status);

  return (
    <nav
      className={`py-4 px-2 text-xl font-medium  flex  items-center justify-between`}
    >
      <Link href="/">
        단붕이 <span className="font-bold">생활 도우미</span>
      </Link>
      {status == "authenticated" && (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger className="outline-none">
            <Avatar className="h-10 w-10 select-none border ">
              <AvatarImage
                className="bg-white"
                src={session?.user?.image as string}
                alt={session?.user?.name || "User"}
              />
              <AvatarFallback>
                {session?.user?.name || session?.user?.email?.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {session?.user?.name}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {session?.user?.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>프로필</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HandCoins className="mr-2 h-4 w-4" />
                <span>기부하기</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>설정</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="group"
              onClick={() => {
                signOut();
              }}
            >
              <LogOut className="mr-2 h-4 w-4 group-hover:text-red-500" />
              <span className="group-hover:text-red-500">로그아웃</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}

      {status == "unauthenticated" && (
        <Link href="/login" className="text-sm">
          로그인
        </Link>
      )}

      {status == "loading" && !session && (
        <Skeleton className="h-10 w-10 rounded-full" />
      )}
    </nav>
  );
};
