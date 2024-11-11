const express = require("express");
const {
  addProduct,
  getAllProducts,
  singleProduct,
  deleteProduct,
  updateProduct,
  paymentApi,
} = require("../controllers/Products_controllers");
const app = express.Router();

app.post("/", addProduct);
app.get("/", getAllProducts);
app.put("/update/:id", updateProduct);
app.delete("/del/:id", deleteProduct);
app.get("/get/:id", singleProduct);
app.post("/payment", paymentApi);

module.exports = app;
