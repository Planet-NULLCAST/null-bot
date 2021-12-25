import imageCreationWelcome from "../services/imageCreationWelcome.js"
import sendImageAttachement from "../services/sendImageAttachment.js";

const welcomeMsg = async (message) => {
    
   const welcomeMsgCard = await imageCreationWelcome({message: message});

   await sendImageAttachement({data: welcomeMsgCard, channelID: '908400216464568361', fileName: 'welcome.png'});
   
}

export default welcomeMsg;