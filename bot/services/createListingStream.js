import { EndBehaviorType } from '@discordjs/voice';
import { createWriteStream, writeFileSync, rename } from 'node:fs';
import prism from 'prism-media';
import { pipeline, Transform } from 'node:stream';
import { fileURLToPath } from 'url';
import { dirname , join} from 'path';


class ListingStream {

	getDisplayName(userId, user) {
		return user ? `${user.username}_${user.discriminator}` : userId;
	}
	
	createListeningStream(receiver, userId, user, onCloseFunction) {

		try {

			const SILENCE_FRAME = Buffer.from([0xf8, 0xff, 0xfe]);

			const opusStream = receiver.subscribe(userId, {
				end: {
					behavior: EndBehaviorType.AfterSilence,
					duration: 100,
				},
			});
	
		
			const oggStream = new prism.opus.OggLogicalBitstream({
				opusHead: new prism.opus.OpusHead({
					channelCount: 2,
					sampleRate: 48000,
				}),
				pageSizeControl: {
					maxPackets: 10,
				},
			});

			const __filename = fileURLToPath(import.meta.url);
			const __dirname = dirname(__filename);

			const  filePath = this.filePathCreation(userId, user)
		
			writeFileSync(filePath, '', (err, file) => { console.log('error', err);})
		
			const out = createWriteStream(filePath);
		
			console.log(`👂 Started recording ${filePath}`);

			opusStream.on('close', () => {

				onCloseFunction(userId)

				setTimeout(() => {

					this.fileRenamed(filePath)
					
				}, 100);

			})
		
			pipeline(opusStream, oggStream, out, (err) => {
				if (err) {
					console.warn(`❌ Error recording file ${filePath} - ${err.message}`);
				} else {
					console.log(`✅ Recorded ${filePath}`);
				}
			})
			
		} catch (error) {

			throw error;
			
		}

	}

	filePathCreation = (userId, user) => {

		const __filename = fileURLToPath(import.meta.url);
		const __dirname = dirname(__filename);

		const fileName = this.getDisplayName(userId, user)
		const startingdate = new Date()

		const filename = `/recordings/${fileName}-${startingdate.getHours()}_${startingdate.getMinutes()}_${startingdate.getSeconds()}_${startingdate.getMilliseconds()}.ogg`;
		const filePath  = join(__dirname, filename)

		return filePath

	}

	fileRenamed = (fileName) => {

		const __filename = fileURLToPath(import.meta.url);
		const __dirname = dirname(__filename);

		const endingDate = new Date()
		let updateFileName = fileName.split('.')[0];
		updateFileName = `${updateFileName}-${endingDate.getHours()}_${endingDate.getMinutes()}_${endingDate.getSeconds()}_${endingDate.getMilliseconds()}.ogg`;

		console.log(updateFileName);

		rename(fileName, updateFileName, (err) => { console.log('err', err);})

	}
	
	myTransform = new Transform({
	
		transform(chunk, encoding, callback) {
	
			// console.log(`transform + ${encoding}`, chunk);
	
			const buf = Buffer.from(chunk, 'base64');
	
			// if (buf) {
			// 	console.log('empty');
			// }
	
			// Push the data onto the readable queue.
			callback(null, chunk);
		}
	});

}
export default ListingStream;