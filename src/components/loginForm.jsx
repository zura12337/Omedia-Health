import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = { data: {}, errors: {} };

  doSubmit = () => {
    console.log("Login Failed");
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  render() {
    return (
      <>
        <h1 className="text-center mt-5 mb-5">Login Form</h1>
        {this.renderInput("email", "Email")}
        {this.renderInput("password", "Password", "password")}
        {this.renderButton("Submit")}
      </>
    );
  }
}

export default LoginForm;
