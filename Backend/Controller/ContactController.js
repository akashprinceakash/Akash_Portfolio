const nodemailer = require('nodemailer');
// Form POST
exports.createContactform = async (req, res) => {
  try {
    const { name, email, mobileno, message } = req.body;

    // Save form data to MongoDB
    // const formData = await FromDetails.create({ name, email, mobileno, message });

    // Configure email transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // No brackets []
        pass: process.env.EMAIL_PASS, // No brackets []
      },
    });

    // Define email content
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: `akashprinceakash9986@gmail.com`,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${mobileno}</p>
        <p><strong>Message:</strong> ${message}</p>  
      `,
    };
    let mailOptions1 = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Contacting me! ",
      html: `
        <p><strong>Hello :</strong> ${name}</p>
        <p>Thank you for reaching out! We have received your message and will get back to you shortly.</p>
        <p><strong>Your Message:</strong> ${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOptions1);

    res.status(200).json({
      success: true,
      message: "Form submitted and email sent successfully!",
      // Return saved form data
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to submit form or send email",
      error: error.message,
    });
  }
};
