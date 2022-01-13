const { Schema, model } = require("mongoose");
const productSchema = new Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
});

module.exports = model("Products", productSchema);
