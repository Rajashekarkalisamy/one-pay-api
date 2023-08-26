const User = require('../models/user.model.js');

module.exports.create = (req, res) => {
    // Validate request

    if (!req.body) {
        return res.status(400).send({
            message: "Request Body can't be empty"
        });
    }

    // Create a Note
    const user = new User(req.body);

    // Save Note in the database
    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        });
}

module.exports.userslist = (req, res) => {
    User.find({}, (err, docs) => {
        if (err) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        }
        return res.status(200).send(docs)
    });
}
