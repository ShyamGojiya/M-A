const express = require("express");
const {
  addProduct,
  getAllProducts,
  singleProduct,
  deleteProduct,
  updateProduct,
  paymentApi,
  PlaceOrder,
  MyOrder,
  DeleteOrder,
  GetAllOrder,
  ChangeOrderType,
} = require("../controllers/Products_controllers");
const { isAuthenticatedUser } = require("../middleware/auth");
const app = express.Router();

app.post("/", addProduct);
app.get("/", getAllProducts);
app.put("/update/:id", updateProduct);
app.delete("/del/:id", deleteProduct);
app.get("/get/:id", singleProduct);
app.post("/payment", paymentApi);
app.post("/order", isAuthenticatedUser, PlaceOrder);
app.get("/order/admin", GetAllOrder);
app.get("/order/all", isAuthenticatedUser, MyOrder);
app.delete("/order/del/:id", DeleteOrder);
app.put("/order/:id", ChangeOrderType);

module.exports = app;
