import React from "react";
import Form from "./common/form";

class LoginForm extends Form {
  state = {};

  doSubmit = () => {
    console.log("Login Failed");
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
