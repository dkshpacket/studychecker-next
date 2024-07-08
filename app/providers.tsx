"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
