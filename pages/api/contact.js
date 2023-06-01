// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from '../../utils/nodemailer';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `New Client - ${data.name}`,
        text: data.name,
        html: `<span><p>Name: </p><h4>${data.name}</h4></span><span><p>Number: </p><h4>${data.number}</h4></span><span><p>Email: </p><h4>${data.email}</h4></span><p>Message:</p><h4>${data.message}</h4>`,
      });

      return res.status(200).json({ message: 'Message sent,Thank you.' });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  return res.status(400).json({ message: 'Bad Request' });
};

export default handler;
