const express = require("express");
const {
  registerUser,
  getAllUser,
  loginUser,
  logoutUser,
  getSingleUser,
  myProfile,
  addToCart,
  removeFromCart,
  getCartItemsDetails,
} = require("../controllers/User_controllers");
const { isAuthenticatedUser } = require("../middleware/auth");
const app = express.Router();

app.post("/register", registerUser);
app.get("/", getAllUser);
app.get("/logout", logoutUser);
app.post("/login", loginUser);
app.post("/cart/add", isAuthenticatedUser, addToCart);
app.post("/cart/remove", isAuthenticatedUser, removeFromCart);
app.get("/profile", isAuthenticatedUser, myProfile);
app.get("/getCart", isAuthenticatedUser, getCartItemsDetails);
app.get("/:id", getSingleUser);

module.exports = app;
