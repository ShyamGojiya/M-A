//imports
const express = require("express");
const cors = require("cors");
const app = express();
const errorHandlers = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");

//middleware
app.use(express.json({ limit: "10mb" })); // Adjust as necessary
app.use(cookieParser());
app.use(express.urlencoded({ limit: "10mb", extended: true })); // Adjust as necessary
app.use(fileupload());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://10.112.72.92:3000", "http://10.112.61.93:3000", "http://10.112.72.0:3000"],
    credentials: true,
  })
);
// app.use(cors({ origin:'*' }));

//routes import
const PakPadhati = require("./routes/PakPadhati");
const pakMahiti = require("./routes/PakMahiti");
const User = require("./routes/User");
const Product = require("./routes/Kharido");

//routes
app.use("/api/v1/pakPadhati", PakPadhati);
app.use("/api/v1/pakMahiti", pakMahiti);
app.use("/api/v1/user", User);
app.use("/api/v1/product", Product);

// const razorpay = new Razorpay({
//   key_id: 'rzp_test_vJIT3biLsviUc0',
//   key_secret: 'TdoOOvr3FhLFJXu8v3ZjaOmR',
// });

//handle all error : Global
app.use(errorHandlers);

module.exports = app;
