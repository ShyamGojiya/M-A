const express = require("express");
const {
  getAllPakPadhati,
  addPakPadhati,
  deleteAllPadhati,
  getSinglePakPadhati,
  updatePakPadhati,
  deletePakPadhati,
} = require("../controllers/PakPadhati_controller");
const app = express.Router();

app.get("/", getAllPakPadhati);
app.post("/", addPakPadhati);
app.delete("/", deleteAllPadhati);
app.delete("/:id", deletePakPadhati);
app.get("/:id", getSinglePakPadhati);
app.put("/:id", updatePakPadhati);

module.exports = app;
