const express = require('express');
const router = express.Router();
const { createDocument, updateClientData, getTopClient } = require('../controller/baseController');
const verifyToken = require('../helper/verifyToken');

// create new agency and client
router.post('/create-new-agency-client', verifyToken, createDocument)

// updating client data
router.put('/update-client/:clientId', verifyToken, updateClientData)

// top client informations
router.get('/top-client', verifyToken, getTopClient)

module.exports = router