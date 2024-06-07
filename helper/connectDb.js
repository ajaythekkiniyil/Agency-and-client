const mongoose = require('mongoose')

const connectDb = () => {
    const dbUrl = process.env.dbUrl
    
    mongoose.connect(dbUrl)
        .then(() => {
            console.log('Connected to database');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
}

module.exports = connectDb