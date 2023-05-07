const mongoose = require("mongoose");

const conn = () => {
  return mongoose
    .connect("mongodb://127.0.0.1:27017/UploadImage")
    .then(() => {
      console.log("connection established on port 27017");
    })
    .catch((err) => {
      console.log(
        "error connecting to Mongoose server on port 27017 with error: " + err
      );
    });
};

module.exports = conn;
