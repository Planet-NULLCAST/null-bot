# Webhooks

We have webhooks feature in this bot. But to enable or use the webhook you must define the webhooks endpoint url in the .env as:
```
WEBHOOKS=<WEBHOOKS END POINTS>
```
We also have have webhooks token system in place so that you can verify weather the connection is coming from or bot our not. To enable this you must add WEBHOOK_TOKEN in your .env file like:
```
WEBHOOK_TOKEN=<WEBHOOKS TOKEN>
```
This token will be send on every webhook from this bot the header as key **Bot-Token**.

## Webhooks list

[maintance webhooks](https://github.com/Planet-NULLCAST/null-bot/blob/dev/doc/webhooks/MAINTANCE_WEBHOOKS.md)
