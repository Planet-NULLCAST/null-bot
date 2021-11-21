import client from './config/discord-config.js'
import welcomeMsg from './controllers/welcomeMsg.controller.js';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("guildMemberAdd" ,(message, member) => {
  welcomeMsg({message: message});
});
