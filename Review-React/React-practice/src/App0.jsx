import React, { useState } from "react";

const Counter = () => {
  const [quantity, setQuantity] = useState(0);

  const decrease = () => {
    setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <button 
      onClick={decrease} 
      className={`px-2 border border-black bg-indigo-300 rounded 
      ${quantity<=0 && "opacity-50"}`}
      disabled={quantity<=0}>
        -
        </button>
      <span className="p-3">{quantity}</span>
      <button 
      onClick={increase}
      className="px-2 border border-black bg-indigo-300">
        +
        </button>
    </div>
  );
};

export default function App0() {
  return (
    <div>
      <Counter />
    </div>
  );
}
