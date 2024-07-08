import { auth } from "@/lib/auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const Providers: React.FC<{ children: ReactNode }> = async ({ children }) => {
  const session = await auth();
  if (session?.user) {
    // TODO: Look into https://react.dev/reference/react/experimental_taintObjectReference
    // filter out sensitive data before passing to client.
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    };
  }
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Providers;
