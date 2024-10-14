const mongoose = require("mongoose");

const pakNiMahiti = new mongoose.Schema(
  {
    plantName: {
      type: String,
    },
    thumbnail: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    image: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    uses: {
      type: ["Mixed"],
    },
  },
  {
    collection: "pakMahiti",
  }
);

module.exports = mongoose.model("pakMahiti", pakNiMahiti);
