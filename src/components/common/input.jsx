import React from "react";

const Input = ({ name, label, value, error, ...rest }) => {
  return (
    <div className="form-group m-2">
      <label className="form-control-label" htmlFor={name}>
        {label}
      </label>
      <input
        {...rest}
        name={name}
        id={name}
        value={value}
        className="form-control"
      />
      {error && (
        <div className="text-danger font-weight-bold mt-2 error">{error}</div>
      )}
    </div>
  );
};

export default Input;
