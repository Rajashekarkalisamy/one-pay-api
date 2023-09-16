const model = require('../models/index');
const { Op } = require("sequelize");
const Responser = require("../response/index");
let Validator = require('validatorjs');

module.exports.create = async (req, res) => {
    let response;

    let validation = new Validator(req.body, {
        email: 'required|email'
    });

    if (validation.passes()) {
        try {
            let userName = req.body.email.split('@')[0];
            const userData = {
                email: req.body.email,
                username: userName
            }
            const checkData = await model.user.findAll({
                where: {
                    [Op.or]: {
                        email: req.body.email,
                        username: userName
                    },
                },
            });
            if (checkData.length > 0) {
                response = Responser.custom("R201");
            } else {
                await model.user
                    .create(userData)
                    .then((result) => {
                        response = Responser.success(userData);
                    });
            }
        } catch (error) {
            response = Responser.error(error);
        }
    } else {
        response = Responser.validationfail(validation.errors)
    }
    return res.status(response.statusCode).send(response.data);
}
