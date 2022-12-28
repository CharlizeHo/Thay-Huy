import { Router } from "express";
import Product from "../models/Product";

const router = Router();

// Get all product categories
router.get("/categories", async (req, res) => {
  const categories = await Product.distinct("category");
  res.json(categories);
});

//Read
router.get("/", async (req, res) => {
  const products = await Product.find(req.query);
  console.log("Request /products just comes");
  res.json({ products: products, total: 100, skip: 0, limit: 30 });
});

//Search product Admin page //Do link dẫn trùng :productId nên phải để trên route trùng đuôi
router.get("/search", async (req, res) => {
  const products = await Product.find({
    title: { $regex: req.query.q, $options: "i" },
  });
  res.json({ products: products, total: 100, skip: 0, limit: 30 });
});

//Create
router.post("/add", async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

//Update
router.put("/:productId", async (req, res) => {
  const updateProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    { new: true }
  );
  res.json(updateProduct);
});

//delete
router.delete("/:productId", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(
    req.params.productId,
    req.body
  );

  res.json(deletedProduct);
});

//Get Product By Id
//productId sẽ nằm trong request mà client gửi đi server. productId sẽ nằm trong object params.
router.get("/:productId", async (req, res) => {
  //   console.log(req.params.productId);
  const product = await Product.findById(req.params.productId);
  // const product = products.find(
  //   (item) => item.id === parseInt(req.params.productId)
  // );
  if (!product)
    res.json({ message: `Product with id ${req.params.productId} not found` });
  res.json(product);
});

//Get Product of category
router.get("/category/:category", async (req, res) => {
  const products = await Product.find({ category: req.params.category }); //trong func find là 1 object
  res.json({ products: products, total: 5, skip: 0, limit: 0 });
});

export default router;
