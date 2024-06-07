const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, process.env.jwtsecret, (err, decoded) => {
            if (err) {
                return res.status(401).json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).json({ success: false, message: 'No token provided.' });
    }
}

module.exports = verifyToken