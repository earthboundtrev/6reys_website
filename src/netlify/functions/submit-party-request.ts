import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

interface PartyRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  partyDetails: string;
  captchaToken: string;
}

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    // Validate environment variables
    const requiredEnvVars = [
      'HCAPTCHA_SECRET_KEY',
      'SMTP_HOST',
      'SMTP_USER',
      'SMTP_PASS',
      'SMTP_FROM',
      'PARTY_REQUEST_EMAIL'
    ];
    
    for (const envVar of requiredEnvVars) {
      if (!process.env[envVar]) {
        throw new Error(`Missing required environment variable: ${envVar}`);
      }
    }

    const { firstName, lastName, email, phone, partyDetails, captchaToken } = JSON.parse(event.body || '') as PartyRequest;

    // Basic input validation
    if (!firstName || !lastName || !email || !phone || !partyDetails || !captchaToken) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'All fields are required' }),
      };
    }

    // Verify hCaptcha token
    const hCaptchaVerification = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `response=${captchaToken}&secret=${process.env.HCAPTCHA_SECRET_KEY}`,
    });

    const hCaptchaResult = await hCaptchaVerification.json();

    if (!hCaptchaResult.success) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid captcha' }),
      };
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.PARTY_REQUEST_EMAIL,
      subject: 'New Party Request',
      html: `
        <h2>New Party Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Party Details:</strong></p>
        <p>${partyDetails}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Party request submitted successfully' }),
    };
  } catch (error: any) {
    console.error('Error processing request:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined 
      }),
    };
  }
};

export { handler }; 