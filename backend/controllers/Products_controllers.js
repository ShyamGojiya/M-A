/*
PakPadhati : pak ni detials,aeni abohava,aenu utpadan,etc
PakMahiti  : pak na upyogo in human,
Kharido    : product Kharido
*/

const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/products");
const ErrorHandler = require("../utils/errorHandlers");

exports.addProduct = catchAsyncErrors(async (req, res, next) => {
  // const data = await pakPadhati.insertMany(pak_data);
  const data = await Product.insertMany(req.body);
  res.send({ success: true, total: data.length, data });
});

exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  // const data = await pakPadhati.insertMany(pak_data);
  const data = await Product.find();
  res.send({ success: true, total: data.length, data });
});

exports.singleProduct = catchAsyncErrors(async (req, res, next) => {
  // const data = await pakPadhati.insertMany(pak_data);
  const data = await Product.findById(req.params.id);
  res.send({ success: true, data });
});
