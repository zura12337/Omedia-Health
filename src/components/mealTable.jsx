import React, { Component } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";
import mealService from "../services/mealService";

class MealTable extends Component {
  columns = [
    {
      path: "name",
      label: "Name",
      content: (meal) => <Link to={`/meal/${meal.id}`}>{meal.name}</Link>,
    },
    {
      path: "date",
      label: "Date (YYYY-MM-DD)",
      content: (meal) => <Link to={`/meal/${meal.id}`}>{meal.date}</Link>,
    },
    { path: "calories", label: "Calories" },
  ];

  render() {
    const data = mealService();
    return (
      <>
        <Table
          columns={this.columns}
          label={"Meal"}
          data={data}
          name="desired-meal-calories"
          dimension="calories"
        />
      </>
    );
  }
}

export default MealTable;
