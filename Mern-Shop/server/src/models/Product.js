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

// Duplicate the ID field.
productSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
productSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {   delete ret._id  }
});

const Product = mongoose.model("Product", productSchema);

export default Product;
