import type { BetterAuthOptions } from "better-auth";
// import { sendMail } from "../email/email";

export const emailVerification: BetterAuthOptions["emailVerification"] = {
  // NOTE: Disable email verification for OTP
  // sendVerificationEmail: async ({ user, url }) => {
  //   await sendMail({
  //     to: user.email,
  //     subject: "Please verify your email.",
  //     url,
  //     name: user.name,
  //     text: "Welcome to GrouperAI, click the button below to verify your email and get started.",
  //   });
  // },
  autoSignInAfterVerification: true,
};
