import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NavBottom } from "@/components/nav/nav-bottom";
import { NavTop } from "@/components/nav/nav-top";
import { SessionProvider } from "next-auth/react";
import Providers from "./providers";

const wantedsans = localFont({ src: "../fonts/WantedSansVariable.woff2" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={cn(wantedsans.className, "max-w-4xl mx-auto px-4 pb-24")}
        >
          <NavTop />
          {children}
          <NavBottom />
        </body>
      </Providers>
    </html>
  );
}
