const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.Promise = Promise;
const Schema = mongoose.Schema;

// Create our Schema
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});


UserSchema.pre('save', function (next) {
    var user = this;
    // generate a salt
    bcrypt.genSalt(parseInt(process.env.SALT), function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compareSync(candidatePassword, this.password)
};

module.exports = User = mongoose.model('user', UserSchema);