
import roles from '../../bot/model/roles.json.js'

const defaultRoleAssign = async (message) => {

    const userId = message.user.id;

    for (let index = 0; index < roles.length; index++) {

        if (roles[index].default) {

            let role = await message.guild.roles.cache.find(role => role.name === roles[index].tag);
            if (!role) return;
            let member = await message.guild.members.fetch(userId)
            await member.roles.add(role);
            
        }

    }

}

export default defaultRoleAssign;