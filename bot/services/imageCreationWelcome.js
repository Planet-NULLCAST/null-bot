import Canvas from 'canvas'
import fileDirFromRoot from '../functions/fileDirFromRoot.js';

const imageCreationWelcome = async ({message, member}) => {
    try {

        const canvas = Canvas.createCanvas(640, 320);
		const context = canvas.getContext('2d');
        // the backgroud image
        const imageAssetsFilePath = fileDirFromRoot('./src/assets/images/Welcome_post.png');
        const background = await Canvas.loadImage(imageAssetsFilePath);
        context.drawImage(background, 0, 0, canvas.width, canvas.height);

        // the heading text style
        context.font = '30px sans-serif';
        context.fillStyle = '#1B1B1B';

        const userName = message?.message?.user?.username?.length > 15 ? message?.message?.user?.username.substring(0, 14).concat(' ....') : 
        message?.message?.user?.username;

        context.fillText(userName, canvas.width / 2.5, (canvas.height / 1.8) - 20);

        // the subheading style
        context.font = '25px sans-serif';
        context.fillText(`ID: ${message?.message?.user?.discriminator}`, canvas.width / 2.5, (canvas.height / 1.8) + 15);

        // avatar image
        const avatar = await Canvas.loadImage(message?.message?.user?.displayAvatarURL({ format: "png" }));

        // avatar image style
        context.beginPath();
        context.arc(175, 160, 70, 0, Math.PI * 2, true);
        context.closePath();
        context.clip();
        context.drawImage(avatar, 75, 60, 200, 200);

        

        return canvas;
    } catch (error) {
        console.log('error', error)
    }
}

export default imageCreationWelcome;
