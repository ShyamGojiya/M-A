const mongoose = require("mongoose");

const pakNiMahiti = new mongoose.Schema(
  {
    plantName: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    uses: {
      type: ["Mixed"],
    },
  },
  {
    collection: "pakMahiti",
  }
);

module.exports = mongoose.model("pakMahiti", pakNiMahiti);
