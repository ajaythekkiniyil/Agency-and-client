const mongoose = require('mongoose')

const agencySchema = new mongoose.Schema({
    agencyId: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
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
    },
})

const agencyModel = mongoose.model('agency', agencySchema)

module.exports = agencyModel