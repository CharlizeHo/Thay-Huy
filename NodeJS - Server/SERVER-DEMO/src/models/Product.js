import mongoose from "mongoose";
const { Schema } = mongoose; //Lấy schema từ mongoose === mongoose.schema

//const productSchema = new mongoose.schema({})
const productSchema = new Schema({
  title: String,
  description: String,
  category: String,
  imageUrl: String,
  price: Number,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
