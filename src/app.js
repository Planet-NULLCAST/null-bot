import discordBot from '../bot/app.js';
import dbAuth from '../config/db_auth.js'

// initialze the discord bot
discordBot();

// autheticating db
dbAuth();
