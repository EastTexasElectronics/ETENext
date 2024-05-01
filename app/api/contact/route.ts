import prisma from '../../../src/utils/prisma';  // Ensure you have a similar prisma instance setup
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function POST(req: NextApiRequest) {
    try {
        const data = await (req as NextApiRequest & { json: () => Promise<any> }).json();
        const contact = await prisma.contact.create({
            data
        });
        return NextResponse.json(contact);
    } catch (error) {
        console.error('Request error', error);
        return NextResponse.json({ error: 'Error saving contact information' }, { status: 500 });
    }
}


// pages/api/contact.js
// import sgMail from '@sendgrid/mail';

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { firstName, lastName, email, message } = req.body;

//     // Email to site administrator
//     const msgToAdmin = {
//       to: 'your-email@example.com', // Your email
//       from: 'verified-email@example.com', // Your verified sender email
//       subject: `New Contact Form Submission from ${firstName} ${lastName}`,
//       text: `Message from ${firstName} ${lastName} (${email}): ${message}`,
//       html: `<strong>Message from ${firstName} ${lastName} (${email}):</strong> <p>${message}</p>`,
//     };

//     // Confirmation email to the user
//     const msgToUser = {
//       to: email, // User's email
//       from: 'verified-email@example.com', // Your verified sender email
//       subject: 'Thank you for contacting us!',
//       text: `Hi ${firstName}, thank you for reaching out. We have received your message and will get back to you soon.`,
//       html: `<strong>Hi ${firstName},</strong> <p>Thank you for reaching out. We have received your message and will get back to you soon.</p>`,
//     };

//     try {
//       // Send both emails
//       await sgMail.send(msgToAdmin);
//       await sgMail.send(msgToUser);
//       res.status(200).json({ message: 'Emails sent successfully' });
//     } catch (error) {
//       console.error('Email send error:', error);
//       res.status(500).json({ error: 'Failed to send emails' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }

