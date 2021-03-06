import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Service from "../services/service";

class Profile extends Component {
  state = { data: {} };

  renderDetail(name, label, comment = "") {
    const user = Service("user");
    return (
      <p className="ml-5">
        {label}: {user[name]} {comment}
      </p>
    );
  }

  render() {
    return (
      <>
        <h1 className="m-5">Profile</h1>
        {this.renderDetail("name", "Name")}
        {this.renderDetail("email", "Email")}
        {this.renderDetail("desiredWeight", "Desired Weight", "Kg")}
        {this.renderDetail("desiredMealCalories", "Desired Meal Calories")}
        {this.renderDetail(
          "desiredActivityCalories",
          "Desired Activity Calories"
        )}
        <NavLink className="btn btn-primary ml-5 m-2" to="/profile/edit">
          Edit Profile
        </NavLink>
        <NavLink className="btn btn-danger btn-logout m-2" to="/logout">
          Logout
        </NavLink>
      </>
    );
  }
}

export default Profile;
