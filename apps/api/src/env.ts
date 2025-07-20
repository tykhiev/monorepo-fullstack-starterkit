import { config } from "@dotenvx/dotenvx";

import { createEnv } from "@t3-oss/env-core";
import path from "node:path";
import { cwd } from "node:process";

config({
  path: [path.resolve(cwd(), "/.env"), "../../.env"],
  logLevel: "verbose",
  override: false,
});

export const env = createEnv({
  server: {
    // your env validation goes here example:
    //     API_URL: z.string().url(),
  },

  /**
   * What object holds the environment variables at runtime. This is usually
   * `process.env` or `import.meta.env`.
   */
  runtimeEnv: process.env,

  /**
   * By default, this library will feed the environment variables directly to
   * the Zod validator.
   *
   * This means that if you have an empty string for a value that is supposed
   * to be a number (e.g. `PORT=` in a ".env" file), Zod will incorrectly flag
   * it as a type mismatch violation. Additionally, if you have an empty string
   * for a value that is supposed to be a string with a default value (e.g.
   * `DOMAIN=` in an ".env" file), the default value will never be applied.
   *
   * In order to solve these issues, we recommend that all new projects
   * explicitly specify this option as true.
   */
  emptyStringAsUndefined: true,
});
