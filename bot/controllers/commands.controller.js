import botcommads from '../commands/index.js'

const commandsController = (interaction) => {

    const { commandName, options } = interaction;

    for (let index = 0; index < botcommads.length; index++) {
       
        if (commandName === botcommads[index].name) {

            const botCommands = botcommads[index];

            botCommands.run(interaction)
            
        }
        
    }

}


export default commandsController;