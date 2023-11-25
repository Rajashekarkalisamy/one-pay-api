const model = require('../models/index');
const Responser = require("../response/index");
const Validator = require('validatorjs');

const create = async (req, res) => {

    let response;
    let validation = new Validator(req.body, {
        plan: 'required',
        plan_start_date: 'required|date',
        plan_end_date: 'required|date'
    });

    if (validation.passes()) {
        try {
            // Create a Tour
            const Tour = new model.tour({ user_id: req.user.id, ...req.body });

            // Save  in the database
            await Tour.save()
                .then(data => {
                    console.log("Rajasekar", data)
                    response = Responser.success(data);
                }).catch(error => {
                    response = Responser.error(error);
                });
        } catch (error) {
            console.log(error)
            response = Responser.error(error);
        }
    } else {
        response = Responser.validationfail(validation.errors)
    }
    return res.status(response.statusCode).send(response.data);
}

const list = async (req, res) => {
    const toursList = await model.tour.find({ "user_id": req.user.id });
    response = Responser.success(toursList);
    return res.status(response.statusCode).send(response.data);
}

module.exports = {
    create: create,
    list: list,
}
