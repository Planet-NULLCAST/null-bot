import botcommads from '../commands/index.js'

const commandsController = (interaction) => {

    try {

        const { commandName, options } = interaction;

        for (let index = 0; index < botcommads.length; index++) {

            if (commandName === botcommads[index].name) {

                const botCommands = botcommads[index];

                botCommands.run(interaction)

                return
            }

        }

        interaction.reply({
            content: 'Sorry but this command is deperated.',
            ephemeral: true
        })


    } catch (error) {

        interaction.reply({
            content: 'Sorry something goes wrong.',
            ephemeral: true
        })

    }
}


export default commandsController;