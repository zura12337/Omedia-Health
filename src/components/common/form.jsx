import React, { Component } from "react";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  handleChange = ({ currentTarget: target }) => {
    const data = { ...this.state.data };
    data[target.name] = target.value;
    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.doSubmit();
  };

  renderButton(label) {
    return (
      <button
        type="submit"
        onClick={this.handleSubmit}
        className="btn btn-primary m-2"
      >
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text", value) {
    const { data } = this.state;
    return (
      <Input
        type={type}
        onChange={this.handleChange}
        name={name}
        label={label}
        value={data[name]}
      />
    );
  }

  renderSelect(name, label, options) {
    const { data } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
      />
    );
  }
}

export default Form;
