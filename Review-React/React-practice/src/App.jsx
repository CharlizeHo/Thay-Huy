import React from "react";

// const Card (props) => {
// const [title, description, price] = props
//}

const products = [
  {
    id: 1,
    title: "Jordan Nike 1",
    description: "Brand New and So Chill",
    imageUrl:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
    price: 200.99,
    tags: ["hot","new"],
  },
  {
    id: 2,
    title: "Converse 1970",
    description: "Brand New and So Chill",
    imageUrl:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
    price: 100.99,
    tags: ["hot","new"],
  },
  {
    id: 3,
    title: "Vans Vault",
    description: "Brand New and So Chill",
    imageUrl:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
    price: 150.49,
    tags: ["hot","new", "trendy"],
  },
];

const Card = ({ title, description, price, quantity = 0, tags}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>${price}</p>
      {quantity <= 0 ? <p>Sold Out</p> : <p>Quantity: {quantity}</p>}
      <ul>
        {tags?.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <div>
      {products?.map((item) => {
        return (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            quantity={item.quantity}
            tags={item.tags}
          />
        );
      })}
    </div>
  );
}
