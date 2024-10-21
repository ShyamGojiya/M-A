const express = require("express");
const {
  addToCart,
  getCartDetails,
  removeFromCart,
  getMyCartDetails,
  updateCartQuantity,
} = require("../controllers/Cart_controllers");
const { isAuthenticatedUser } = require("../middleware/auth");
const app = express.Router();

app.post("/add", isAuthenticatedUser, addToCart);
app.get("/getall", getCartDetails);
app.get("/mycart", isAuthenticatedUser, getMyCartDetails);
app.delete("/del/:id", removeFromCart);
app.put("/quntity/:id/:newQuantity", updateCartQuantity);

module.exports = app;
