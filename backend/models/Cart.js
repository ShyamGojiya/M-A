const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const CartSchema = new mongoose.Schema({
  ProductName: {
    type: String,
    required: [true, "Enter ProductName"],
  },
  pid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // reference to Product model
  },
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // reference to User model
  },
  quantity: {
    type: Number,
    required: [true, "Enter Product Quantity"],
  },
  stock: {
    type: Number,
    required: [true, "Enter Product Stock"],
  },
  discount: {
    type: Number,
    required: [true, "Enter Product Discount"],
  },
  price: {
    type: Number,
    required: [true, "Enter Product Price"],
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Cart", CartSchema);
