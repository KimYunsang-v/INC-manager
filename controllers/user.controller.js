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

    user.save().then(() => res.status(200).send())
        .catch(e => console.log(e))
};

exports.list = (req, res) => {
    console.log("======inc/user/======get");
    User.find({})
        .then(users => {
            if (!users.length) return res.status(404).send({err:'User not found'});
            res.send(users);
        })
        .catch(err => res.status(500).send(err));
};

exports.login = (req, res) => {

};

exports.approve = (req, res) => {
    console.log("======inc/approve/======post");
    console.log(req.body.isApprove);
    console.log(req.body.email);

    User.findOne({'email' : req.body.email})
        .then(user => {
            console.log(user.isApprove);
            if(req.body.isApprove) {
                user.isApprove = true;
                user.save().then(() => res.status(200))
                    .catch(() => res.status(400).send("approve"));
                console.log("approve");
            }
            else{
                user.remove().then(() => res.status(200))
                    .catch(() => res.status(400).send("not approve"));
                console.log("not approve");
            }
        }).catch(() => res.status(400));
};

exports.test = (req, res) => {
    res.send('-------------------');
};