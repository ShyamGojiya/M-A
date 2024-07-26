//imports
const express = require("express");
const cors = require("cors");
const app = express();
const errorHandlers = require("./middleware/error")

//middleware
app.use(express.json());
app.use(cors());

//routes import
const PakPadhati = require("./routes/PakPadhati");

//routes
app.use("/api/v1/pakPadhati",PakPadhati);

// const razorpay = new Razorpay({
//   key_id: 'rzp_test_vJIT3biLsviUc0',
//   key_secret: 'TdoOOvr3FhLFJXu8v3ZjaOmR',
// });

//handle all error : Global
app.use(errorHandlers);

module.exports = app;
