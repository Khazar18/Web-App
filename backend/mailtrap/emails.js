import { sender, mailClient } from "./mailtrap.js";
import { Verification_email_template } from "./email.template.js";
import { Welcome_Email_Template } from "./welcomeEmail.template.js";
import { Reset_Password_Email_Template } from "./resetPassword.tamplet.js";

import { Reset_Success_Email_Template } from "./reset.success.js";

export const sendeVerificaitonEmail = async (email, name, verifcationToken) => {
  const recipients = [{ email, name }];

  try {
    const response = await mailClient.sendMail({
      from: `${sender.name} <${sender.email}>`,
      to: recipients.map(recipient => recipient.email).join(', '),
      subject: "Verify your email",
      html: Verification_email_template(name, "Welcome To Academora All in one platform for universities and related sections.", verifcationToken),
    });

    console.log(response);

  } catch (error) {
    console.error(error);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipients = [{ email, name }];

  try {
    const response = await mailClient.sendMail({
      from: `${sender.name} <${sender.email}>`,
      to: recipients.map(recipient => recipient.email).join(', '),
      subject: "Welcome to Academora",
      html: Welcome_Email_Template(email,name),
    });

    console.log(response);

  } catch (error) {
    console.error(error);
  }
};

export const sendResetPasswordEmail = async (email, name, resetLink) => {
    try {
        if (!email || !email.trim()) {
            throw new Error('Recipient email is required and cannot be empty.');
        }

        const recipients = [{ email, name }];
        console.log('Recipients:', recipients);

        const toAddresses = recipients
            .map(recipient => recipient.email)
            .filter(email => email && email.trim())
            .join(', ');

        if (!toAddresses) {
            throw new Error('No valid recipient emails provided.');
        }

        const response = await mailClient.sendMail({
            from: `${sender.name} <${sender.email}>`,
            to: toAddresses,
            subject: "Reset Your Password",
            html: Reset_Password_Email_Template(name, resetLink),
        });

        console.log('Email sent successfully:', response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

export const sendresetSuccessEmail = async (email, name) => {
    try {
        if (!email || !email.trim()) {
            throw new Error('Recipient email is required and cannot be empty.');
        }

        const recipients = [{ email, name }];
        console.log('Recipients:', recipients);

        const toAddresses = recipients
            .map(recipient => recipient.email)
            .filter(email => email && email.trim())
            .join(', ');

        if (!toAddresses) {
            throw new Error('No valid recipient emails provided.');
        }

        const response = await mailClient.sendMail({
            from: `${sender.name} <${sender.email}>`,
            to: toAddresses,
            subject: "Password Reset Successful",
            html: Reset_Success_Email_Template(name),
        });

        console.log('Email sent successfully:', response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}
