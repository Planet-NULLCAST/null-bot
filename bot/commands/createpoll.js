import { MessageEmbed } from "discord.js";

const createpoll = async (interaction) => {
    const a = interaction.options.getString('choice_a')
    const b = interaction.options.getString('choice_b')
    const c = interaction.options.getString('choice_c')
    const d = interaction.options.getString('choice_d')
    const e = interaction.options.getString('choice_e')
    let sum = []
    a !== null && sum.push({ name: a, value: 'option 1️⃣ ' })
    b !== null && sum.push({ name: b, value: 'option 2️⃣ ' })
    c !== null && sum.push({ name: c, value: 'option 3️⃣ ' })
    d !== null && sum.push({ name: d, value: 'option 4️⃣ ' })
    e !== null && sum.push({ name: e, value: 'option 5️⃣ ' })

    const poll = new MessageEmbed().setColor('#0099ff')
        .setTitle(interaction.options.getString('title'))
        .addFields(sum)
 
  interaction.reply({
        ephemeral: false,
        embeds: [poll],
        fetchReply: true
    }).then((message)=>{
        a !== null &&  message.react('1️⃣');
        b !== null &&  message.react('2️⃣');
        c !== null &&  message.react('3️⃣');
        d !== null &&  message.react('4️⃣');
        e !== null &&  message.react('5️⃣'); 
    })

   
}
export default createpoll

export const polloptions = [{
    name: "title",
    description: "Poll question",
    required: true,
    type: 3
},
{
    name: "choice_a",
    description: "option 1",
    required: true,
    type: 3
},
{
    name: "choice_b",
    description: "option 2",
    required: true,
    type: 3
},
{
    name: "choice_c",
    description: "option 3",
    required: false,
    type: 3
},
{
    name: "choice_d",
    description: "option 4",
    required: false,
    type: 3
},
{
    name: "choice_e",
    description: "option 5",
    required: false,
    type: 3
},
]