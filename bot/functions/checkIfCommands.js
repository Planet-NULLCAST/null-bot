import commandJson from '../model/commands.json.js'
import permissionLevelJson from '../model/permissionLevel.json.js';

const checkIfCommandsAndPermission = ({command, userTag, message}) => {

    if(commandJson[command] && commandJson[command].isEnabled){

        const commands = commandJson[command];

        for (let index = 0; index < userTag.length; index++) {

            if (permissionLevelJson[userTag[index]].level === null) {

                parseParams({commands: commands, message: message})

                return {
                   function : commands.function,
                   params: []
                };
            }
        
            if (permissionLevelJson[userTag[index]].level >= commands.permissionLevel) {

                parseParams({commands: commands, message: message})
                
                return {
                   function : commands.function,
                   params: []
                };
            }
            
        }
    }

    return;

}


const parseParams = ({commands, message}) => {

    const script = commands.script;


}

export default checkIfCommandsAndPermission;