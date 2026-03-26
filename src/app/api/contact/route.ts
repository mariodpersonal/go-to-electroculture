import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "All fields are required: name, email, subject, message" },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER || "gotoelectroculture@gmail.com";
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #B87333; border-bottom: 2px solid #B87333; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #4A5D3A; width: 100px;">Name:</td>
            <td style="padding: 8px 12px;">${name}</td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 8px 12px; font-weight: bold; color: #4A5D3A;">Email:</td>
            <td style="padding: 8px 12px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #4A5D3A;">Subject:</td>
            <td style="padding: 8px 12px;">${subject}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background-color: #f5f5f5; border-left: 4px solid #B87333; border-radius: 4px;">
          <h3 style="margin-top: 0; color: #4A5D3A;">Message:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #999;">
          Sent from the Go To Electroculture website contact form.
        </p>
      </div>
    `;

    // If no app password is configured, log to console (development mode)
    if (!gmailAppPassword) {
      console.log("=== CONTACT FORM SUBMISSION (dev mode - no GMAIL_APP_PASSWORD set) ===");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log("======================================================================");
      return Response.json({ success: true });
    }

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Go To Electroculture Website" <${gmailUser}>`,
      to: "gotoelectroculture@gmail.com",
      replyTo: email,
      subject: `New Contact: ${subject} from ${name}`,
      html: htmlBody,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
