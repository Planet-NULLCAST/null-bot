import client from './config/discord-config.js'

import welcomeMsg from './controllers/welcomeMsg.controller.js';
import regulationsDm from './controllers/regulationsDm.controller.js';
import envValidity from '../envValidate.js'

// * to validate the minium requiment to run the applications.
envValidity();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("guildMemberAdd" ,(message, member) => {
  welcomeMsg({message: message});
  regulationsDm({message: message});
});
