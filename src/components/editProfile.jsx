import React from "react";
import Form from "./common/form";
import authService from "../services/authService";
import Joi from "joi-browser";

class EditProfile extends Form {
  state = { data: {}, errors: {} };
  componentDidMount() {
    const user = authService();
    this.setState({ data: user });
  }

  doSubmit = () => {
    localStorage.setItem("user", JSON.stringify(this.state.data));
    this.props.history.push("/profile");
    window.location.reload(false);
  };

  schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().required().email().label("Email"),
    desiredWeight: Joi.number().required().label("Desired Weight"),
    desiredMealCalories: Joi.number().required().label("Desired Meal Calories"),
    desiredActivityCalories: Joi.number()
      .required()
      .label("Desired Activity Calories"),
    password: Joi.string(),
  };

  render() {
    const user = this.state.data;

    return (
      <>
        <h1 className="text-left mt-5">Edit Profile</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name", undefined, user.name)}
          {this.renderInput("email", "Email", undefined, user.email)}
          {this.renderInput(
            "desiredWeight",
            "Desired Weight",
            "number",
            user["desiredWeight"]
          )}
          {this.renderInput(
            "desiredMealCalories",
            "Desired Meal Calories",
            "number",
            user["desiredMealCalories"]
          )}
          {this.renderInput(
            "desiredActivityCalories",
            "Desired Activity Calories",
            "number",
            user["desiredActivityCalories"]
          )}
          {this.renderButton("Submit Changes")}
        </form>
      </>
    );
  }
}

export default EditProfile;
