import React, { useState } from "react";

const Change = () => {
  const [content, setContent] = useState("");
  const handleContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="px-5">
      <header className="flex gap-3">
        <input
          className="w-[130px]"
          type="text"
          placeholder="type name"
          onChange={handleContent}
        />
        <p> Text: {content}</p>
      </header>
      <hr />
    </div>
  );
};

const textOption = [
  { value: "iPhone 12", label: "iPhone 12 Pro" },
  { value: "iPhone 13", label: "iPhone 13 Pro" },
  { value: "iPhone 14", label: "iPhone 14 Pro" },
];

const Select = ({ options }) => {
  const [text, setText] = useState(options[0].value);

  const handleText = (e) => {
    setText(e.target.value);
  };

  const filteredOption = options.find((item) => {
    return item.value === text;
  });

  return (
    <header className="flex gap-[40px]">
      <select className="border" onChange={handleText}>
        {options.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
        {/* /* <option value="" selected>
            {"Select"}
          </option>
          <option value="iPhone 12">iPhone 12 Pro</option>
          <option value="iPhone 13">iPhone 13 Pro</option>
          <option value="iPhone 14">iPhone 14 Pro</option>*/}
      </select>

      <p>{filteredOption.label}</p>
    </header>
  );
};

const colorOptions = [
  { value: "P", label: "Pink" },
  { value: "B", label: "Black" },
  { value: "G", label: "Gold" },
];

const RadioButtons = ({ options, name }) => {
  const [option, setOption] = useState(options[0].value);

  const handleOption = (e) => {
    setOption(e.target.value);
  };

  return (
    <div className="flex">
      <div className="flex">
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
      <p className="px-6">{option}</p>
    </div>
  );
};

const checkBoxOptions = [
  { value: "Shirt", label: "Shirt" },
  { value: "Shoes", label: "Shoes" },
  { value: "Pants", label: "Pants" },
];

const CheckBoxes = ({ options}) => {
  const [choices, setChoices] = useState([]);

  const handleChoices = (e) => {
    if (e.target.checked) {
      setChoices([...choices, e.target.value]);
    } else {
      const filteredChoices = choices.filter((item) => item !== e.target.value);
      setChoices(filteredChoices);
    }
  };
  return (
    <div className="flex">
      {/* Checkboxes */}
      <div>
        {options.map((item) => {
          return (
            <div key={item.value}>
              <input
                type="checkbox"
                onChange={handleChoices}
                value={item.value}
                // checked
              />
              <label>{item.label}</label>
            </div>
          );
        })}         
      </div>
      {/* Result */}
      <div>
        {choices.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
};
export default function App2() {
  return (
    <div>
      <Change />
      <Select options={textOption} />
      <Select options={colorOptions} />
      <RadioButtons options={textOption} name="phone" />
      <RadioButtons options={colorOptions} name="Color" />
      <CheckBoxes options={checkBoxOptions}/>
      <CheckBoxes options={colorOptions}/>
    </div>
  );
}
