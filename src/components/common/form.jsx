import React, { Component } from "react";
import Input from "./input";
import Select from "./select";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {},
    errors: { date: null },
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    console.log(errors);
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: target }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(target);
    if (errorMessage) errors[target.name] = errorMessage;
    else delete errors[target.name];

    const data = { ...this.state.data };
    data[target.name] = target.value;
    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  renderButton(label) {
    return (
      <button
        type="submit"
        onClick={this.handleSubmit}
        className="btn btn-primary btn-sm m-2 mb-5"
      >
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text", value) {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        onChange={this.handleChange}
        name={name}
        label={label}
        error={errors[name]}
        value={data[name]}
      />
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  }
}

export default Form;
