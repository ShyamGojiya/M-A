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
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  desc: {
    type: String,
    required: [true, "Enter product description"],
  },
  createdAt: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productsSchema);
