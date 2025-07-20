export * from "../generated/client/index.js";
export { prisma } from "./client.js";

import { AsyncLocalStorage } from "node:async_hooks";

export type RequestContext = {
  userId?: string;
};

export const requestContextStore = new AsyncLocalStorage<RequestContext>();
