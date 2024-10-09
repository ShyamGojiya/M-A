const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const pakPadhati = require("../models/pakNiPadhati");
const ErrorHandler = require("../utils/errorHandlers");
const cloudinary = require("cloudinary");

/*
PakPadhati : pak ni detials,aeni abohava,aenu utpadan,etc
PakMahiti  : pak na upyogo in human,
Kharido    : product Kharido
*/

// const fs = require("fs");
// const pak_data = JSON.parse(fs.readFileSync(".././data_01.json"));
// console.log(pak_data);

//get all PakPadhati
exports.getAllPakPadhati = catchAsyncErrors(async (req, res, next) => {
  const data = await pakPadhati.find();
  const total = data.length;
  res.status(200).send({ success: true, total, data });
});

//insert new PakPadhati
exports.addPakPadhati = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body);
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
      transformation: [
        { width: 700, height: 700, crop: "limit", quality: "auto:good" }, // Resize to a maximum of 800x800 and adjust quality
      ],
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.image = imagesLinks;
  console.log(req.body);

  const data = await pakPadhati.create(req.body);
  res.send({ success: true, message: "PakPadhati Added Successfully!!" });
});

//delete all records
exports.deleteAllPadhati = catchAsyncErrors(async (req, res, next) => {
  const data = await pakPadhati.deleteMany();
  res.status(200).send({ success: true, message: "all data deleted" });
});

exports.deletePakPadhati = catchAsyncErrors(async (req, res, next) => {
  const PakPadhati = await pakPadhati.findById(req.params.id);
  for (let i = 0; i < PakPadhati.image.length; i++) {
    await cloudinary.v2.uploader.destroy(PakPadhati.image[i].public_id);
  }
  await pakPadhati.deleteOne({ _id: req.params.id });
  res.status(200).send({ success: true, message: "Deleted  Successfully!!" });
});

//get single PakPadhati
exports.getSinglePakPadhati = catchAsyncErrors(async (req, res, next) => {
  const data = await pakPadhati.findById(req.params.id);
  if (!data) {
    return next(new ErrorHandler("PakPadhati Not Found", 404));
  }
  return res.status(200).json({ success: true, data });
});

//edit PakPadhati
exports.updatePakPadhati = catchAsyncErrors(async (req, res, next) => {
  let PakPadhati = await pakPadhati.findById(req.params.id);
  if (!PakPadhati) {
    return next(new ErrorHandler("PakPadhati Not Found", 404));
  }
  PakPadhati = await pakPadhati.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  return res.status(201).json({ success: true, message: "Update Successfull" });
});
