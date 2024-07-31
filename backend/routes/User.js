const express = require("express");
const {
  registerUser,
  getAllUser,
  loginUser,
  logoutUser,
  getSingleUser,
  myProfile,
} = require("../controllers/User_controllers");
const { isAuthenticatedUser } = require("../middleware/auth");
const app = express.Router();

app.post("/register", registerUser);
app.get("/", getAllUser);
app.get("/logout", logoutUser);
app.post("/login", loginUser);
app.get("/profile", isAuthenticatedUser, myProfile);
app.get("/:id", getSingleUser);

module.exports = app;
