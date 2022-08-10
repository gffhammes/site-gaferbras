import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  require('dotenv').config()

  const email = 'contatos.sites@hotmail.com';

  // const body = JSON.parse(req.body)

  // console.log(req.body.body)

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    service: 'Hotmail',
    secureConnection: false,
    auth: {
      user: email,
      pass: process.env.password,
    },
    tls: {
        ciphers:'SSLv3'
    },
  })
  const mailData = {
    from: email,
    to: req.body.recipientMail,
    subject: req.body.subject,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div>`
  }

  try {
    await transporter.sendMail(mailData)
    res.status(200).end();
  } catch(error) {
    console.log(error)
    res.json(error);
    res.status(405).end();
  }
}