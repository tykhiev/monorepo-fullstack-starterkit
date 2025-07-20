import { Resend } from "resend";
import { templateEmail } from "./template.js";

// ENV will be injected by API using the auth package
const resend = new Resend(process.env.RESEND_API_KEY ?? "re_123");

type HtmlOption = {
  to: string[] | string;
  subject: string;
  url: string;
  text: string;
  name?: string;
  otpCode?: string;
};

export function sendMail({
  to,
  subject,
  url,
  name,
  text,
  otpCode,
}: HtmlOption) {
  return resend.emails.send({
    from: "GrouperAI <grouperai@dreamslab.dev>",
    to,
    subject,
    html: templateEmail({ url: url, text: text, name: name, otpCode: otpCode }),
  });
}
