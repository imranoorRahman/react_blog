const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const multer = require("multer")
const path = require("path")

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

dotenv.config();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("App is running!");
})

mongoose.connect(process.env.REACT_APP_MONGO_URI)
.then(console.log("Connected to Mongo!"))
.catch((err) => console.log("Error: " + err));

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "img");
    }, filename:(req, file, cb) => {
        cb(null, req.body.name);
    }
});

const upload = multer({storage});
app.post("/api/upload", upload.single("file"), (req,res) => {
    return res.status(200).json("File has been uploaded!")
})

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/img", express.static(path.join(__dirname,"/img")))

app.listen(process.env.PORT || "5000", () => {
    console.log("Backend is alive!");
});