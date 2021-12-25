
const sendPrivateMessage = async (messageText, {message}) => {
    await message.message.send(messageText.text);
}

export default sendPrivateMessage;