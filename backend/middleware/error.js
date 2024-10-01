// const ErrorHandler = require("../utils/errorHandlers");

module.exports = (err,req,res,next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    if (err.code === 11000) {
        return res.status(400).json({
            success: false,
            message: "Duplicate Email",
        });
    }

    res.status(err.statusCode).json({
        success:false,
        message:err.message
    });
};