// import { google } from "googleapis";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const {
//       name,
//       email,
//       phone,
//       subject,
//       message,
//     } = await req.json();

//     // Required validation (matches UI - all fields are required)
//     if (!name || !email || !phone || !subject || !message) {
//       return NextResponse.json(
//         { success: false, error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     /* ---------------- GOOGLE AUTH ---------------- */
//     const auth = new google.auth.GoogleAuth({
//       credentials: {
//         client_email: "mulching@mulching-483103.iam.gserviceaccount.com",
//         private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDYxYitBvqcFaFm\nEZuOLO73dypBhjGViAeoY3ToP3DLPrOJKws3aCHYps/Trl8DGu4Iif55AtOF9az9\n6wo4nKc+ThtBKy6IceWtm3RsHc+Xe7nWe/lcQCMJ+b4ZCj8T6yFTqxxAjrTxFoz8\n4deSH5Z+pBj8SolXfyhwjF7HPkn0zYJ89wT+6PV18OKrD669dV8MTpAJfvnLT7sE\nr8tQebl+9ED3Iq7LxxFGOvhwWR/uMj3J3wKM/j8P+hVzkPGjW3MTHqaYCZKe4fb2\nQ5gIUUaiUgqvfjHITz0CSnpssZyxV5gXfS3PdaPfPPtRA3vMwJ1IE+AwFUGbGRtG\ngI/duFBBAgMBAAECggEAAKPzw4wa2zFyqsAoUR8XnSZOWwd0F8yhNimGD8YZNZaD\ntgbpJ3Kgr/jNMiNIn1QZ6i9LL80W9iU7y7vBKdnnohbdvH9tyaQpgS3thgDAC2Ln\nkYdH/TJo0BebbMxDk7HdBTfjE1tAlFpEVB5wMjuy6ICgXMV1Gquy4UM+5/CKjCU6\nZiYvzYNf65uglOhL7eF/Y7Tz9Ou6eLuC5HnVhuakYbkiHtwWFHjakhdsTvea+LpD\nQiJc7iApQZy1iomm8d/mXFKBa0eIJ4Acd/wIyI9usooTeFtSTCVh+Nv1/0WqBTwn\n+F7Z8Xt0XTg2137qzOEktCwbasKQ8wd0mEijp5oIAQKBgQDxFm1iosSIfZ/JpWSz\nY4C1RRLeoaSOLIe2JgKYL+DguYjVWQn3p+IfqN8jVory4cCs9eNUTG3NAVqB67Vs\nMaAnCADvhrUNMEc3y4hwCa4ZfWa3N1MiII0TArMW9B0zjHpfsx6HB2FVMZi0t5Wb\niZdutrQ1/qOn2LCS6fKdZ01nQQKBgQDmLhFh+L80TlvBOBH+lmAPem047U9oM4uH\n8badvrM/FbhPslD8ecGFGyLIMI+ezvwUL+B91/6BOyBIVoRyu8/PTZDAxbPNnIdJ\nNFAJ9MQ4QSYmHA8XoZIUhjU+eTFb5ALLnE0MeeCdxtL3KIoTbwgEqxMxZIigaMsy\n7qwbdgGpAQKBgQDsZbdgjoXz6Gq0CS+TDzB3joGQOCPpHRT9sIu+usPg10yrFqHF\na6M4tBgIyKV6v450iq8cS80mxfr/hibhLlABtcFlHUuO4RYUSclBQtyqNeJwKRml\nTxHF4FHHYhr4HvknubVnZf800GsSWSmj1+jbMN/ISiYjQUDy7d9uJIsrgQKBgEH2\nf7rAyyKVNgw4IkgAFgU5g2Vl9HSbGOhbZ4brKHjyo4ALTNQdnEylyyDtcasEDA9I\n7R+DL4cfR5ATYx9yHQp+YvYrceyBZ++dkzZXM4gfe2w+bEDMZ42ELGv71R5NSFPL\nNfVWU/1DBiAYOQF6tySHVhe4hMLbZSfyZ9XyymUBAoGAOTUZdRMQuupxD8v3A++T\nrf5m1XKbfJwp3jzoNVl+sZDiQ5yuOtSUEudb61kA0MVLAz/iSp9Vknqimezfh6Z4\n91HLyO3UPp+xGZSWVsL3qOd6IS25Jue9tL2YvZ8MkJZiXpKvC5bFk9Xg2aoiEaVv\nRkkFc/lzMeX7FdnkiptFDUI=\n-----END PRIVATE KEY-----\n".replace(/\n/g, "\n"),
//       },
//       scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//     });

//     const sheets = google.sheets({ version: "v4", auth });

//     /* ---------------- GOOGLE SHEET WRITE ---------------- */
//     const spreadsheetId = "1KgRr5aGZOwUeKmfqpXjTbza-4H5YYgLvHRHmzOcj1QY"; // Replace with your actual Spreadsheet ID after creating and sharing the sheet with mulching@mulching-483103.iam.gserviceaccount.com

