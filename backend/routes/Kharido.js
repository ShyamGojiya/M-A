const express = require("express");
const {
  addProduct,
  getAllProducts,
  singleProduct,
} = require("../controllers/Products_controllers");
const app = express.Router();

app.post("/", addProduct);
app.get("/", getAllProducts);
app.get("/:id", singleProduct);

module.exports = app;
