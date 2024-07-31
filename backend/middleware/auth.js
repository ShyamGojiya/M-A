const User = require("../models/User");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandlers");
const catchAsyncErrors = require("./catchAsyncErrors");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please Login to Access this page", 401));
  }
  const decodeData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodeData.id);

  next();
});
