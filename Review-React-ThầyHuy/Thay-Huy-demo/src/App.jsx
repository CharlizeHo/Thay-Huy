
const products = [
  {
    id: 1,
    title: "Jordan Nike 1",
    imageUrl:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
    price: 200.99,
    description: " Lorem ipsum dolor sit amet consectetu",
    tags: ["hot", "new", "trendy"],
  },
  {
    id: 2,
    title: "Converse 1970",
    imageUrl:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
    price: 100.99,
    description: " Lorem ipsum dolor sit amet consectetu",
    tags: ["hot", "new"],
  },
  {
    id: 3,
    title: "Vans Vault",
    imageUrl:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
    price: 150.49,
    description: " Lorem ipsum dolor sit amet consectetu",
    tags: ["new", "trendy"],
  },
];

const Card = ({ title, description, price, quantity = 0, tags }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>${price}</p>
      {quantity <= 0 ? <p>Sold out</p> : <p>Quantity: {quantity}</p>}
      <ul className="text-red-500">
        {tags?.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

const Counter = () => {
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={decrement}
        className={`p-2 bg-slate-100 border border-black rounded ${
          quantity <= 0 && "opacity-50"
        }`}
        disabled={quantity <= 0}
      >
        -
      </button>

      <span>{quantity}</span>
      <button
        onClick={increment}
        className="p-2 bg-slate-100 border border-black rounded"
      >
        +
      </button>
    </div>
  );
};

const Toggler = ({ question, answer }) => {
  // State: dong, mo -> isOpen (initalValue: true)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 rounded bg-blue-500 text-white"
      >
        {question}
      </button>

      {isOpen && <p>{answer}</p>}
    </div>
  );
};

const qa = [
  {
    id: 1,
    question: "How are you today?",
    answer: "I'm great",
  },
  {
    id: 2,
    question: "How are you today 1 ?",
    answer: "I'm great",
  },
  {
    id: 3,
    question: "How are you today 2?",
    answer: "I'm great",
  },
];

const Input = () => {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className="border border-black"
        onChange={handleText}
      />
      <p>Text: {text}</p>
    </div>
  );
};

const categoryOptions = [
  {
    value: "shoes",
    label: "Shoes",
  },
  {
    value: "shirt",
    label: "Shirts",
  },
  {
    value: "pant",
    label: "Pant",
  },
];

const Select = ({ options }) => {
  const [option, setOption] = useState(options[0].value);

  const handleOption = (e) => {
    setOption(e.target.value);
  };

  const filterdOption = options.find((item) => {
    return item.value === option;
  });

  return (
    <div>
      <select className="border border-black" onChange={handleOption}>
        {options.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
      <p>{filterdOption.label}</p>
    </div>
  );
};

const suzeOptions = [
  { value: "s", label: "Small" },
  { value: "m", label: "Medium" },
  { value: "l", label: "Large" },
];

const RadioButtons = ({ options, name }) => {
  const [option, setOption] = useState(options[0].value);

  const handleOption = (e) => {
    setOption(e.target.value);
  };

  return (
    <div>
      <div>
        {options.map((item) => {
          return (
            <div>
              <input
                type="radio"
                name={name}
                value={item.value}
                onChange={handleOption}
                checked={option === item.value}
              />
              <label>{item.label}</label>
            </div>
          );
        })}
      </div>

      <p>{option}</p>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Select options={categoryOptions} />
      <Select options={suzeOptions} />
      <RadioButtons options={categoryOptions} name="clothes" />
      <RadioButtons options={suzeOptions} name="size" />
    </div>
  );
}

// input.addEventListener("change", (e) => {
//   console.log(e.target.value)
// })