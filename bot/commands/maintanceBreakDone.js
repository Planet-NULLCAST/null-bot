import webhooksSend from "../../workers/webhooks/app.js"

const maintainanceBreakDone =(interaction) => {

    interaction.reply({
        content: 'Maintaince break finished. Happy exploring.',
        ephemeral: false
    });

    const customMsg = {
        user: interaction.user.username,
        userDiscrimator:interaction?.user?.discriminator,
        serverName: interaction?.member?.guild?.name,
        commandName: interaction.commandName,
        webhookId: interaction.webhook.id,
    }

     webhooksSend(customMsg, 'MAINTANCE_DONE');

}

export default maintainanceBreakDone