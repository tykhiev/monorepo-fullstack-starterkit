import { every } from "hono/combine";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import { trimTrailingSlash } from "hono/trailing-slash";

import { appFactory } from "@/common/server/factory";
import { env } from "@/env";
import { pinoLogger } from "@/middlewares/logger";

import { sessionPipe } from "./session";

export const middlewares = appFactory.createMiddleware(
  every(
    secureHeaders(),
    csrf({
      origin: env.WHITELIST_ORIGIN.split(","),
    }),
    cors({
      credentials: true,
      origin: env.WHITELIST_ORIGIN.split(","),
      allowHeaders: ["Content-Type", "Authorization"],
      allowMethods: ["OPTIONS", "GET", "POST", "PATCH", "DELETE"],
      exposeHeaders: ["Content-Length"],
      maxAge: 600,
    }),
    prettyJSON(),
    pinoLogger(),
    trimTrailingSlash(),
    sessionPipe(),
  ),
);
