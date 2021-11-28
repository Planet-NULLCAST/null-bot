import env from '../../env.js'
import transporter from '../config/emailConfig.js'

const sendEmail = async ({ to, subject, text, html }) => {
    try {
        let info = await transporter.sendMail({
            from: env.emailID.userName,
            to: to,
            subject: subject,
            text: text,
            html: html,
        })

        if (info) return true

        return false
    } catch (error) {
        console.log(error)

        return false
    }
}

export default sendEmail
