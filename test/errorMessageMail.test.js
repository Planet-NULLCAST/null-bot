import errorHandlerEmail from '../src/services/errorHandlerEmail.js'

test('For email error test normal', async () => {

  const status = await errorHandlerEmail({error: 'error', handlerName: 'test handle'});

   expect(status).toBe(true);
  
});