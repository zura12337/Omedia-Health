import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group m-2">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} className="form-control">
        <option value="" />
        {options.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      {error && (
        <div className="text-danger font-weight-bold mt-2">{error}</div>
      )}
    </div>
  );
};

export default Select;
