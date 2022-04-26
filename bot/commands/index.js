
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

import createpoll, {polloptions} from "./createpoll.js"
import maintainanceBreakDone from "./maintanceBreakDone.js"
import maintainanceBreak from "./maintenaceBreak.js"
import migrateUserTag from './migrateUsertag.js'
import voiceRecord from "./voiceRecord.js"
import voiceRecordFinish from "./voiceRecordingFinish.js"

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
        permissions: {
            type: 'ROLE_LEVEL',
            level: 2
        },
        options: []
    },
    {
        name: 'maintenance_break',
        description: 'Notify the maintainance break of the bot.',
        run: maintainanceBreak,
        permissions: {
            type: 'ROLE_LEVEL',
            level: 2
        },
        options: []

    },
    {
        name: 'maintenance_done',
        description: 'Notify the maintainance break of the bot is finished.',
        run: maintainanceBreakDone,
        permissions: {
            type: 'ROLE_LEVEL',
            level: 2
        },
        options: []

    },
    {
        name: 'migrate_user_tag',
        description: 'Migrate current user to have default tag.',
        run: migrateUserTag,
        permissions: {
            type: 'ROLE_LEVEL',
            level: 2
        },
        options: []
    },
    {
        name: 'poll',
        description: 'Create a poll',
        run: createpoll,
        name: 'voice_record_start',
        description: 'Voice recording from voice channel.',
        run: voiceRecord,
        permissions: {
            type: 'ROLE_LEVEL',
            level: 2
        },
        options: [
            {
                name: 'voice_channel_name',
                description: 'Enter the voice channel.',
                required: true,
                type: 7,
            },
            {
                name: 'user_name',
                description: 'Record the voice of this spefic user.',
                required: false,
                type: 6,
            }
        ],
    },
    {
        name: 'voice_record_finish',
        description: 'Stop voice recording from voice channel.',
        run: voiceRecordFinish,
        permissions: {
            type: 'ROLE_LEVEL',
            level: 2
        },
    }
]

export default botCommands