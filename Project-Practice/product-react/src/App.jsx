import React, { useState, useEffect } from "react";
import ProductFiltered from "./components/ProductFiltered";
import ProductGrid from "./components/ProductGrid";
// import { data } from "./data";

export default function App() {
  const [category, setCategory] = useState("default");
  const [priceRanges, setPriceRanges] = useState([]);

  const [products, setProducts] = useState([]);

  // fetch products data
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // products = data.products;
        setProducts(data.products);
        console.log(data.products);
      });
  }, []);

  if (!products) return <p>Products is fetching</p>;
  // let filteredProducts
  // if (category==="default") {
  // filteredProducts = data.products.filter((item)=> item.category === "default")
  // } else {
  // filteredProducts = data.products.filter((item)=> item.category === category)
  // }

  const filteredProducts = products
    .filter((item) => {
      return item.category === category || category === "default";
    })
    .filter((item) => {
      return (
        (priceRanges.includes("lt200") && item.price > 0 && item.price < 200) ||
        (priceRanges.includes("lt500") &&
          item.price > 200 &&
          item.price < 500) ||
        (priceRanges.includes("gt500") && item.price > 500) ||
        priceRanges.length === 0
      );
    });

  return (
    <div>
      <ProductFiltered
        setCategory={setCategory}
        priceRanges={priceRanges}
        setPriceRanges={setPriceRanges}
      />
      <ProductGrid products={filteredProducts} />
      {/* <ProductGrid products={filteredPrice} /> */}
    </div>
  );
}
