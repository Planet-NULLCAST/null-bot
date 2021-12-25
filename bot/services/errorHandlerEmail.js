import env from '../../env.js'
import htmlCompailer from './htmlCompiler.js'
import sendEmail from './sendEmail.js'

const errorHandlerEmail = async ({ error, handlerName }) => {
    try {
        const stack = new Error().stack;

        const htmlSrc = htmlCompailer({
            filePathDir: 'errorMail.hbs',
            data: {
                HandlerName : handlerName,
                errorMsg: error, 
                callstack: stack
            },
        })

       const status = await sendEmail({
            to: env.emailID.devEmailId,
            subject: 'Error Ocuured on Null-bot',
            text: `${handlerName} , ${error}, ${stack}`,
            html: htmlSrc,
        })

        return status;

    } catch (error) {
        console.log(error)
    }
}

export default errorHandlerEmail
