const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/User");
const sendToken = require("../utils/sendToken");
const ErrorHandler = require("../utils/errorHandlers");

//register user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.create(req.body);
  sendToken(user, 201, res);
});

//all user
exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
  const data = await User.find();
  res.status(201).json({ total: data.length, data });
});

//all user
exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
  const data = await User.findOne({ _id: req.params.id });
  res.status(201).json({ succes: true, data });
});

//login user7
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Email or password is invalid", 401));
  }

  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    return next(new ErrorHandler("Email or password is invalid", 401));
  }
  sendToken(user, 200, res);
});

//logout user
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", "null", {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

exports.myProfile = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({ succes: true, data: user });
});
