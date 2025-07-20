import type { EmailOTPOptions } from "better-auth/plugins";
import { sendMail } from "../email/email";

export const emailOTPOption: EmailOTPOptions = {
  async sendVerificationOTP({ email, otp }) {
    const tenMinFromNow = new Date(Date.now() + 10 * 60 * 1000).toUTCString();
    await sendMail({
      url: "#",
      to: email,
      subject: "Verification Code",
      text: `Welcome to GrouperAI, use the OTP code below to verify your email. Code will in expire at ${tenMinFromNow}.`,
      otpCode: otp,
    });
  },
  expiresIn: 600, // 10 minutes
  otpLength: 6,
  sendVerificationOnSignUp: true,
};
