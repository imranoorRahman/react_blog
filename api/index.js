const express = require("express");
const app = express();
// const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(console.log("Connected to Mongo!")).catch((err) => console.log("Error:" + err));

app.listen("5000", ()=> {console.log("Backend has been hit!");});