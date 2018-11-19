const mongoose = require('mongoose');
const crypto = require('crypto');
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
    },
    createdOn: { type: Date, default: Date.now },
});


UserSchema.pre('save', function (next) {
    var user = this;
    user.password = crypto.createHash('md5').update(user.password).digest('hex');
    next();
});

UserSchema.methods.comparePassword = function (candidatePassword) {
    return crypto.createHash('md5').update(candidatePassword).digest('hex') === this.password;
};

module.exports = User = mongoose.model('user', UserSchema);