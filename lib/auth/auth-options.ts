import { randomUUID } from "crypto";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";

import { findUserByEmail, createUser } from "./users";
import { AUTH_SECRET } from "./secret";

export { AUTH_SECRET } from "./secret";

const ADMIN_EMAIL = (
  process.env.ADMIN_EMAIL || "admin@provent.com"
).toLowerCase();

function isAdminEmail(email: string) {
  return email.toLowerCase() === ADMIN_EMAIL;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const existing = await findUserByEmail(credentials.email);
        if (existing) {
          const valid = bcrypt.compareSync(
            credentials.password,
            existing.passwordHash
          );
          if (!valid) return null;
          return {
            id: existing.id,
            email: existing.email,
            name: existing.name,
            role: isAdminEmail(existing.email) ? "admin" : existing.role,
          };
        }

        // Admin accounts cannot be auto-created; they must be seeded.
        if (isAdminEmail(credentials.email)) return null;

        // Auto-create new credential users on first sign in (demo flow)
        // In production, only allow registered users.
        const newUser = await createUser({
          email: credentials.email,
          name: credentials.email.split("@")[0],
          password: credentials.password,
          role: "client",
        });

        return {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
          role: newUser.role,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  secret: AUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    newUser: "/auth/signup",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  },
  callbacks: {
    async session({ session, token }) {
      if (token?.sub && session.user) {
        (session.user as { id: string }).id = token.sub;
        (session.user as { role?: string }).role = (token as { role?: string }).role;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id ?? randomUUID();
        (token as { role?: string }).role = (user as { role?: string }).role;
      }
      return token;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },
};
