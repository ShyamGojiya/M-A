/*
PakPadhati : pak ni detials,aeni abohava,aenu utpadan,etc
PakMahiti  : pak na upyogo in human,
Kharido    : product Kharido
*/

const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const pakMahiti = require("../models/pakNiMahiti");
const ErrorHandler = require("../utils/errorHandlers");

//insert new pakMahiti
exports.addPakMahiti = catchAsyncErrors(async (req, res, next) => {
  // const data = await pakPadhati.insertMany(pak_data);
  const data = await pakMahiti.insertMany(req.body);
  res.send({ success: true, total: data.length, data });
});

//get all pakmahiti
exports.getAllPakMahiti = catchAsyncErrors(async (req, res, next) => {
  const data = await pakMahiti.find();
  res.send({ success: true, total: data.length, data });
});

//get all pakmahiti
exports.getSinglePakMahiti = catchAsyncErrors(async (req, res, next) => {
  const data = await pakMahiti.findById(req.params.id);
  if (!data) {
    return next(new ErrorHandler("PakMahiti Not Found", 404));
  }
  res.send({ success: true, data });
});

exports.deletePakMahiti = catchAsyncErrors(async (req, res, next) => {
  const check = await pakMahiti.findById(req.params.id);
  if (!check) {
    return next(new ErrorHandler("PakMahiti Not Found", 404));
  }
  const data = await pakMahiti.findByIdAndDelete(req.params.id);
  res.send({ success: true });
});
