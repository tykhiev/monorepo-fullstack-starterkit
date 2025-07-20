import type { BetterAuthOptions } from "better-auth";
import { sendMail } from "../email/email";

export const emailAndPassword: BetterAuthOptions["emailAndPassword"] = {
  enabled: true,
  requireEmailVerification: true,
  resetPasswordTokenExpiresIn: 600,
  sendResetPassword: async ({ user, url }) => {
    await sendMail({
      to: user.email,
      subject: "Reset your password",
      url,
      name: user.name,
      text: "You have requested a password reset, click the button below to reset your password. The link will in expire in 10 minutes.",
    });
  },
};
