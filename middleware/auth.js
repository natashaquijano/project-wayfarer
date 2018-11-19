const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY;

class Authenticator {
    static authenticateUser(req, res, next) {
        const token = req.headers.authorization ||
            req.headers['x-access-token'] || req.headers["Authorization"] ||
            req.body.token;
        if (token) {
            jwt.verify(token, SECRET_KEY, (error, decoded) => {
                if (error) {
                    res.status(401).send({
                        status: 'Failed',
                        message: 'Authentication failed due to invalid token!'
                    });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            res.status(401).json({
                status: 'Failed',
                message: 'Authentication required for this route'
            });
        }
    }

    static generateToken(user) {
        return jwt.sign({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            city: user.city,
            createdOn: user.createdOn,
            id: user._id
        }, SECRET_KEY, { expiresIn: 86400 });
    }
}
module.exports = Authenticator;