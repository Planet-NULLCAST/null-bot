
// ? this is where all the commands of the discord bot is placed.
// to create a new command
// {
//  name : '<COMAND NAME>'
//  description: '<COMMAND DESC>',
//  run: 'FUNCTION FOR THE COMMAND THAT NEEDS TO RUN',
//  PERMISSION: permission level for the bot,
//  options: OPTIONS THAT NEEDED FOR THE BOT.
//}
// for more abbout the discord bot https://discordjs.guide/interactions/slash-command-permissions.html#user-permissions

// PERMISON DATA


const botCommands = [

    {
        name: 'ping',
        description: 'Ping the bot to check its alive',
        run: (interaction) => { 
            interaction.reply({
            content: 'Bot is up and running',
            ephemeral: true
            })
        },
        permissions : {
            type: 'ROLE_LEVEL',
            level: 2
        },
        options: []
    },
]

export default botCommands