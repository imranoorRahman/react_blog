const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
// const cors = require("cors");


dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(console.log("Connected to Mongo!"))
.catch((err) => console.log("Error: " + err));


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);


app.listen("5000", () => {
    console.log("Backend is alive!");
});