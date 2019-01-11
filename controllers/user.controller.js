const User = require('../models/user.model');

exports.join = (req, res) => {
    console.log("======inc/user/======post")
    let user = new User(
        {
            email: req.body.email,
            sId: req.body.sId,
            name: req.body.name,
            phone: req.body.phone,
            password: req.body.password,
        }
    );

    user.save().then(() => res.status(200))
        .catch(e => console.log(e))
};

exports.list = (req, res) => {
    console.log("======inc/user/======get")
    User.find({})
        .then(users => {
            if (!users.length) return res.status(404).send({err:'User not found'});
            res.send(users);
        })
        .catch(err => res.status(500).send(err));
};

exports.login = (req, res) => {

};

exports.test = (req, res) => {
    res.send('-------------------');
};