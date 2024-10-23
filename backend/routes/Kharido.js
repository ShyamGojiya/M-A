const express = require("express");
const {
  addProduct,
  getAllProducts,
  singleProduct,
  deleteProduct,
} = require("../controllers/Products_controllers");
const app = express.Router();

app.post("/", addProduct);
app.get("/", getAllProducts);
app.delete("/del/:id", deleteProduct);
app.get("/get/:id", singleProduct);

module.exports = app;
