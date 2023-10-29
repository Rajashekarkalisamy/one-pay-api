const message = {
    "R200": { type: false, message: "Process Completed" },

    /* Success */
    "R201": { type: "success", message: "Thanks for registering, verify your mail address and continue to login" },
    "R206": { type: "success", message: "username/email has already in use, You can login" },
    "R207": { type: "success", message: "Please verify your mail address and continue to login" },

    /* Info */

    "R202": { type: "info", message: "Mail Id Not registered" },
    "R203": { type: "info", message: "Mail Id Not verified" },
    "R204": { type: "info", message: "Inactive account contact administrator" },
    "R205": { type: "info", message: "Invalid Mail Id or Password" },

    /* Info */
    "R400": { type: "error", message: "Bad Request" },
    "R401": { type: "error", message: "Invalid Token" },
    "R402": { type: "error", message: "Session Expired. Login again" },
    "R404": { type: "error", message: "Something Went Wrong, Please Try after sometime" },

    /* Warning */

}

const getMessage = (code) => {
    return message[code] ? message[code].message : "";
}
const getType = (code) => {
    return message[code] ? message[code].type : "";
}

module.exports = { getMessage, getType };