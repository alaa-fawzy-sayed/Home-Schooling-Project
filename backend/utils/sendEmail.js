const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendVerificationEmail = async (toEmail, token) => {
  const verifyUrl = `${process.env.CLIENT_URL}/api/auth/verify-email?token=${token}`;

  await transporter.sendMail({
    from: `"E-Learning Nova" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: 'Verify your Nova account',
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:auto">
        <h2>Welcome to E-Learning Nova</h2>
        <p>Click the button below to verify your email address. This link expires in <strong>1 hour</strong>.</p>
        <a href="${verifyUrl}" style="display:inline-block;padding:12px 24px;background:#1e90ff;color:#fff;border-radius:6px;text-decoration:none">Verify Email</a>
        <p style="margin-top:16px;color:#888">If you didn't create an account, ignore this email.</p>
      </div>
    `,
  });
};

module.exports = { sendVerificationEmail };
