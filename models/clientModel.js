const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    clientId: {
        type: String,
        require: true,
        unique: true,
    },
    agencyId: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    totalBill: {
        type: Number,
        require: true,
    }
})

const clientModel = mongoose.model('client', clientSchema)

module.exports = clientModel