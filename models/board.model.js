const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

const BoardSchema = new mongoose.Schema({
    id: {type:  String},
    title: {type: String},
    date: {type: Date, 'default':Date.now()},
    message : {type: String},
    writer: {type: String },
});

// Export the model
const Board = mongoose.model('Board', BoardSchema);

module.exports = Board;