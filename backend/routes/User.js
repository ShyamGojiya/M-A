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
app.get("/:id", getSingleUser);
app.post("/login", loginUser);
app.get("/logout", logoutUser);
// app.get("/", myProfile);

module.exports = app;
