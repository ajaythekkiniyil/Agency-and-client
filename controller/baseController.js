const crypto = require('crypto')
const agencyModel = require('../models/agencyModel')
const clientModel = require('../models/clientModel')

module.exports = {
    createDocument: async(req, res) => {
        // getting data from request body
        const { agencyName, agencyAddress1, agencyAddress2, agencyState, agencyCity, agencyPhone } = req.body
        const { clientName, clientEmail, clientPhone, totalBill } = req.body

        // Check if all required fields are present
        if (!agencyName || !agencyAddress1 || !agencyState || !agencyCity || !agencyPhone || !clientName || !clientEmail || !clientPhone || !totalBill) {
            return res.status(400).json({ message: 'Please send all required fields' });
        }

        // generating unique agency id and client id
        const agencyId = crypto.randomBytes(16).toString('hex')
        const clientId = crypto.randomBytes(16).toString('hex')

        const newAgency = new agencyModel({
            id: agencyId,
            name: agencyName,
            address1: agencyAddress1,
            address2: agencyAddress2,
            state: agencyState,
            city: agencyCity,
            phone: agencyPhone,
        })

        const newClient = new clientModel({
            id: clientId,
            agencyId: agencyId,
            name: clientName,
            email: clientEmail,
            phone: clientPhone,
            totalBill: totalBill,
        })

        try {
            await newAgency.save();
            await newClient.save();
            res.status(201).json({ message: 'Agency and client created successfully'});
        } catch (err) {
            return res.status(500).json({ message: 'Error while creating new documents', error: err.message });
        }
    }
}
