import { zValidator } from "@hono/zod-validator";
import { createMiddleware } from "hono/factory";

type Params =
  | Parameters<typeof zValidator>
  | [...Parameters<typeof zValidator>, Record<string, unknown> | undefined];

export const validationPipe = (...params: Params) => {
  return createMiddleware(
    zValidator(params[0], params[1], (v, c) => {
      if (typeof params[2] === "function") {
        return params[2](v, c);
      }

      if (!v.success) {
        return c.json(
          {
            message: "Bad Request",
            error: params[3] ?? v.error.flatten(),
            success: false,
            status: 400,
          },
          400,
        );
      }
    }),
  );
};
