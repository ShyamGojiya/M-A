const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const pakPadhati = require("../models/pakNiPadhati");
const ErrorHandler = require("../utils/errorHandlers");

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
  // const data = await pakPadhati.insertMany(pak_data);
  const data = await pakPadhati.insertMany(req.body);
  res.send({ success: true, data });
});

//delete all records
exports.deleteAllPadhati = catchAsyncErrors(async (req, res, next) => {
  const data = await pakPadhati.deleteMany();
  res.status(200).send({ success: true, message: "all data deleted" });
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
