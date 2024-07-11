import { catchAsyncError } from "../middleware/catchAsyncErrors.js";
import { createTransport } from "nodemailer";
import ErrorHandler from "../utils/ErrorHandler.js";

export const sendMail = catchAsyncError(async (req, res, next) => {
  const { to, subject, text } = req.body;

  if (!to) return next(new ErrorHandler("Enter to", 401));
  if (!subject) return next(new ErrorHandler("Enter subject", 401));
  if (!text) return next(new ErrorHandler("Enter text", 401));
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: "sales@coworktown.com",
      pass: "Bsmr@1986",
    },
  });

  await transporter.sendMail({
    from: "sales@coworktown.com",
    to: "sales@coworktown.com",
    subject,
    html: text,
  });
  await transporter.sendMail({
    from: "sales@coworktown.com",
    to: "coworktown99@gmail.com",
    subject,
    html: text,
  });

  res.status(200).json({
    success: true,
    message: `Email Send to ${to}`,
  });
});
