import React from "react";
const ProductCard = ({ title, imageUrl, price, category }) => {
  return (
    <div className="shadow-lg">
      <div className="overflow-hidden">
        {/* image */}
        <img
          className="h-[200px] w-full object-cover hover:scale-110"
          src={imageUrl}
          alt="Shoes"
        />
      </div>
      {/* content */}
      <div className="flex flex-col gap-3 px-3 pt-3 pb-1.5">
        <h5>{title}</h5>
        <div className="flex items-center justify-between">
          <p>{price}</p>
          <p>{category}</p>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = ({ products }) => {
  return (
    <div>
      {/* Container */}
      <div className="mx-auto max-w-screen-xl px-4">
        {/* layout */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.length <=0 ? <p>No items found</p> : products.map((item) => {
            return (
              <ProductCard
                key={item.id}
                title={item.title}
                price={item.price}
                category={item.category}
                imageUrl={item.thumbnail}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;