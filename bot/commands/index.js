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
        permissions : [{
            id: '908400512850866238',
            type: 'ROLE',
            permission: false,
        }],
        options: []
    },
    {
        name: 'pong',
        description: 'Ping the bot to check its alive',
        run: (interaction) => { 
            interaction.reply({
            content: 'Bot is up and running',
            ephemeral: true
            })
        },
        permissions : [{
            id: '908400512850866238',
            type: 'ROLE',
            permission: true,
        }],
        options: []
    },
]

export default botCommands