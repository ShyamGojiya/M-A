const mongoose = require("mongoose");

const PakPadhatiSchema = new mongoose.Schema(
  {
    plantName: {
      type: String,
    },
    thumbnail: {
      type: String,
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
    details: {
      type: ["Mixed"],
    },
  },
  {
    collection: "PakPadhati",
  }
);

module.exports = mongoose.model("PakPadhati", PakPadhatiSchema);
