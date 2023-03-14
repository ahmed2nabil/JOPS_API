const {StatusCodes } = require("http-status-codes");
const notFound = require("../middlewares/not-found");
const CustomAPIError = require("./custom-api");
class NotFound extends CustomAPIError {
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.NOT_FOUND;
    } 
}
module.exports = notFound;