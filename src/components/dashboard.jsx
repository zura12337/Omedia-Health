import React, { Component } from "react";
import Table from "./common/table";
import mealService from "../services/mealService";
import activityService from "../services/activityService";
import weightService from "../services/weightService";
import _ from "lodash";

class Dashboard extends Component {
  state = {};

  columns = [
    { path: "date", label: "Date" },
    { path: "weight", label: "Weight" },
    { path: "meal", label: "Meal" },
    { path: "desired-activity", label: "Activity" },
  ];
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  generateKey = (item, column) => {
    return item.id + (column.path || column.key);
  };

  componentDidMount() {
    const meal = mealService();
    const activity = activityService();
    const weight = weightService();

    let dates = [];
    meal.map((item) => dates.push(item.date));
    activity.map((item) => dates.push(item.date));
    weight.map((item) => dates.push(item.date));
    let data = [...meal, ...activity, ...weight];
    let result = [];
    dates = dates.filter((v, i) => dates.indexOf(v) === i);

    this.setState({ data, dates });
  }

  render() {
    const { columns } = this;
    const { data, dates } = this.state;
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
              {dates &&
                dates.map((date) => (
                  <tr scope="column">
                    <th>{date}</th>
                    {data.map((item) => (
                      <>
                        <td>{item.id}</td>
                      </>
                    ))}
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
