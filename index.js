const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDb = require('./helper/connectDb')

// .env file configuration
dotenv.config()

// connecting to database
connectDb()

// test end point
app.get('/', (req, res) => {
    res.status(200).json('Api working fine...')
})

// create new agency and client
app.post('/create', (req, res) => {
    
})

const port = process.env.port || 3000
app.listen(port, console.log(`server listen on port:${port}`))