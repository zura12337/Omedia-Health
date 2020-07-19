import React from "react";
import Form from "./common/form";
import authService from "../services/authService";

class EditProfile extends Form {
  state = { data: {} };

  componentDidMount() {
    const user = authService();
    this.setState({ data: user });
  }

  doSubmit = () => {
    localStorage.setItem("user", JSON.stringify(this.state.data));
    this.props.history.push("/profile");
    window.location.reload(false);
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
            "desired-weight",
            "Desired Weight",
            "number",
            user["desired-weight"]
          )}
          {this.renderInput(
            "desired-meal-calories",
            "Desired Meal Calories",
            "number",
            user["desired-meal-calories"]
          )}
          {this.renderInput(
            "desired-activity-calories",
            "Desired Activity Calories",
            "number",
            user["desired-activity-calories"]
          )}
          {this.renderButton("Submit Changes")}
        </form>
      </>
    );
  }
}

export default EditProfile;
