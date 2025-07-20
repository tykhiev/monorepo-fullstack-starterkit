// apps/api/index.ts
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { openAPISpecs } from "hono-openapi";
import { appFactory } from "./common/server/factory";
import { logServerInfo, logShutdown } from "./common/server/server-log";
import { env } from "./env";
import { middlewares } from "./middlewares/core";
import { authRoute } from "./modules/auth/auth.route";
import { openAPISpecsOptions } from "./modules/openapi/openapi.const";
import { openApiRoute } from "./modules/openapi/openapi.route";

const PORT = env.API_PORT || "4000";
const app = appFactory.createApp();

async function bootstrap() {
  // Middlewares
  app.use("*", middlewares);

  // Serve static files
  app.use("/public/*", serveStatic({ root: "./public" }));

  // OpenAPI specs
  app.route("/docs", openApiRoute);
  app.get("/openapi/specs", (c, next) =>
    openAPISpecs(app, openAPISpecsOptions)(c, next),
  );

  // register routes
  app.route("/api/auth", authRoute);

  // Serve the app
  const server = serve(
    {
      fetch: app.fetch,
      port: Number(PORT),
      hostname: "0.0.0.0",
    },
    (info) => logServerInfo(info),
  );

  if (env.NODE_ENV === "production") {
    // Ensure the process exits properly on prod
    process.on("SIGINT", logShutdown);
    process.on("SIGTERM", logShutdown);
    process.on("exit", () => {
      server.close();
    });
  }

  return server;
}

bootstrap().catch((error) => {
  console.error("Bootstrap error:", error);
  process.exit(1);
});

export default app;
