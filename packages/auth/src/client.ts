// biome-ignore lint/performance/noBarrelFile: cannot infer types, need to export and let typescript handle type inference on
export {
  emailOTPClient,
  inferAdditionalFields,
  organizationClient,
} from "better-auth/client/plugins";
export { createAuthClient } from "better-auth/react";

// Auth client has problem with inferring types from plugins.
// So we need to define them on the frontend instead.
