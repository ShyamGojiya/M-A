const User = require("../models/User");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandlers");
const catchAsyncErrors = require("./catchAsyncErrors");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const token = req.query.token;
  // const { token } = req.cookies;
  // console.log("token : " + token);

  if (!token || token == "null") {
    return next(
      new ErrorHandler("કૃપા કરીને આ સામગ્રીને મેળવવા માટે લૉગિન કરો", 401)
    );
  }
  const decodeData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodeData.id);

  next();
});
