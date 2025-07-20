// apps/api/index.ts
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Hello from Hono!"));

export default app;
