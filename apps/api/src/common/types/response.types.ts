import { z } from "zod";

export const baseResponseSchema = z.object({
  status: z.number(),
  success: z.boolean(),
  message: z.string().optional(),
  data: z.any().optional(),
  metadata: z
    .object({
      isFirstPage: z.boolean(),
      isLastPage: z.boolean(),
      currentPage: z.number(),
      previousPage: z.number().nullable(),
      nextPage: z.number().nullable(),
      pageCount: z.number(),
      totalCount: z.number(),
    })
    .optional(),
  errorData: z
    .object({
      message: z.string(),
      stack: z.string().optional(),
    })
    .optional()
    .nullable(),
});

export type BaseResponse = z.infer<typeof baseResponseSchema>;
