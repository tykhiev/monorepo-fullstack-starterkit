import { env } from "@/env";
import type { OpenApiSpecsOptions } from "hono-openapi";

const specs: OpenApiSpecsOptions = {
  documentation: {
    info: {
      title: "Monorepo Fullstack Starterkit - API Documentation",
      version: "1.0.0",
      description: "API documentation for Monorepo Fullstack Starterkit",
      contact: {
        name: "Monorepo Fullstack Starterkit",
      },
    },
    tags: [
      // your tags go here example:
      // {
      //   name: "API",
      //   description: "API endpoints",
      // },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
      {
        url: env.API_URL,
        description: "Local Development Server",
      },
    ],
  },
};

export { specs as openAPISpecsOptions };
