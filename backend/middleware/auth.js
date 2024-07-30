const User = require("../models/User");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandlers");
const catchAsyncErrors = require("./catchAsyncErrors");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  console.log("here");
  const token = req.cookies?.token;
  console.log(token);

  if (!token) {
    return next(new ErrorHandler("Please Login to Access this page", 401));
  }
  const decodeData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodeData._id);

  next();
});
