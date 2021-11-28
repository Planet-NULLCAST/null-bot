import nodemailer from 'nodemailer'
import env from '../../env.js'

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: env.emailID.userName,
      pass: env.emailID.password,
    },
});


export default transporter;