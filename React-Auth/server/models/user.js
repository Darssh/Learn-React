const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        index: { unique: true }
    },
    password: String,
    name: String
});

UserSchema.methods.comparePassword = function comparePassword(password, callback) {
    bcrypt.compare(password, this.password, callback);
};

UserSchema.pre('save', function saveHook(next) {
    const user = this;

    if (!user.isModified('password')) return next();

    return bcrypt.genSalt((saltError, salt) => {
        if (hashError) { return next(hashError); }

        user.password = hash;

        return next();
    });
});

module.exports = mongoose.model('User', UserSchema);
