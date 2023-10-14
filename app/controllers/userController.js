const model = require('../models/index');
const { Op } = require("sequelize");
const Responser = require("../response/index");
let Validator = require('validatorjs');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const create = async (req, res) => {

    let validation = new Validator(req.body, {
        email: 'required|email',
        password: 'required|min:6'
    });

    let response;

    if (validation.passes()) {
        try {
            let userName = req.body.email.split('@')[0];
            const password = await bcrypt.hash(req.body.password, 10);
            let userData = {
                email: req.body.email,
                username: userName,
                password: password
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
                        delete userData.password; 
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

const login = async (req, res) => {

    let validation = new Validator(req.body, {
        email: 'required|email'
    });

    let response;
    if (validation.passes()) {
        try {
            const userData = await model.user.findOne({
                where: {
                    email: req.body.email
                },
            });

            if (userData) {
                if (userData.is_email_verified) {
                    if (userData.is_active) {
                        const isValid = await bcrypt.compare(req.body.password, userData.password);
                        if (isValid) {
                            // Create token
                            const token = jwt.sign(
                                { user_id: userData._id, email: userData.email },
                                process.env.JWT_SECRET_KEY,
                                {
                                    expiresIn: "2h",
                                }
                            );
                            response = Responser.success({ jwt: token, create_at: new Date() });
                        } else {
                            response = Responser.custom("R205");
                        }
                    } else {
                        response = Responser.custom("R204");
                    }
                } else {
                    response = Responser.custom("R203");
                }

            } else {
                response = Responser.custom("R202");
            }
        } catch (error) {
            response = Responser.error(error);
        }
    } else {
        response = Responser.validationfail(validation.errors)
    }

    return res.status(response.statusCode).send(response.data);
}

module.exports = {
    create: create,
    login: login
}
