import React from "react";
import Card from "./components/Card";
const products = [
  {
    id: 1,
    title: "Joden Nike 1",
    imageUrl:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
    price: 200.99,
  },
  {
    id: 2,
    title: "Joden Nike 1",
    imageUrl:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
    price: 100.99,
  },
  {
    id: 3,
    title: "Joden Nike 1",
    imageUrl:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
    price: 300.99,
  },
];
const App = () => {
  return (
    <div>
      {/* Container */}
      <div className="max-w-screen-xl mx-auto">
        {/* layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
          {products.map((item) => {
            console.log(item)
            return (
              <Card
                imageUrl={item.imageUrl}
                title={item.title}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default App;