const agencyModel = require('../models/agencyModel')
const clientModel = require('../models/clientModel')

module.exports = {
    createDocument: async (req, res) => {
        // getting data from request body
        const { agencyId, agencyName, agencyAddress1, agencyAddress2, agencyState, agencyCity, agencyPhone } = req.body.agency
        const { clientId, clientName, clientEmail, clientPhone, totalBill } = req.body.client

        // Check if all required fields are present
        if (!agencyId || !clientId || !agencyName || !agencyAddress1 || !agencyState || !agencyCity || !agencyPhone || !clientName || !clientEmail || !clientPhone || !totalBill) {
            return res.status(400).json({ message: 'Please send all required fields' });
        }

        const newAgency = new agencyModel({
            agencyId: agencyId,
            name: agencyName,
            address1: agencyAddress1,
            address2: agencyAddress2,
            state: agencyState,
            city: agencyCity,
            phone: agencyPhone,
        })

        const newClient = new clientModel({
            clientId: clientId,
            agencyId: agencyId,
            name: clientName,
            email: clientEmail,
            phone: clientPhone,
            totalBill: totalBill,
        })

        try {
            // one agency have multiples clients
            // check if agency with agencyId is already created to db
            let isAgency = await agencyModel.find({ agencyId: agencyId })
            if (isAgency.length === 0) {
                await newAgency.save();
            }
            await newClient.save();
            res.status(201).json({ message: 'Agency and client created successfully' });
        } catch (err) {
            return res.status(500).json({ message: 'Error while creating new documents', error: err.message });
        }
    },
    updateClientData: async (req, res) => {
        try {
            const clientId = req.params.clientId;
            const updatedClient = await clientModel.findOneAndUpdate({ clientId: clientId }, req.body, { new: true })

            if (!updatedClient) {
                return res.status(404).json({ message: 'Client not found' });
            }

            res.status(200).json({ message: 'Client updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error updating client', error });
        }
    },
    getTopClient: async (req, res) => {
        try {
            const topClient = await clientModel.aggregate([
                { $sort: { totalBill: -1 } },
                { $limit: 1 },
                {
                    $lookup: {
                        from: 'agencies',
                        localField: 'agencyId',
                        foreignField: 'agencyId',
                        as: 'agency'
                    }
                },
                { $unwind: '$agency' },
                {
                    $project: {
                        agencyName: '$agency.name',
                        clientName: '$name',
                        totalBill: 1
                    }
                }
            ]);

            res.status(200).json(topClient);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching top client', error });
        }
    }
}
