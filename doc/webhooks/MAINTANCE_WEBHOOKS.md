# Maintance weebhooks

These webhooks are send when the bot is going on a maintance part of bot is recovered from maintaince.

## Structure

```

{
  messageType: <Maintance type>,
  data: {
    maintaince: <Is in maintance or not (true or false boolean)>,
    message: <Maintance message>
    data: {
        user: <User how called the maintance command>,
        userDiscrimator:<Same user userDiscrimator id>,
        serverName: <server name>,
        commandName: <commad used>,
        webhookId: <discord webhook id>,
    }
  }
}


```
