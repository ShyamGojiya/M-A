const express = require("express");
const {
  registerUser,
  getAllUser,
  loginUser,
  logoutUser,
  getSingleUser,
  myProfile,
  deleteSingleUser,
  UpdateMyProfile,
} = require("../controllers/User_controllers");
const { isAuthenticatedUser } = require("../middleware/auth");
const app = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.post("/register", registerUser);
app.get("/", getAllUser);
app.get("/logout", logoutUser);
app.post("/login", loginUser);
app.delete("/del/:id", deleteSingleUser);
app.get("/profile", isAuthenticatedUser, myProfile);
app.put("/profile", isAuthenticatedUser, UpdateMyProfile);
app.get("/:id", getSingleUser);

module.exports = app;
