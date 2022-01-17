import env from '../../env.js';
import botCommands from '../commands/index.js'
import permissonLevel from '../functions/permisonLevel.js';

const commands = async (client) => {

    const guildId = env.serverID;
    const guild = client.guilds.cache.get(guildId);
    let commands;

    if (guild) {
        commands = guild.commands;
    }else {
        commands = client.application?.commands;
    }

    // clearing the old commands to avoid old commands to not stay.
    commands.set([]);

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

        for (let index = 0; index < botCommands.length; index++) {

            if (botCommands[index].name === slashCommand.name) {

                const botCommandPermissonList  = permissonLevel(botCommands[index].permissions);

                guild.commands.permissions.add({
                    command: slashCommand.id,
                    permissions: botCommandPermissonList
                });
            }
        }
    });

    console.log(`Loaded all the commands  to server ${guild}`);

    return commands;

}

export default commands;