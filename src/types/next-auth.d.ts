import { DefaultSession } from "next-auth";
import type { Role } from "@/types";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: Role;
      credit: number;
    } & DefaultSession["user"];
  }

  interface User {
    role: Role;
    credit: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: Role;
    credit: number;
  }
}
