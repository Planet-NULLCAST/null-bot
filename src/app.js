import client from './config/discord-config.js'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
