import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { ROLES } from "./constants.js";

dotenv.config();

export const sendWelcomeEmail = async ({ email, name, password, role }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let subject;
  let htmlContent;

  if (role === ROLES.TEACHER) {
    subject = "Welcome to Edu-Center - Teacher Portal Access";
    htmlContent = `  <h1>Welcome ${name}</h1>
                      <p>You have been registered as a teacher in the Edu-Center system.</p>
                      <ul>
                        <li><strong>Email : </strong>${email}</li>
                        <li><strong>Password : </strong>${password}</li>
                      </ul>`;
  } else if (role === ROLES.STUDENT) {
    subject = "Welcome to Edu-Center - Student Portal Access";
    htmlContent = `  <h1>Welcome ${name}</h1>
                      <p>You have been registered as a student in the Edu-Center system.</p>
                      <ul>
                        <li><strong>Email : </strong>${email}</li>
                        <li><strong>Password : </strong>${password}</li>
                      </ul>`;
  } else if (role === ROLES.ADMIN) {
    subject = "Welcome to Edu-Center - Admin Portal Access";
    htmlContent = `  <h1>Welcome ${name}</h1>
                      <p>You have been registered as a admin in the Edu-Center system.</p>
                      <ul>
                        <li><strong>Email : </strong>${email}</li>
                        <li><strong>Password : </strong>${password}</li>
                      </ul>`;
  } else if (role === ROLES.SUPER_ADMIN) {
    subject = "Welcome to Edu-Center Management System";
    htmlContent = `  <h1>Welcome ${name}</h1>
                      <p>You have been registered as a lead Admin in the Edu-Center system.</p>
                      <ul>
                        <li><strong>Email : </strong>${email}</li>
                        <li><strong>Password : </strong>${password}</li>
                      </ul>`;
  }

  const mailOptions = {
    from: `"Edu-Center Management" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: subject,
    html: htmlContent,
  };

  await transporter.sendMail(mailOptions);
};
