import { prisma } from "@packages/db";
import { betterAuth, type BetterAuthOptions } from "better-auth";

import { prismaAdapter } from "better-auth/adapters/prisma";
import { admin, openAPI } from "better-auth/plugins";

import { config } from "@dotenvx/dotenvx";
import { nextCookies } from "better-auth/next-js";
import { user } from "./options";

// load db env for auth cli
if (!process.env.DATABASE_URL) {
  config({ path: "../../.env" });
}

const prod = process.env.NODE_ENV === "production";

const advanced = {
  cookiePrefix: "grouper-auth",
  crossSubDomainCookies: {
    enabled: prod,
    // TODO: change to your domain
    domain: prod ? "your-domain.com" : "localhost", // Domain with a leading period
  },
  defaultCookieAttributes: {
    secure: true,
    httpOnly: true,
    sameSite: "none",
    partitioned: true, // New browser standards will mandate this for foreign cookies
  },
} satisfies BetterAuthOptions["advanced"];

const betterAuthOptions: BetterAuthOptions = {
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  plugins: [
    openAPI({
      path: "/docs",
      disableDefaultReferences: true,
    }),
    admin(),
    nextCookies(),
  ],
  user,
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // 5 minutes
    },
  },
  advanced,
  baseURL: process.env.API_URL,
  trustedOrigins: [
    process.env.WEB_URL || "http://localhost:3000",
    process.env.API_URL || "http://localhost:4000",
  ],
} satisfies BetterAuthOptions;

export const auth: ReturnType<typeof betterAuth<typeof betterAuthOptions>> =
  betterAuth(betterAuthOptions);

export type UserBindings = {
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
};
