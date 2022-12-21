import React from "react";
import { categoryOptions } from "../data";
import { priceOptions } from "../data";

const ProductCheckboxes = ({ options, choices, setChoices, name }) => {
  const changeOptions = (e) => {
    if (e.target.checked) {
      setChoices([...choices, e.target.value]);
    } else {
      setChoices(choices.filter((item) => item !== e.target.value));
    }
  };

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{name.toUpperCase}</span>
      </label>
      {/* Checkboxes */}
      <div className="form-control flex flex-col">
        {options.map((item) => {
          return (
            <label key={item.value}>
              <input
                type="checkbox"
                onChange={changeOptions}
                value={item.value}
                className="checkbox checkbox-secondary"
              />
              <span className="label-text">{item.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

const ProductSelect = ({ options, name, setOption }) => {
  const changeOption = (e) => {
    setOption(e.target.value);
  };
  return (
    <div className="form-control flex w-full max-w-xs flex-col">
      <label className="label">
        <span className="label-text">{name.toUpperCase()}</span>
      </label>
      <select
        className="select-bordered select"
        defaultValue="default"
        onChange={changeOption}
      >
        <option value="default">All {name}...</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
const ProductFiltered = ({ setCategory, priceRanges, setPriceRanges }) => {
  return (
    <div>
      {/* container */}
      <div className="mx-auto max-w-screen-xl px-4">
        {/* layout */}
        <div className="flex flex-col items-start gap-6 py-8">
          <ProductSelect
            setOption={setCategory}
            options={categoryOptions}
            name="category"
          />
          {/* <ProductSelect options={["M", "S", "XL"]} name="size" /> */}
        </div>
        <div>
          <ProductCheckboxes
            setChoices={setPriceRanges}
            choices={priceRanges}
            options={priceOptions}
            name="price"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductFiltered;
