const mongoose = require('mongoose')

const agencySchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
        unique: true,
    },
    name: {
        type: String,
        require: true,
        unique: true,
    },
    address1: {
        type: String,
        require: true,
    },
    address2: {
        type: String,
    },
    state: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
        unique: true,
    },
})

const agencyModel = mongoose.model('agency', agencySchema)

module.exports = agencyModel