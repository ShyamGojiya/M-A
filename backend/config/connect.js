const mongoose = require("mongoose");

const connect_db = () => {
    mongoose
      .connect(
        process.env.MONGO_URL
      )
      .then(() => {
        console.log("You are connected....!");
      })
      .catch((e) => console.log(e));
}

module.exports = connect_db
