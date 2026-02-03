const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

// Form POST
exports.createContactform = async (req, res) => {
  try {
    const { name, email, mobileno, message } = req.body;

    // Email to YOU
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // default resend domain
      to: ["akashprinceakash9986@gmail.com"],
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${mobileno}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Auto-reply to USER
    await resend.emails.send({
      from: "Support <onboarding@resend.dev>",
      to: [email],
      subject: "Thank You for Contacting Me!",
      html: `
        <p>Hello <strong>${name}</strong>,</p>
        <p>Thank you for reaching out! We have received your message and will get back to you shortly.</p>
        <p><strong>Your Message:</strong></p>
        <p>${message}</p>
        <br />
        <p>Regards,<br/>Akash</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Form submitted and email sent successfully!",
    });
  } catch (error) {
    console.error("Resend Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit form or send email",
      error: error.message,
    });
  }
};