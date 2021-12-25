## WELCOME MESSAGE

Our bot have welcome message function to enable this function on your server you need to do some few things.

### Welcome message on server

The channel for the welcome message is already configed. You can override this by adding the channel id in the env as key as ***WELCOME_CHANNEL_ID***.

When you you setup the be sure to install 

```
sudo apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev --yes
```

> *if you are using docker with our docker config when you dont need to install the above packages*
  
### Welcome message for custom bot
  
![instruction](https://github.com/Planet-NULLCAST/null-bot/blob/dev/doc/Screenshot%202021-11-21%20at%206.32.28%20PM.png)

To make bot work on the welcome message you need to activate the gateway intent.
