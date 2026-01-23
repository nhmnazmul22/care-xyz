import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // smtp.gmail.com
    port: process.env.SMTP_PORT, // 587
    secure: false, // TLS
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export const sendEmail = async ({to, subject, html}) => {
    await transporter.sendMail({
        from: `"Care XYZ Service" <${process.env.SMTP_USER}>`,
        to,
        subject,
        html,
    });
};
