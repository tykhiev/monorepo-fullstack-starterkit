import { Scalar } from "@scalar/hono-api-reference";
import type { OpenAPIV3_1 } from "@scalar/openapi-types";
import { Hono } from "hono";
import { env } from "hono/adapter";
import { isErrorResult, merge } from "openapi-merge";

import { auth as authConfig } from "@packages/auth";

const route = new Hono();

route.get("/references", async (c) => {
  const docsRef = await fetch(`${env(c).API_URL}/openapi/specs`).then(
    (res) => res.body,
  );
  let result = "";

  if (docsRef) {
    const reader = docsRef.getReader();
    const decoder = new TextDecoder();

    let done = false;
    while (!done) {
      const { value, done: isDone } = await reader.read();
      if (value) {
        result += decoder.decode(value, { stream: true });
      }
      done = isDone;
    }
  }

  // get the auth references from authConfig
  const authRef =
    (await authConfig.api.generateOpenAPISchema()) as OpenAPIV3_1.Document;

  // changed the main tag and its description of the auth tag
  authRef.tags = [
    {
      name: "Auth",
      description:
        "Auth endpoints that are included with Better Auth by default. These endpoints are not part of any plugin.",
    },
  ];

  // replace the tags in each path of auth
  if (authRef.paths !== undefined) {
    Object.entries(authRef.paths ?? {}).map(([path, pathObject]) => {
      Object.entries(pathObject ?? {}).map(([pathMethod, methodObject]) => {
        if (authRef.paths?.[path]) {
          methodObject.tags = ["Auth"];

          authRef.paths[path][pathMethod] =
            methodObject as OpenAPIV3_1.PathsObject;
        }
      });
      return path;
    });
  }

  const mergeResult = merge([
    {
      oas: JSON.parse(result),
    },
    {
      // @ts-ignore
      oas: authRef,
      pathModification: {
        prepend: "/api/auth",
      },
    },
  ]);

  if (isErrorResult(mergeResult)) {
    return c.body(JSON.stringify(c.error));
  }

  return c.body(JSON.stringify(mergeResult.output), 200);
});
route.get(
  "/",
  Scalar({
    theme: "kepler",
    layout: "modern",
    url: "/docs/references",
  }),
);

export { route as openApiRoute };
