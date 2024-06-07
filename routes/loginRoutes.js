const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

router.post('/', (req, res) => {
    const { username, password } = req.body
    // for simple demo creating this logic
    // actual way is storing data in db in hashed format 
    if (username === 'demo' && password === '1234') {
        const payload = { username: username };
        const token = jwt.sign(payload, process.env.jwtsecret, { expiresIn: '1h' });

        // Return the token
        return res.status(200).json({ message: 'Authentication successful', token });
    }
    else{
        return res.status(400).json({ message: 'invalid credentials' });
    }
})

module.exports = router
