const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email : {type: String, required: true},
    //img: {type: String, required: true},
    sId: {type: String},
    name: {type: String},
    phone: {type: String},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false },
    isApprove: {type: Boolean, default: false },
});

// Export the model
const User = mongoose.model('User', UserSchema);

module.exports = User;