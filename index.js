const express = require('express')
const app = express()
const dotenv = require('dotenv')

// .env file configuration
dotenv.config()

// test end point
app.get('/', (req, res) => {
    res.status(200).json('Api working fine...')
})

// create new agency and client
app.post('/create', (req, res) => {

})

const port = process.env.port || 3000
app.listen(port, console.log(`server listen on port:${port}`))