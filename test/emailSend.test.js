import emailSend from '../workers/email/app.js'

test('For email error test normal', async () => {

    const emaitSend = await emailSend({to: ['qa1@yopmail.com'], subject: 'Invitation',
     data: {}, htmlFile: 'invitationMail.hbs' });
  
     expect(emaitSend ? true : false).toBe(true);
    
});


test('For email error test bulk', async () => {

    let sendEmailTo = [];

    for (let index = 0; index < 10000; index++) {
        
        sendEmailTo.push(`qa${index}@yopmail.com`);
        
    }

    console.log(sendEmailTo);

    const emaitSend = await emailSend({to: sendEmailTo, subject: 'Invitation',
     data: {}, htmlFile: 'invitationMail.hbs' });
  
     expect(emaitSend ? true : false).toBe(true);
    
});