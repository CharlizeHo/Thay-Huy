import { Router } from "express";
import Post from "../models/Post";

const router = Router();



// Get all posts
router.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.json({ posts: posts, total: 150, skip: 0, limit: 30 });
});

//Get a post by id
router.get("/:postId", async (req, res) => {
  console.log(req);
  const post = await Post.findById(req.params.postId);
  //if (!post) res.json({ message: `Post with ${req.params.postId} not found ` });
  res.json(post);
});

//Add a post
router.post("/add", async (req, res) => {
  console.log(req);
  const newPost = await Post.create(req.body);
  res.json(newPost);
});

//Update post
router.put("/:postId", async (req, res) => {
  const updatePost = await Post.findByIdAndUpdate(req.params.postId, req.body, {
    new: true,
  });
  res.json(updatePost);
});

//delete
router.delete("/:postId", async (req, res) => {
  const deletedPost = await Post.findByIdAndDelete(req.params.postId, req.body);
  res.json(deletedPost);
});

//Get a post of category (userId)
router.get("/userId/:userId", async (req, res) => {
//   console.log(req);
  const post = await Post.find({ userId: req.params.userId });
  res.json(post);
});

export default router;
