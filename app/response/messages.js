const message = {
    "R200": "Process Completed",
    "R201": "username/email has already in use",
    "R400": "Bad Request",
    "R404": "Something Went Wrong, Please Try after sometime"
}
const getMessage = (code) => {
    return message[code] ? message[code] : "";
}

module.exports = getMessage;