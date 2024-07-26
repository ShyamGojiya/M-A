const app = require("./app");
const connect_db = require("./config/connect");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

//connect to database
connect_db();

const PORT = process.env.PORT;

//server connect
const server = app.listen(PORT,()=>{
    console.log(`running on PORT : ${PORT}`);
});