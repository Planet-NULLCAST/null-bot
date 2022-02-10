import { EndBehaviorType, VoiceReceiver } from '@discordjs/voice';
import { User } from 'discord.js';
import { createWriteStream, writeFileSync } from 'node:fs';
import prism from 'prism-media';
import { pipeline, Transform } from 'node:stream';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import EventEmitter from 'events';
import botEvents from '../config/events.js';


class ListingStream {

	getDisplayName(userId, user) {
		return user ? `${user.username}_${user.discriminator}` : userId;
	}
	
	createListeningStream(receiver, userId, user) {

		try {

			const SILENCE_FRAME = Buffer.from([0xf8, 0xff, 0xfe]);

			const opusStream = receiver.subscribe(userId, {
				end: {
					behavior: EndBehaviorType.Manual,
					duration: 500000,
				},
			});
		 
			let intervalData;
		
			opusStream.on('data', (data) => {
			
				const buf = Buffer.from(data, 'base64');
		
				if (buf.length <= 4) {
		
					if (!intervalData) {
						intervalData = setInterval(() => {
		
					
							opusStream.push(SILENCE_FRAME)
			
						}, 10);
					}
					
				}else{
		
						
						clearInterval(intervalData)
						intervalData = undefined
				}
		
			})
		
			botEvents.on('close_recording', () => {
				opusStream.emit('end');
				opusStream.emit('close')
			
					clearInterval(intervalData)
				
				//  opusStream.destroy();
			})
		
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
		
			const fileName = this.getDisplayName(userId, user)
		
			const filename = `/recordings/${fileName}.ogg`;
		
			writeFileSync(__dirname + filename, '', (err, file) => { console.log('error', err);})
		
			const out = createWriteStream(__dirname + filename);
		
			console.log(`👂 Started recording ${filename}`);
		
			pipeline(opusStream, oggStream, out, (err) => {
				if (err) {
					console.warn(`❌ Error recording file ${filename} - ${err.message}`);
				} else {
					console.log(`✅ Recorded ${filename}`);
				}
			})

		} catch (error) {

			botEvents.emit('close_recording')
			botEvents.off();

			throw error;
			
		}


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