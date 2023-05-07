const express = require("express");
const path = require("path");
const app = express();
// const bodyParser = require("body-parser");

// const conn = require("./conn");
// const model = require("./model");

//form multer
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });

const publicPath = path.join(__dirname, "./public");
app.use(express.static(publicPath));

// Include express.json() middleware
app.use(express.json());

// Include express.urlencoded() middleware
app.use(express.urlencoded({ extended: true }));

// Create a GET endpoint for '/' route
app.get("/", (req, res) => {
  res.sendFile("./public/index.html");
});

// Create a POST endpoint for '/upload' route
app.post("/upload", upload.single("myFile"), (req, res) => {
  console.log("Body:" + req.body);
  console.log("File:" + req.file);
});

const start = async () => {
  try {
    // await conn();
    app.listen(8080, "127.0.0.1", () => {
      console.log("connection established...");
    });
  } catch (error) {
    console.log("error", error);
  }
};

start();
