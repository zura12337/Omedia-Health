import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class RegisterForm extends Form {
  state = { data: {}, errors: {} };

  doSubmit = () => {
    localStorage.setItem("user", JSON.stringify(this.state.data));
    this.props.history.push("/dashboard");
  };

  schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().required().email().label("Email"),
    desiredWeight: Joi.number().required().label("Desired Weight"),
    desiredMealCalories: Joi.number().required().label("Desired Meal Calories"),
    desiredActivityCalories: Joi.number()
      .required()
      .label("Desired Activity Calories"),
    password: Joi.string().required().label("Password"),
  };

  render() {
    return (
      <>
        <h1 className="text-center mb-5 mt-5">Register Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("email", "Email")}
          <div className="form-row m-1">
            {this.renderInput("desiredWeight", "Desired Weight", "number")}
            {this.renderInput(
              "desiredMealCalories",
              "Desired Meal Calories",
              "number"
            )}
            {this.renderInput(
              "desiredActivityCalories",
              "Desired Activity Calories",
              "number"
            )}
          </div>
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Submit")}
        </form>
      </>
    );
  }
}

export default RegisterForm;
