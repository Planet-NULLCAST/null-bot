import env from '../../env.js';
import botCommands from '../commands/index.js'

const commands = async (client) => {

    const guildId = env.serverID;
    const guild = client.guilds.cache.get(guildId);
    let commands;

    if (guild) {
        commands = guild.commands;
    }else {
        commands = client.application?.commands;
    }

    console.log(`Loadinging all the commands  to server ${guild}`);

    //  commands are setup
    for (let index = 0; index < botCommands.length; index++) {
        
       await commands?.create({
            name: botCommands[index].name,
            description: botCommands[index].description,
            options: botCommands[index].options,
        })
    }

    // commands permission are setup
    let commandsList = await guild.commands.fetch();
    await commandsList.forEach(slashCommand => {
        console.log(`Changing command ${slashCommand.name}`);

        for (let index = 0; index < botCommands.length; index++) {

            if (botCommands[index].name === slashCommand.name) {

                console.log(botCommands[index].name, botCommands[index], slashCommand.id);

                guild.commands.permissions.add({
                    command: slashCommand.id,
                    permissions: botCommands[index].permissions
                });

            }

        }
        
    });

    console.log(`Loaded all the commands  to server ${guildId}`);

    return commands;

}

export default commands;