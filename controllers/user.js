const User = require('../models/user')
const auth = require('../middleware/auth')

module.exports = {
    createUser: (req, res) => {
        const user = new User(req.body);
        user.save()
            .then((savedUser) => {
                const token = auth.generateToken(savedUser)
                return res.send({
                    token,
                })
            })
            .catch((error) => {
                return res.status(500).send({
                    error: error.message
                })
            })
    },
    loginUser: (req, res) => {
        const email = req.body.email
        const password = req.body.password

        User.findOne({
            email
        }).then((user) => {
            if (!user) {
                return res.status(404).send({
                    error: "User does not exist"
                })
            }
            const validPassword = user.comparePassword(password)

            if (!validPassword) {
                return res.status(401).send({
                    error: "Unauthorized, Invalid password"
                })
            }

            const token = auth.generateToken(user)

            return res.send({
                token,
            })

        }).catch((error) => {
            return res.status(500).send({
                error: error.message
            })
        })
    },
    updateUser: (req, res) => {
        const id = req.params.id;
        if (id !== req.decoded.id) {
            return res.status(403).send({
                error: "you are not allowed to updated another user's profile"
            })
        };

        User.findOneAndUpdate({ _id: id }, { $set: req.body }, { new: true })
            .then((updatedUser) => {
                return res.send({
                    user: updatedUser
                })
            })
            .catch((error) => {
                return res.status(500).send({
                    error: error.message
                })
            })


    }
}