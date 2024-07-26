const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
  {
    // uname: String,
    // email: String,
    // mobileNo: String,
    fname: String,
    lname: String,
    email: {type:String,unique:true},
    password: String
  },
  {
    collection: "userInfo",
  }
);

const PlantsInfoSchema = new mongoose.Schema(
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
    collection: "PlantsInfo",
  }
)

const PlantsUseSchema = new mongoose.Schema(
  {
    "plantName": {
      type: String
    },
    "thumbnail": {
      type: String
    },
    "uses": {
      type: [
        "Mixed"
      ]
    }
  },
  {
    collection: "PlantUses",
  }
)

mongoose.model("userInfo", UserDetailsSchema);
mongoose.model("PlantsInfo", PlantsInfoSchema);
mongoose.model("PlantUses", PlantsUseSchema);