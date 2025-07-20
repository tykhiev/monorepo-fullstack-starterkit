import { appFactory } from "@/common/server/factory";
import {
  requestContextStore,
  type RequestContext,
} from "@/common/types/context.types";
import { auth } from "@packages/auth";

/**
 * SessionPipe middleware to protect route. Define in route levels.
 * @example
 * import { sessionPipe } from "@/middlewares/sessionPipe";
 * import { appFactory } from "@/common/server/factory";
 *
 * const route = appFactory.createRouter();
 * route.use("*", sessionPipe);
 */
export const sessionPipe = () =>
  appFactory.createMiddleware(async (c, next) => {
    const session = await auth.api
      .getSession({ headers: c.req.raw.headers })
      .catch(() => null);

    // Set user and session in Hono context
    if (!session) {
      c.set("user", null);
      c.set("session", null);

      // Run the rest of the request with empty context (no userId)
      return await requestContextStore.run({}, next);
    }

    c.set("user", session.user);
    c.set("session", session.session);

    // Store userId in AsyncLocalStorage for Prisma middleware to access
    const context: RequestContext = {
      userId: session.user.id,
    };

    // Run the rest of the request within AsyncLocalStorage context
    return await requestContextStore.run(context, next);
  });
