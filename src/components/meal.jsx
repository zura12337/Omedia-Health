import React, { Component } from "react";
import mealService from "../services/mealService";
import authService from "../services/authService";
import MealTable from "./mealTable";
import { NavLink } from "react-router-dom";

class Meal extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    const meal = mealService();
    this.setState({ data: meal });
  }

  doEdit = (meal) => {
    this.props.history.push(`/meal/${meal.id}`);
  };
  render() {
    const user = authService();
    const { data } = this.state;
    return (
      <div className="col">
        {user && (
          <NavLink className="btn btn-primary mt-5" to={`meal/add`}>
            Add Meal
          </NavLink>
        )}
        <MealTable data={data} handleEdit={this.doEdit} />
      </div>
    );
  }
}

export default Meal;
