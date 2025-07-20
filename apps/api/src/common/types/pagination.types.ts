import type { OpenAPIV3 } from "@scalar/openapi-types";
import { z } from "zod";
// Base pagination schema
export const paginationSchema = z.object({
  page: z.coerce.number({ coerce: true }).int().positive().default(1),
  limit: z.coerce.number({ coerce: true }).int().min(1).max(100).default(10),
});

export type PaginationParams = z.infer<typeof paginationSchema>;

// Base sort schema
export const sortSchema = z.object({
  sort: z.string().optional(),
  orderBy: z.string().optional(),
});

export type SortParams = z.infer<typeof sortSchema>;

export const filterSchema = z.object({
  select: z.string().optional(),
  omit: z.string().optional(),
  include: z.string().optional(),
  distinct: z.array(z.string()).or(z.string()).optional(),
  json: z.string().optional(),
});
export type FilterParams = z.infer<typeof filterSchema>;

export const searchSchema = z.object({
  query: z.string().optional(),
});
export type SearchParams = z.infer<typeof searchSchema>;

// Combined query params
export const queryParamsSchema = paginationSchema
  .merge(sortSchema)
  .merge(filterSchema)
  .merge(searchSchema);

export type QueryParams = z.infer<typeof queryParamsSchema>;

export const paginationParameters = [
  {
    name: "page",
    in: "query",
    required: false,
    schema: {
      type: "number",
    },
  },
  {
    name: "limit",
    in: "query",
    required: false,
    schema: { type: "number" },
  },
  {
    name: "distinct",
    in: "query",
    required: false,
    schema: { type: "string" },
  },
  {
    name: "select",
    in: "query",
    required: false,
    schema: { type: "string" },
  },
  {
    name: "sort",
    in: "query",
    required: false,
    schema: { type: "string" },
  },
  {
    name: "json",
    in: "query",
    required: false,
    schema: { type: "string" },
  },
  {
    name: "query",
    in: "query",
    required: false,
    schema: { type: "string" },
  },
  {
    name: "omit",
    in: "query",
    required: false,
    schema: { type: "string" },
  },
] satisfies OpenAPIV3.ParameterObject[];
