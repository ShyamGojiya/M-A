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

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  if (!product) {
    return res
      .status(404)
      .send({ success: false, message: "Product not found" });
  }

  const { images: newImages } = req.body;
  let imagesLinks = [];

  // Check if newImages is a string and convert it to an array
  const images = typeof newImages === "string" ? [newImages] : newImages || [];

  // console.log(images[0].url === product.images[0].url);//return false
  // If new images are provided, handle them
  if (images.length > 0) {
    // Destroy old images that are not in the new images list
    for (const image of product.images) {
      const imageExists = images.some((newImage) => newImage.url === image.url);

      if (!imageExists) {
        await cloudinary.v2.uploader.destroy(image.public_id);
      }
    }

    // Upload new images
    for (const image of images) {
      // If the image already exists (from the frontend object), skip uploading
      if (!image.url || !image.public_id) {
        const result = await cloudinary.v2.uploader.upload(image, {
          folder: "MAPP",
        });

        imagesLinks.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      } else {
        imagesLinks.push(image); // Use the existing image object
      }
    }
  }

  // Update product fields
  product.title = req.body.title || product.title;
  product.type = req.body.type || product.type;
  product.price = req.body.price || product.price;
  product.discount = req.body.discount || product.discount;
  product.stock = req.body.stock || product.stock;
  product.desc = req.body.desc || product.desc;

  // // Update images field only if there are new images uploaded
  if (imagesLinks.length > 0) {
    product.images = imagesLinks;
  }

  await product.save();
  res.send({ success: true, product });
});

exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const data = await Product.find();
  res.send({ success: true, total: data.length, data });
});

exports.singleProduct = catchAsyncErrors(async (req, res, next) => {
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
