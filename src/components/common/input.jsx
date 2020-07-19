import React from "react";

const Input = ({ name, label, value, ...rest }) => {
  return (
    <div className="form-group m-2">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        id={name}
        value={value}
        className="form-control"
      />
    </div>
  );
};

export default Input;
