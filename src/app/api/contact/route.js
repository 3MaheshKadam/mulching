import { google } from "googleapis";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    /* ---------------- VALIDATION ---------------- */
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    /* ---------------- GOOGLE SHEETS AUTH ---------------- */
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email:
          "mulching@mulching-483103.iam.gserviceaccount.com",
        private_key: `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDYxYitBvqcFaFm
EZuOLO73dypBhjGViAeoY3ToP3DLPrOJKws3aCHYps/Trl8DGu4Iif55AtOF9az9
6wo4nKc+ThtBKy6IceWtm3RsHc+Xe7nWe/lcQCMJ+b4ZCj8T6yFTqxxAjrTxFoz8
4deSH5Z+pBj8SolXfyhwjF7HPkn0zYJ89wT+6PV18OKrD669dV8MTpAJfvnLT7sE
r8tQebl+9ED3Iq7LxxFGOvhwWR/uMj3J3wKM/j8P+hVzkPGjW3MTHqaYCZKe4fb2
Q5gIUUaiUgqvfjHITz0CSnpssZyxV5gXfS3PdaPfPPtRA3vMwJ1IE+AwFUGbGRtG
gI/duFBBAgMBAAECggEAAKPzw4wa2zFyqsAoUR8XnSZOWwd0F8yhNimGD8YZNZaD
tgbpJ3Kgr/jNMiNIn1QZ6i9LL80W9iU7y7vBKdnnohbdvH9tyaQpgS3thgDAC2Ln
kYdH/TJo0BebbMxDk7HdBTfjE1tAlFpEVB5wMjuy6ICgXMV1Gquy4UM+5/CKjCU6
ZiYvzYNf65uglOhL7eF/Y7Tz9Ou6eLuC5HnVhuakYbkiHtwWFHjakhdsTvea+LpD
QiJc7iApQZy1iomm8d/mXFKBa0eIJ4Acd/wIyI9usooTeFtSTCVh+Nv1/0WqBTwn
+F7Z8Xt0XTg2137qzOEktCwbasKQ8wd0mEijp5oIAQKBgQDxFm1iosSIfZ/JpWSz
Y4C1RRLeoaSOLIe2JgKYL+DguYjVWQn3p+IfqN8jVory4cCs9eNUTG3NAVqB67Vs
MaAnCADvhrUNMEc3y4hwCa4ZfWa3N1MiII0TArMW9B0zjHpfsx6HB2FVMZi0t5Wb
iZdutrQ1/qOn2LCS6fKdZ01nQQKBgQDmLhFh+L80TlvBOBH+lmAPem047U9oM4uH
8badvrM/FbhPslD8ecGFGyLIMI+ezvwUL+B91/6BOyBIVoRyu8/PTZDAxbPNnIdJ
NFAJ9MQ4QSYmHA8XoZIUhjU+eTFb5ALLnE0MeeCdxtL3KIoTbwgEqxMxZIigaMsy
7qwbdgGpAQKBgQDsZbdgjoXz6Gq0CS+TDzB3joGQOCPpHRT9sIu+usPg10yrFqHF
a6M4tBgIyKV6v450iq8cS80mxfr/hibhLlABtcFlHUuO4RYUSclBQtyqNeJwKRml
TxHF4FHHYhr4HvknubVnZf800GsSWSmj1+jbMN/ISiYjQUDy7d9uJIsrgQKBgEH2
f7rAyyKVNgw4IkgAFgU5g2Vl9HSbGOhbZ4brKHjyo4ALTNQdnEylyyDtcasEDA9I
7R+DL4cfR5ATYx9yHQp+YvYrceyBZ++dkzZXM4gfe2w+bEDMZ42ELGv71R5NSFPL
NfVWU/1DBiAYOQF6tySHVhe4hMLbZSfyZ9XyymUBAoGAOTUZdRMQuupxD8v3A++T
rf5m1XKbfJwp3jzoNVl+sZDiQ5yuOtSUEudb61kA0MVLAz/iSp9Vknqimezfh6Z4
91HLyO3UPp+xGZSWVsL3qOd6IS25Jue9tL2YvZ8MkJZiXpKvC5bFk9Xg2aoiEaVv
RkkFc/lzMeX7FdnkiptFDUI=
-----END PRIVATE KEY-----`,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    /* ---------------- GOOGLE SHEET WRITE ---------------- */
    const spreadsheetId =
      "1KgRr5aGZOwUeKmfqpXjTbza-4H5YYgLvHRHmzOcj1QY";

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          new Date().toLocaleString(),
          name,
          email,
          phone,
          subject,
          message,
        ]],
      },
    });

    /* ---------------- EMAIL SEND ---------------- */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "polymerssrj@gmail.com",
        pass: "iivv fufs gynh caqz",
      },
    });

    await transporter.sendMail({
      from: '"Website Contact" <qualitysrjpolymers5@gmail.com>',
      to: "polymerssrj@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission - ${subject}`,
     html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f4f6f8;
      font-family: Arial, Helvetica, sans-serif;
    }
    .container {
      max-width: 600px;
      margin: 30px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }
    .header {
      background-color: #0f4c81;
      color: #ffffff;
      padding: 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 22px;
      letter-spacing: 0.5px;
    }
    .content {
      padding: 25px;
      color: #333333;
    }
    .content p {
      margin: 8px 0;
      font-size: 14px;
    }
    .label {
      font-weight: bold;
      color: #0f4c81;
    }
    .box {
      background-color: #f8fafc;
      border: 1px solid #e2e6ea;
      border-radius: 6px;
      padding: 15px;
      margin-top: 15px;
    }
    .message {
      white-space: pre-line;
      margin-top: 8px;
    }
    .footer {
      background-color: #f0f2f5;
      text-align: center;
      padding: 15px;
      font-size: 12px;
      color: #666666;
    }
    .footer span {
      display: block;
      margin-top: 5px;
    }
  </style>
</head>

<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>New Contact Enquiry</h1>
    </div>

    <!-- Content -->
    <div class="content">
      <p><span class="label">Date & Time:</span> ${new Date().toLocaleString()}</p>

      <div class="box">
        <p><span class="label">Name:</span> ${name}</p>
        <p><span class="label">Email:</span> ${email}</p>
        <p><span class="label">Phone:</span> ${phone}</p>
        <p><span class="label">Subject:</span> ${subject}</p>
      </div>

      <div class="box">
        <p class="label">Message</p>
        <p class="message">${message}</p>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <span>This email was generated automatically from your website contact form.</span>
      <span>© ${new Date().getFullYear()} Quality SRJ Polymers</span>
    </div>
  </div>
</body>
</html>
`

    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
