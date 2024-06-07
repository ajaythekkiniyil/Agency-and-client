const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDb = require('./helper/connectDb')
const apiRoutes = require('./routes/apiRoutes')
const loginRoutes = require('./routes/loginRoutes')

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

app.use('/api', apiRoutes)
app.use('/login', loginRoutes)

const port = process.env.port || 3000
app.listen(port, console.log(`server listen on port:${port}`))