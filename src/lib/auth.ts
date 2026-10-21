import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import type { Role } from "@/types";

const users = [
  {
    id: "user-1",
    email: "demo@example.com",
    username: "DemoPlayer",
    password: "password123",
    credit: 1500,
    role: "USER" as Role,
    isBanned: false,
  },
  {
    id: "admin-1",
    email: "admin@example.com",
    username: "Admin",
    password: "password123",
    credit: 0,
    role: "ADMIN" as Role,
    isBanned: false,
  },
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = users.find(
          (u) => u.email === credentials.email && u.password === credentials.password
        );

        if (!user || user.isBanned) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.username,
          role: user.role,
          credit: user.credit,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
        token.credit = (user as any).credit;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
        (session.user as any).credit = token.credit;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET || "gacha-shop-dev-secret-change-in-production",
});
