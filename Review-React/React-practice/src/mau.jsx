import React from "react";
const products = [
  {
    id: 1,
    title: "Jordan Nike 1",
    imageUrl:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
    price: 200.99,
    description: "lorem5",
    tags: ["hot", "new"],
  },
  {
    id: 2,
    title: "Converse 1970",
    imageUrl:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
    price: 100.99,
    description: "lorem5",
    tags: ["hot", "new"],
  },
  {
    id: 3,
    title: "Vans Vault",
    imageUrl:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
    price: 150.49,
    description: "lorem5",
    tags: ["hot", "new"],
  },
];
const Card = ({ title, description, price, quantity = 0, tags }) => {
  // const {title, description, price}=props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>${price}</p>
      {quantity <= 0 ? <p>Sold out</p> : <p>quantity:{quantity}</p>}
      <ul className="text-red-500">
        {tags?.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};
export default function App() {
  return (
    <div>
      {products.map((item) => {
        return (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            // quantity={item.title}
            tags={item.tags}
          />
        );
      })}
    </div>
  );
}