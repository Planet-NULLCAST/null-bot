import studentMentorship from '../controllers/commands/students_mentorship.js'


// ?  command jsons

//  ? the command should be structure in the json format to work

// "command name" : {
//     "name":  # name of the command.
//     "script" : # script formact we need to be. The starting character will the command  after command each world with space will be as params.
//                # U can choose the params as FILE or TEXT. By using or <TEXT: ?about params> tags.
//     "isEnabled" : # is the command is enabled
//     "permissionLevel": # permission level. If the permission is given as 3 then everyone with 3 and lower can acess. If the permission level is set as null the everyone can acess it.
//     "function": # the function that need to called after the command is fired from discord js. The function will have two params passed {message, params}.
//     "description" # description of the commands
// }


const commandsJson = {
    "/students_mentorship": {
        "name" : "students mentorship",
        "script" : "/students_mentorship <TEXT: startinvite >",
        "isEnabled" : true,
        "permissionLevel" : 3,
        "function": studentMentorship,
        "description": "To take all the student mentorship",
    }
}

export default commandsJson