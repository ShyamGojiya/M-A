const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/User");
const sendToken = require("../utils/sendToken");
const ErrorHandler = require("../utils/errorHandlers");
const mongoose = require("mongoose");

//register user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password, mobile } = req.body;
  const avatar = {
    public_id: "coming..soon..",
    url: "coming..soon..",
  };
  // console.log(req.body);
  const user = await User.create({ name, email, mobile, password, avatar });
  sendToken(user, 201, res);
});

//all user --ADMIN
exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
  const data = await User.find();
  res.status(201).json(data);
});

//SIngle user --ADMIN
exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
  const data = await User.findOne({ _id: req.params.id });
  res.status(201).json({ succes: true, data });
});

//login user
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

  // Update createdAt field to current time
  user.createdAt = new Date().toString();
  await user.save();

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

//profile
exports.myProfile = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({ success: true, data: user });
});
