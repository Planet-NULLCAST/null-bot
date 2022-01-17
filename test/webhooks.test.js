import webhooksSend from '../workers/webhooks/app.js'

test('webhooks testing', async () => {

    const data = await webhooksSend('', 'MAINTANCE_BREAK')

    let expetedValue = data ? true : false;
  
     expect(expetedValue).toBe(true);
    
});