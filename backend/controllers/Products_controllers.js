/*
PakPadhati : pak ni detials,aeni abohava,aenu utpadan,etc
PakMahiti  : pak na upyogo in human,
Kharido    : product Kharido
*/

const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/products");
const ErrorHandler = require("../utils/errorHandlers");
const cloudinary = require("cloudinary");

exports.addProduct = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
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

  req.body.images = imagesLinks;
  const data = await Product.create(req.body);
  res.send(data);
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

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  for (let i = 0; i < product.images.length; i++) {
    await cloudinary.v2.uploader.destroy(product.images[i].public_id);
  }
  await product.deleteOne({ _id: req.params.id });
  res.status(200).send({ success: true, message: "Deleted  Successfully!!" });
});
