import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { AlertCircle, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { getProviders, signIn } from "next-auth/react";
import { LoginOptions } from "./login-options";
import { redirect } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { auth } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default async function LoginPage({ searchParams }) {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <div className="w-full grid-cols-2 mt-24">
      <div className="container flex  flex-col items-center justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <div className="text-left mb-4">
              {searchParams.error == "OAuthAccountNotLinked" && (
                <Alert variant={"destructive"}>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>어머나!</AlertTitle>
                  <AlertDescription>
                    이미 이 이메일을 사용하는 계정이 존재해요.
                    <br /> 다른 방법으로 로그인 해 보세요.
                  </AlertDescription>
                </Alert>
              )}
            </div>
            <h1 className="text-3xl font-bold tracking-tight">환영해요!</h1>
            <p className="text-sm text-muted-foreground">
              이메일을 입력해 시작해보세요. &darr;
            </p>
          </div>

          <LoginOptions />
          {/* <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/register"
            className="hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p> */}
        </div>
      </div>
    </div>
  );
}
