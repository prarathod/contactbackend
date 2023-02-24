const {constants} = require('../constants');
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    
    switch (statusCode) {
        case VALIDATION_ERROR :
            res.json({
                title: "Validation Error",
                message:err.message,
                stackTrace: err.stack
            });
            break;
        case NOT_FOUND :
            res.json({
                title: "Not Found",
                message:err.message,
                stackTrace: err.stack
            });
            break;
        case UNAUTHORIZED :
            res.json({
                title: "Un Authorized",
                message:err.message,
                stackTrace: err.stack
            });
            break;
        case FORBIDDEN :
            res.json({
                title: "Forbidden",
                message:err.message,
                stackTrace: err.stack
            });
            break;
        case SERVER_ERRO :
            res.json({
                title: "Server Error",
                message:err.message,
                stackTrace: err.stack
            });
            break;
            
        default:
            console.log("No Error, All good !");
            break;
    }
}

module.exports = errorHandler;