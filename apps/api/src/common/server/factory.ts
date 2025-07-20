import type { LoggerBindings } from "@/middlewares/logger";
import type { UserBindings } from "@packages/auth";
import { createFactory } from "hono/factory";

type AppBinding = UserBindings & LoggerBindings;

export const appFactory = createFactory<AppBinding>();
