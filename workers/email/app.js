import transporter from '../../config/emailConfig.js'
import htmlCompailer from './htmlCompiler.js'
import env from '../../env.js'

const emailSend = async ({to, subject, htmlFile, data}) => {


    const htmlSrc = htmlCompailer({
        filePathDir: htmlFile,
        data: data,
    });


    let info = await transporter.sendMail({
        from: env.emailID.userName,
        to: to,
        subject: subject,
        html: htmlSrc,
    })

    return info;


}

export default emailSend;