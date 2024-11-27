//this for product related collection

const mongoose = require("mongoose");

//schema for project collection data
const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
  rating: String,
  images: [
    {
      image: String,
    },
  ],
  category: String,
  seller: String,
  stock: Number,
  numOfRevies: String,
  createDate: Date,
});

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
