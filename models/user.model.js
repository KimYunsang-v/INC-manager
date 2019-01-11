const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    email : {type: String, required: true},
    //img: {type: String, required: true},
    sId: {type:  String},
    name: {type:  String},
    phone: {type: String},
    password: {type: String, required:  true},
});

// Export the model
const User = mongoose.model('User', UserSchema);

module.exports = User;