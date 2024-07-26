const mongoose = require("mongoose");

const PakPadhatiSchema = new mongoose.Schema(
    {
      plantName: {
        type : String
      },
      thumbnail : {
        type : String
      },
      image: {
        type: String
      },
      details: {
        type: [
          "Mixed"
        ]
      }
    },
    {
      collection: "PakPadhati",
    }
  );

  module.exports = mongoose.model("PakPadhati",PakPadhatiSchema);