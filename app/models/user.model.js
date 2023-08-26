const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: { type: String, index: true, unique: true, required: true },
    password: String,
    role: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
