import * as nodemailer from 'nodemailer'

interface Options {
  to: string | string[]
  subject: string
  text: string
  html: string
}

export async function sendEmail({ to, subject, text, html }: Options) {
  console.log('Sending email to:', to)

  // create reusable transporter object using SendInBlue for SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'orionlabs2022@gmail.com',
      pass: process.env.SEND_IN_BLUE_KEY,
    },
  })

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Dealbari" <orionlabs2022@gmail.com>',
    to: Array.isArray(to) ? to : [to], // list of receivers
    subject, // Subject line
    text, // plain text body
    html, // html body
  })

  return info
}

export const sendTokenEmail = (emailAddress: string, token: string) => {
  const subject = 'Token for login - Dealbari'
  const text = `Your token for login is : ${token} \n\n It will expire in 15 minutes. \n\n
    It was sent from Dealbari platform.`
  const html = `Your token for login is : ${token}<br><br> It will expire in 15 minutes. \n\n
    It was sent from Dealbari platform.`
  return sendEmail({ to: emailAddress, subject, text, html })
}

export const resetPwdEmail = (emailAddress: string, token: string) => {
  const subject = 'Token for password reset - Dealbari'
  //TODO: Change host URL
  const text = `Hi ${emailAddress}, Your link for password reset is : localhost:8910/resetPassword?resetToken=${token} \n\n It will expire in 24 hours. \n\n
    It was sent from Dealbari platform.`
  const html = `Hi ${emailAddress}, Your link for password reset is : localhost:8910/resetPassword?resetToken=${token}<br><br> It will expire in 24 hours. \n\n
    It was sent from Dealbari platform.`
  return sendEmail({ to: emailAddress, subject, text, html })
}