//     await sheets.spreadsheets.values.append({
//       spreadsheetId,
//       range: "Sheet1!A:F", // Adjust if needed: A: Date, B: Name, C: Email, D: Phone, E: Subject, F: Message
//       valueInputOption: "USER_ENTERED",
//       requestBody: {
//         values: [[
//           new Date().toLocaleString(),
//           name,
//           email,
//           phone,
//           subject,
//           message,
//         ]],
//       },
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Contact API Error:", error);
//     return NextResponse.json(
//       { success: false, error: "Server error" },
//       { status: 500 }
//     );
//   }
// }
import { google } from "googleapis";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {
      name,
      email,
      phone,
      subject,
      message,
    } = await req.json();

    // Required validation (matches UI - all fields are required)
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    /* ---------------- GOOGLE AUTH ---------------- */
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: "mulching@mulching-483103.iam.gserviceaccount.com",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDYxYitBvqcFaFm\nEZuOLO73dypBhjGViAeoY3ToP3DLPrOJKws3aCHYps/Trl8DGu4Iif55AtOF9az9\n6wo4nKc+ThtBKy6IceWtm3RsHc+Xe7nWe/lcQCMJ+b4ZCj8T6yFTqxxAjrTxFoz8\n4deSH5Z+pBj8SolXfyhwjF7HPkn0zYJ89wT+6PV18OKrD669dV8MTpAJfvnLT7sE\nr8tQebl+9ED3Iq7LxxFGOvhwWR/uMj3J3wKM/j8P+hVzkPGjW3MTHqaYCZKe4fb2\nQ5gIUUaiUgqvfjHITz0CSnpssZyxV5gXfS3PdaPfPPtRA3vMwJ1IE+AwFUGbGRtG\ngI/duFBBAgMBAAECggEAAKPzw4wa2zFyqsAoUR8XnSZOWwd0F8yhNimGD8YZNZaD\ntgbpJ3Kgr/jNMiNIn1QZ6i9LL80W9iU7y7vBKdnnohbdvH9tyaQpgS3thgDAC2Ln\nkYdH/TJo0BebbMxDk7HdBTfjE1tAlFpEVB5wMjuy6ICgXMV1Gquy4UM+5/CKjCU6\nZiYvzYNf65uglOhL7eF/Y7Tz9Ou6eLuC5HnVhuakYbkiHtwWFHjakhdsTvea+LpD\nQiJc7iApQZy1iomm8d/mXFKBa0eIJ4Acd/wIyI9usooTeFtSTCVh+Nv1/0WqBTwn\n+F7Z8Xt0XTg2137qzOEktCwbasKQ8wd0mEijp5oIAQKBgQDxFm1iosSIfZ/JpWSz\nY4C1RRLeoaSOLIe2JgKYL+DguYjVWQn3p+IfqN8jVory4cCs9eNUTG3NAVqB67Vs\nMaAnCADvhrUNMEc3y4hwCa4ZfWa3N1MiII0TArMW9B0zjHpfsx6HB2FVMZi0t5Wb\niZdutrQ1/qOn2LCS6fKdZ01nQQKBgQDmLhFh+L80TlvBOBH+lmAPem047U9oM4uH\n8badvrM/FbhPslD8ecGFGyLIMI+ezvwUL+B91/6BOyBIVoRyu8/PTZDAxbPNnIdJ\nNFAJ9MQ4QSYmHA8XoZIUhjU+eTFb5ALLnE0MeeCdxtL3KIoTbwgEqxMxZIigaMsy\n7qwbdgGpAQKBgQDsZbdgjoXz6Gq0CS+TDzB3joGQOCPpHRT9sIu+usPg10yrFqHF\na6M4tBgIyKV6v450iq8cS80mxfr/hibhLlABtcFlHUuO4RYUSclBQtyqNeJwKRml\nTxHF4FHHYhr4HvknubVnZf800GsSWSmj1+jbMN/ISiYjQUDy7d9uJIsrgQKBgEH2\nf7rAyyKVNgw4IkgAFgU5g2Vl9HSbGOhbZ4brKHjyo4ALTNQdnEylyyDtcasEDA9I\n7R+DL4cfR5ATYx9yHQp+YvYrceyBZ++dkzZXM4gfe2w+bEDMZ42ELGv71R5NSFPL\nNfVWU/1DBiAYOQF6tySHVhe4hMLbZSfyZ9XyymUBAoGAOTUZdRMQuupxD8v3A++T\nrf5m1XKbfJwp3jzoNVl+sZDiQ5yuOtSUEudb61kA0MVLAz/iSp9Vknqimezfh6Z4\n91HLyO3UPp+xGZSWVsL3qOd6IS25Jue9tL2YvZ8MkJZiXpKvC5bFk9Xg2aoiEaVv\nRkkFc/lzMeX7FdnkiptFDUI=\n-----END PRIVATE KEY-----\n".replace(/\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    /* ---------------- GOOGLE SHEET WRITE ---------------- */
    const spreadsheetId = "1KgRr5aGZOwUeKmfqpXjTbza-4H5YYgLvHRHmzOcj1QY"; // Replace with your actual Spreadsheet ID after creating and sharing the sheet with mulching@mulching-483103.iam.gserviceaccount.com

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:F", // Adjust if needed: A: Date, B: Name, C: Email, D: Phone, E: Subject, F: Message
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

    /* ---------------- EMAIL NOTIFICATION ---------------- */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "qualitysrjpolymers5@gmail.com", // Your Gmail address (or the one used for sending)
        pass: "YOUR_GMAIL_APP_PASSWORD_HERE", // Generate an App Password from Google Account > Security > App Passwords
      },
    });

    await transporter.sendMail({
      from: '"Contact Form" <qualitysrjpolymers5@gmail.com>', // Sender address
      to: "sales@qualitysrjpolymers.com", // Recipient
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <br/>
        <a href="https://docs.google.com/spreadsheets/d/${spreadsheetId}">
          View in Google Sheets
        </a>
      `,
      text: `
New Contact Submission

Date: ${new Date().toLocaleString()}
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}
      `,
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