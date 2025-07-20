type TemplateOption = {
  url: string;
  text: string;
  name?: string;
  otpCode?: string;
};

export const templateEmail = ({
  url,
  text,
  name,
  otpCode,
}: TemplateOption) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <link rel="preload" as="image" href="/static/koala-logo.png" />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--$-->
  </head>
  <body
    style="
      background-color: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;,
        Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;,
        sans-serif;
    "
  >
    <div
      style="
        display: none;
        overflow: hidden;
        line-height: 1px;
        opacity: 0;
        max-height: 0;
        max-width: 0;
      "
    >
      ${text}
      <div>
         ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      </div>
    </div>
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="max-width: 37.5em; margin: 0 auto; padding: 20px 0 48px"
    >
      <tbody>
        <tr style="width: 100%">
          <td>
            <img
              alt="GrouperAI"
              height="50"
              src="/static/koala-logo.png"
              style="
                display: block;
                outline: none;
                border: none;
                text-decoration: none;
                margin: 0 auto;
              "
              width="170"
            />
            <p style="font-size: 16px; line-height: 26px; margin: 16px 0">
              ${name ? `Hi ${name},` : "Hi,"}
            </p>
            <p style="font-size: 16px; line-height: 26px; margin: 16px 0">
             ${text}
            </p>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="text-align: center"
            >
              <tbody>
                <tr>
                  <td>
                    <${otpCode ? "div" : `a href="${url}" target="_blank"`}
                      style="
                        line-height: 100%;
                        text-decoration: none;
                        display: block;
                        max-width: 100%;
                        mso-padding-alt: 0px;
                        background-color: #007bff;
                        border-radius: 6px;
                        color: #fff;
                        font-size: 16px;
                        text-align: center;
                        padding: 12px 12px 12px 12px;
                      "
                      >
                      <span>
                        <!--[if mso]>
                          <i
                            style="mso-font-width: 300%; mso-text-raise: 18"
                            hidden
                          >
                            &#8202;&#8202;
                          </i>
                        <![endif]-->
                      </span>
                      <span
                        style="
                          max-width: 100%;
                          display: inline-block;
                          line-height: 120%;
                          mso-padding-alt: 0px;
                          mso-text-raise: 9px;
                        "
                      >
                        ${otpCode ?? "Verify"}
                      </span>
                      <span>
                        <!--[if mso]>
                          <i style="mso-font-width: 300%" hidden>&#8202;&#8202;&#8203;</i>
                        <![endif]-->
                      </span>
                    </${otpCode ? "div" : "a"}>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style="font-size: 16px; line-height: 26px; margin: 16px 0">
              Best regards,<br />GrouperAI team
            </p>
            <p style="font-size: 16px; line-height: 26px; margin: 16px 0">
              If you have any questions, please contact us at<!-- -->
              <a href="mailto:grouperai@dreamslab.dev"
                >grouperai@dreamslab.dev</a
              >
            </p>
            <p
              style="
                font-size: 12px;
                line-height: 24px;
                margin: 16px 0;
                color: #8898aa;
              "
            >
              This email was sent to you by GrouperAI. If you didn&#x27;t make any request, please ignore this email.
            </p>
            <hr
              style="
                width: 100%;
                border: none;
                border-top: 1px solid #eaeaea;
                border-color: #cccccc;
                margin: 20px 0;
              "
            />
            <p
              style="
                font-size: 12px;
                line-height: 24px;
                margin: 16px 0;
                color: #8898aa;
              "
            >
              Connexion building, Koh Pich street, Phnom Penh, Cambodia
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`;
