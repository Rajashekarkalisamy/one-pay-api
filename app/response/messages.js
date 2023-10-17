const message = {
    "R200": "Process Completed",
    "R201": "username/email has already in use",

    "R202": "Mail Id Not registered",
    "R203": "Mail Id Not verified",
    "R204": "Inactive account contact administrator",
    "R205": "Invalid Mail Id or Password",

    "R400": "Bad Request",
    "R404": "Something Went Wrong, Please Try after sometime"
}

const getMessage = (code) => {
    return message[code] ? message[code] : "";
}

module.exports = getMessage;