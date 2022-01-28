import { EndBehaviorType, VoiceReceiver } from '@discordjs/voice';
import { User } from 'discord.js';
import { createWriteStream } from 'node:fs';
import prism from 'prism-media';
import { pipeline } from 'node:stream';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import EventEmitter from 'events';
import botEvents from '../config/events.js';



function getDisplayName(userId, user) {
	return user ? `${user.username}_${user.discriminator}` : userId;
}

export function createListeningStream(receiver, userId, user) {
	const opusStream = receiver.subscribe(userId, {
		end: {
			behavior: EndBehaviorType.Manual,
			duration: 500000,
		},
	});

	botEvents.on('close_recording', () => {
		 opusStream.emit('end');
		 opusStream.emit('close')
		//  opusStream.destroy();
		console.log('recording');
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

	console.log(__dirname);

	const filename = `/recordings/fa.ogg`;

	const out = createWriteStream(__dirname + filename,);

	console.log(`👂 Started recording ${filename}`);

	pipeline(opusStream, oggStream, out, (err) => {
		if (err) {
			console.warn(`❌ Error recording file ${filename} - ${err.message}`);
		} else {
			console.log(`✅ Recorded ${filename}`);
		}
	});
}