import roles from '../model/roles.json.js'

const migrateUserTag = async (interaction) => {

    interaction.reply({
        content: 'Migrating users tag started.',
        ephemeral: true
    });

    for (let index = 0; index < roles.length; index++) {
        
        if (roles[index].default) {

            let role = await interaction.member.guild.roles.cache.find(role => role.name === roles[index].tag);
            if (!role) return;

            let members = await interaction.member.guild.members.fetch();

            members.forEach(async (member) => {
                await member.roles.add(role);
            });
        }
        
    }

}

export default migrateUserTag;