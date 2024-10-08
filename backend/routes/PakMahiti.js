const express = require("express");
const {
  addPakMahiti,
  getAllPakMahiti,
  deletePakMahiti,
  getSinglePakMahiti,
} = require("../controllers/PakMahiti_controllers");
const app = express.Router();

app.get("/", getAllPakMahiti);
app.post("/", addPakMahiti);
app.delete("/del/:id", deletePakMahiti);
app.get("/sing/:id", getSinglePakMahiti);

module.exports = app;
