const getMessage = require("./messages")

const success = (data = {}) => {
    return {
        statusCode: 200,
        data: {
            success: true,
            statusCode: "R200",
            message: getMessage("R200"),
            data: data
        }
    }
}
const custom = (code, data = {}) => {
    return {
        statusCode: 200,
        data: {
            success: true,
            statusCode: code,
            message: getMessage(code),
            data: data
        }
    }
}
const error = (error = {}) => {
    return {
        statusCode: 404,
        data: {
            success: false,
            message: getMessage("R404"),
            data: error
        }
    }
}
const badRequest = () => {
    return {
        statusCode: 400,
        data: {
            success: true,
            statusCode: "R400",
            message: getMessage("R400")
        }
    }
}
const validationfail = (errors) => {
    return {
        statusCode: 422,
        data: {
            success: false,
            statusCode: 422,
            message: Object.values(errors.all())[0][0],
            data: errors
        }
    }
}

module.exports = {
    validationfail,
    badRequest,
    success,
    custom,
    error
}