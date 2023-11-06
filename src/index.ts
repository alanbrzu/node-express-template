import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(
    cors(),
    express.json(),
    express.urlencoded({ extended: true })
)

// test route
app.get('/', (_, res) => {
    res.status(200).json('Express TS server')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})