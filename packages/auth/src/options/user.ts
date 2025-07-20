import type { BetterAuthOptions } from "better-auth";
import type { FieldAttribute, FieldType } from "better-auth/db";

export const userAdditionalFields: {
  [key: string]: FieldAttribute<FieldType>;
} = {
  firstname: {
    type: "string",
    required: false,
  },
  lastname: {
    type: "string",
    required: false,
  },
  phone: {
    type: "string",
    required: true,
  },
  dob: {
    type: "date",
    required: false,
  },
  gender: {
    type: "string",
    required: false,
  },
  address: {
    type: "string",
    required: false,
  },
} as const;

export const user: BetterAuthOptions["user"] = {
  additionalFields: userAdditionalFields,
};
