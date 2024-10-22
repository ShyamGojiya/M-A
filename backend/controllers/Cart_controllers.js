const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Cart = require("../models/Cart");
const Product = require("../models/products");
const sendToken = require("../utils/sendToken");
const ErrorHandler = require("../utils/errorHandlers");

//add to cart
exports.addToCart = catchAsyncErrors(async (req, res, next) => {
  const check = await Cart.find({ pid: req.body.pid, uid: req.user.id });
  if (check.length > 0) {
    return next(new ErrorHandler("Product Already exist in cart!!", 401));
  }
  const product = await Product.findById(req.body.pid);

  req.body.ProductName = product.title;
  req.body.discount = product.discount;
  req.body.price = product.price;
  req.body.stock = product.stock;
  req.body.image = product.image;
  req.body.uid = req.user.id;

  const data = await Cart.create(req.body);
  // console.log(data);
  res.status(201).json(data);
});

//get all  cart items
exports.getCartDetails = catchAsyncErrors(async (req, res, next) => {
  const data = await Cart.find();
  res.status(201).json(data);
});

//get myCart items
exports.getMyCartDetails = catchAsyncErrors(async (req, res, next) => {
  const data = await Cart.find({ uid: req.user.id });
  res.status(201).json(data);
});

//remove from cart
exports.removeFromCart = catchAsyncErrors(async (req, res, next) => {
  let data = await Cart.findByIdAndDelete(req.params.id);
  data = await Cart.find();
  res.status(201).json(data);
});

//update product Quantity in cart
exports.updateCartQuantity = catchAsyncErrors(async (req, res, next) => {
  const { id, newQuantity } = req.params;
  await Cart.findByIdAndUpdate(id, {
    $set: { quantity: newQuantity },
  });
  res.status(201).json({ success: true });
});
