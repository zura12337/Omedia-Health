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
    let meal = mealService();
    let dates = [];
    let result = [];
    meal ? meal.map((item) => dates.push(item.date)) : (meal = []);
    dates = dates.filter((v, i) => dates.indexOf(v) === i);

    dates.forEach((date) => {
      result.push({ date });
    });

    result.forEach((item) => {
      item.allMeal = new Array();
      for (var i = 0; i < meal.length; i++) {
        if (meal[i].date === item.date) {
          item.allMeal.push(meal[i].mealCalories);
        }
      }
      item.allMealCalories = item.allMeal.reduce(
        (a, b) => parseInt(a) + parseInt(b),
        0
      );
    });

    this.setState({ data: result });
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
