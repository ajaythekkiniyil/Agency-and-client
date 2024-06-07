const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
        unique: true,
    },
    agencyId: {
        type: String,
        require: true,
        unique: true,
    },
    name: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    phone: {
        type: String,
        require: true,
        unique: true,
    },
    totalBill: {
        type: Number,
        require: true,
    }
})

const clientModel = mongoose.model('clientModel', clientSchema)

module.exports = clientModel