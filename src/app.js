import client from './config/discord-config.js'
import welcomeMsg from './controllers/welcomeMsg.controller.js';
import envValidity from '../envValidate.js'
import errorHandlerEmail from './services/errorHandlerEmail.js';

// * to validate the minium requiment to run the applications.
envValidity();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("guildMemberAdd" ,(message, member) => {
  welcomeMsg({message: message});
});


// ! error handler for our bot.

client.on('error', (error) => {
  console.log('error', error);

  errorHandlerEmail({error: error, handlerName: 'discord error'});
})

client.on('shardError', error => {
	console.error('A websocket connection encountered an error:', error);

  errorHandlerEmail({error: error, handlerName: 'websocket error'});
});


process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);

  errorHandlerEmail({error: error, handlerName: 'node unhandle error'});
});

process.on('uncaughtException', error => {
	console.error('Unhandled promise rejection:', error);

  errorHandlerEmail({error: error, handlerName: 'node uncaughtException error'});
});
