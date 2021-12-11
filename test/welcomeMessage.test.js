import imageCreationWelcome from '../src/services/imageCreationWelcome.js'
import client from '../src/config/discord-config.js'
import Discord from 'discord.js'

beforeAll((done) => {
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`)
        done()
    })
})

test('Welcome message', async () => {
    const data = await imageCreationWelcome({ message: '', member: '' })

    const attachment = new Discord.MessageAttachment(
        data.toBuffer(),
        'profile.png'
    )
    
   await client.channels.cache.get('908400216464568361').send({ files: [attachment] })

    expect(true).toBe(true)
})
