import nodemailer from "nodemailer";

type ContactType = {
  fromName: string;
  userEmail: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (templateParams: ContactType) => {
  const mailOptions = {
    from: templateParams.userEmail,
    to: process.env.RECIPIENT_EMAIL,
    subject: "Contact Form Submission",
    text: `From: ${templateParams.fromName}\nEmail: ${templateParams.userEmail}\nMessage: ${templateParams.message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Successfully sent contact email!");
  } catch (err) {
    console.error("Failed to send email.", err);
  }
};
