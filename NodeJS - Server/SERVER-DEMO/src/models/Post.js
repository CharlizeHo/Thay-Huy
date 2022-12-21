import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
  tite: String,
  body: String,
  userId: Number,
});

const Post = mongoose.model("Post", postSchema);

export default Post;
