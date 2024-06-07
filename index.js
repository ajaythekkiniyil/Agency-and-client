const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDb = require('./helper/connectDb')
const { createDocument } = require('./controller/baseController')

// .env file configuration
dotenv.config()

// getting request body data's
app.use(express.json())

// connecting to database
connectDb()

// test end point
app.get('/', (req, res) => {
    res.status(200).json('Api working fine...')
})

// create new agency and client
app.post('/create-new-agency-client', createDocument)

const port = process.env.port || 3000
app.listen(port, console.log(`server listen on port:${port}`))