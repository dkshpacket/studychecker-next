import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GithubProvider from "next-auth/providers/github";
import { db } from "@/lib/db";
import { sendVerificationRequest } from "@/emails/sendVerificationEmail";

import Resend from "next-auth/providers/resend";

export const authOptions = {
  adapter: PrismaAdapter(db),

  pages: {
    signIn: "/login",
    verifyRequest: "/auth/verify-request",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    Resend({
      apiKey: process.env.RESEND_SECRET as string,
      from: "auth@kaiwa.jcde.xyz",
      sendVerificationRequest,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
