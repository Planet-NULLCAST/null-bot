import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(
    express.json({
        extended: false,
    })
)


app.use(bodyParser.json())


app.get('/', function (req, res) {
    res.send('null bot apis are up')
})

export default app