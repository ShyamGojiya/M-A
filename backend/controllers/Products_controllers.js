/*
PakPadhati : pak ni detials,aeni abohava,aenu utpadan,etc
PakMahiti  : pak na upyogo in human,
Kharido    : product Kharido
*/

const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/products");
const Cart = require("../models/Cart");
const Order = require("../models/Order");
const User = require("../models/User");
const ErrorHandler = require("../utils/errorHandlers");
const cloudinary = require("cloudinary");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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
  console.log(req.params.id);

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

exports.paymentApi = catchAsyncErrors(async (req, res, next) => {
  const products = req.body.product;

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.ProductName,
        images: [product.image],
      },
      unit_amount: Math.round(product.price * (100 - product.discount)), // Price in cents
    },
    quantity: product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success?id=" + products[0].uid,
    cancel_url: "http://localhost:3000/cancel",
  });

  return res.json({ id: session.id });
});

exports.PlaceOrder = catchAsyncErrors(async (req, res, next) => {
  const id = req.user.id;
  console.log(id);

  const user = await User.findById(id);
  if (!user) {
    return res
      .status(404)
      .json({ success: false, message: "User Not Found!!" });
  }
  console.log(user);

  const cartItems = await Cart.find({ uid: id });
  // console.log(cartItems);

  if (cartItems.length < 1) {
    return res
      .status(404)
      .json({ success: false, message: "Yout Cart is Empty!!" });
  }

  const data = {};
  data.user = id;
  data.order = [];

  cartItems.map((product, index) =>
    data.order.push({ pid: product.pid, quantity: product.quantity })
  );
  // console.log(data.order);

  let p = cartItems.map(
    (product, index) =>
      (product.price * (100 - product.discount) * product.quantity) / 100
  );

  data.totalPrice = 0;
  for (let index = 0; index < p.length; index++) {
    data.totalPrice += p[index];
  }

  const order = await Order.create(data);
  await Cart.deleteMany({ uid: id });
  const newOrder = order.order;

  for (let index = 0; index < newOrder.length; index++) {
    const p = await Product.findById(newOrder[index].pid);
    p.stock = p.stock - newOrder[index].quantity;
    await p.save();
  }

  res.status(200).json({ order });
});

exports.MyOrder = catchAsyncErrors(async (req, res, next) => {
  const id = req.user.id;

  const Orders = await Order.find({ user: id }).populate("order.pid").exec();

  if (!Orders || Orders.length === 0) {
    return res
      .status(404)
      .json({ success: false, message: "No Order Found!!" });
  }

  return res.status(200).json({ success: true, Orders });
});

exports.GetAllOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.find().populate("user").populate("order.pid");

  return res.status(200).json({ len: order.length, order });
});

exports.DeleteOrder = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;

  const order = await Order.deleteOne({ _id: id });

  return res.status(200).json({ success: true });
});

exports.ChangeOrderType = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  // console.log(id);

  const order = await Order.findById(id);
  order.orderStatus = "Finished";
  await order.save();
  // console.log(order);

  return res.status(200).json({ success: true });
});
