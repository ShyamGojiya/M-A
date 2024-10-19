const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Enter product title"],
  },
  type: {
    type: String,
    required: [true, "Enter product type"],
  },
  price: {
    type: Number,
    required: [true, "Enter product price"],
  },
  discount: {
    type: Number,
    required: [true, "Enter product discount"],
  },
  stock: {
    type: Number,
    required: [true, "Enter product stock"],
  },
  quantity: {
    type: Number,
    required: [true, "Enter product stock"],
    default: 1,
  },
  image: {
    type: String,
    default:
      "https://res.cloudinary.com/dcxdcs6l4/image/upload/v1698313520/MAAPP/sowvpuuc5muctocyyvko.jpg",
  },
  desc: {
    type: String,
    required: [true, "Enter product description"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productsSchema);
