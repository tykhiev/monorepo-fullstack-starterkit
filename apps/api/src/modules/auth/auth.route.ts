import { auth } from "@packages/auth";
import { Hono } from "hono";

const route = new Hono();

route.on(["POST", "GET"], "/*", (c) => auth.handler(c.req.raw));

export { route as authRoute };
