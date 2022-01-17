import webhooksSend from "../../workers/webhooks/app.js"

const maintainanceBreak = (interaction) => {

    
    interaction.reply({
        content: 'Maintaince break started. Please wait for the bot to start again.',
        ephemeral: false
    })

    const customMsg = {
        user: interaction.user.username,
        userDiscrimator:interaction?.user?.discriminator,
        serverName: interaction?.member?.guild?.name,
        commandName: interaction.commandName,
        webhookId: interaction.webhook.id,
    }

    webhooksSend(customMsg, 'MAINTANCE_BREAK');


}

export default maintainanceBreak