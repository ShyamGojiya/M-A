/*
PakPadhati : pak ni detials,aeni abohava,aenu utpadan,etc
PakMahiti  : pak na upyogo in human,
Kharido    : product Kharido
*/

const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const pakMahiti = require("../models/pakNiMahiti");
const ErrorHandler = require("../utils/errorHandlers");
const cloudinary = require("cloudinary");

//insert new pakMahiti
exports.addPakMahiti = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.image === "string") {
    images.push(req.body.image);
  } else {
    images = req.body.image;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "MAPP",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.image = imagesLinks;
  console.log(req.body);
  const data = await pakMahiti.create(req.body);
  res.send({ success: true, message: "PakPadhati Added Successfully!!", data });
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
