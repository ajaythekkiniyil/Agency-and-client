const mongoose = require('mongoose')

const connectDb = () => {
    mongoose.connect('mongodb://localhost/agencyDb')
        .then(() => {
            console.log('Connected to database');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
}

module.exports = connectDb