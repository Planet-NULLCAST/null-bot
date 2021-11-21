import Canvas from 'discord-canvas'

const imageCreationWelcome = async ({message, member}) => {
    try {

        console.log(message);

        const welcomeCard = await new Canvas.Welcome()
        .setUsername(message.message.user.username)
        .setBackground('https://static-nullbot.s3.amazonaws.com/Neuromancer.jpg')
        .setGuildName(message.message.guild.name)
        .setDiscriminator(message.message.user.discriminator)
        .setAvatar(message.message.user.displayAvatarURL({ format: "png" }))
        .toAttachment();

        return welcomeCard;
    } catch (error) {
        console.log('error', error)
    }
}

export default imageCreationWelcome;
