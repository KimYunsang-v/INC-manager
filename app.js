const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user.route');
const mongoose = require('mongoose');
const app = express();

let dev_db_url =
    'mongodb://127.0.0.1:27017/inc';

mongoose.connect(dev_db_url,{ useNewUrlParser: true })
    .then(() => console.log('Successfully connected to mongodb'))
    .catch(e => console.error(e));

//mongoose.Promise = global.Promise;
//const db = mongoose.connection;
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/inc', user);

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

module.exports = app;