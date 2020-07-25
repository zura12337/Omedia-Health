import React, { Component } from "react";
import Table from "./common/table";
import mealService from "../services/mealService";
import activityService from "../services/activityService";
import weightService from "../services/weightService";
import authService from "../services/authService";
import _ from "lodash";

class Dashboard extends Component {
  state = {};

  columns = [
    { path: "date", label: "Date" },
    { path: "weight", label: "Weight" },
    { path: "meal", label: "Meals" },
    { path: "activity", label: "Activities" },
  ];
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  generateKey = (item, column) => {
    return item.id + (column.path || column.key);
  };

  componentDidMount() {
    let meal = mealService();
    let activity = activityService();
    let weight = weightService();

    let dates = [];
    meal ? meal.map((item) => dates.push(item.date)) : (meal = []);
    activity ? activity.map((item) => dates.push(item.date)) : (activity = []);
    weight ? weight.map((item) => dates.push(item.date)) : (weight = []);
    let data = [...meal, ...activity, ...weight];

    let result = [];
    dates = dates.filter((v, i) => dates.indexOf(v) === i);
    dates.forEach((date) => {
      result.push({ date });
    });

    result.forEach((item) => {
      for (var i = 0; i < weight.length; i++) {
        if (weight[i].date === item.date) {
          item.weight = weight[i].weight;
        }
      }
      for (var i = 0; i < meal.length; i++) {
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
        if (item.allMealCalories === 0) {
          item.allMealCalories = null;
        }
      }
      for (var i = 0; i < activity.length; i++) {
        item.totalActivity = new Array();
        item.totalDistance = new Array();
        for (var i = 0; i < activity.length; i++) {
          if (activity[i].date === item.date) {
            item.totalDistance.push(activity[i].distance);
            item.totalActivity.push(activity[i].activityCalories);
          }
        }
        item.totalActivityCalories = item.totalActivity.reduce(
          (a, b) => parseInt(a) + parseInt(b),
          0
        );
        item.totalDistance = item.totalDistance.reduce(
          (a, b) => parseInt(a) + parseInt(b),
          0
        );
      }
    });

    console.log(result);
    const user = authService();

    this.setState({ data, dates, result, user });
  }

  render() {
    const { columns } = this;
    const { data, dates, result, user } = this.state;
    return (
      <div className="mt-5">
        <h1 className="text-center">Dashboard</h1>
        <div className="mt-5">
          <table className="table">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th scope="col" key={column.path}>
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {result &&
                result.map((item) => (
                  <tr scope="row">
                    <th>{item.date}</th>
                    {user &&
                    item.weight &&
                    user.desiredWeight >= parseInt(item.weight.slice(0, -2)) ? (
                      <td className="text-success">{item.weight}</td>
                    ) : (
                      <td className="text-danger">{item.weight}</td>
                    )}
                    {user && user.desiredMealCalories >= item.mealCalories ? (
                      <td className="text-success">{item.allMealCalories}</td>
                    ) : (
                      <td className="text-danger">{item.allMealCalories}</td>
                    )}
                    {user &&
                    user.desiredActivityCalories <=
                      item.totalActivityCalories ? (
                      <td className="text-success">
                        {item.totalActivityCalories}
                      </td>
                    ) : (
                      <td className="text-danger">
                        {item.totalActivityCalories}
                      </td>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Dashboard;
