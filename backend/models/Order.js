const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

var OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        qantity: {
          type: Number,
          required: true,
        },
      },
    ],
    paidAt: {
      type: Date,
      default: Date.now(),
    },
    month: {
      type: Date,
      default: Date.now(),
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    orderStatus: {
      type: String,
      default: "Ordered",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
