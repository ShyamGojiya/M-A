const app = require("./app");
const connect_db = require("./config/connect");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

//connect to database
connect_db();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT;
const IP_ADDRESS = process.env.IP_ADDRESS3;

//server connect
const server = app.listen(PORT, IP_ADDRESS, () => {
  console.log(`running on PORT : ${PORT}`);
});
