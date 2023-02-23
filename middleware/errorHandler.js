const errorHandler = (err, req, res, next) => {
    const statusCode = req.StatusCode ? res.StatusCode : 500;
    res.json({message:err.message, stackTrace: err.stack});
};

module.exports = errorHandler;