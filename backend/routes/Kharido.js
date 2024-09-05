const express = require("express");
const {
  addProduct,
  getAllProducts,
} = require("../controllers/Products_controllers");
const app = express.Router();

app.post("/", addProduct);
app.get("/", getAllProducts);

module.exports = app;
