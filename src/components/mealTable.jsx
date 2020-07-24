import React, { Component } from "react";
import Table from "./common/table";
import authService from "../services/authService";
import { Link } from "react-router-dom";

class MealTable extends Component {
  columns = [
    {
      path: "date",
      label: "Date (YYYY-MM-DD)",
      content: (item) => (
        <Link to={`/meal/details/${item.date}`}>{item.date}</Link>
      ),
    },
    { path: "allMealCalories", label: "Calories" },
  ];

  render() {
    const { data } = this.props;
    return (
      <>
        <Table
          columns={this.columns}
          data={data}
          name="desiredMealCalories"
          dimension="allMealCalories"
        />
      </>
    );
  }
}

export default MealTable;
