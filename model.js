const mongoose = require("mongoose");

const createSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  image: {
    type: "String",
  },
});

module.exports = mongoose.model("DataForm", createSchema);
