const express = require('express');
const router = express.Router();
const { createDocument, updateClientData, getTopClient } = require('../controller/baseController');

// create new agency and client
router.post('/create-new-agency-client', createDocument)

// updating client data
router.put('/update-client/:clientId', updateClientData)

// top client informations
router.get('/top-client', getTopClient)

module.exports = router