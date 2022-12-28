import React from "react";

const FormRow = ({ label, children, className }) => {
  return (
    <div className={`form-control w-full ${className}`}>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      {children}
    </div>
  );
};

export default FormRow;
