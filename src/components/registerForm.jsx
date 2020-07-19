import React, { Component } from "react";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {};

  doSubmit = () => {
    localStorage.setItem("user", JSON.stringify(this.state.data));
    this.props.history.push("/dashboard");
    window.location.reload(false);
  };

  render() {
    return (
      <>
        <h1 className="text-center mb-5 mt-5">Register Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("email", "Email")}
          <div className="form-row m-1">
            {this.renderInput("desired-weight", "Desired Weight", "number")}
            {this.renderInput(
              "desired-meal-calories",
              "Desired Meal Calories",
              "number"
            )}
            {this.renderInput(
              "desired-activity-calories",
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
