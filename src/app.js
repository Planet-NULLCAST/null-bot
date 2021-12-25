import discordBot from '../bot/app.js';
import dbAuth from '../config/db_auth.js'
import app from '../servers/app.js'

// initialze the discord bot
discordBot();

// autheticating db
dbAuth();

const PORT = process.env.PORT || 4000
let server = app.listen(PORT, () => console.log(`Server starts on  ${PORT}`))