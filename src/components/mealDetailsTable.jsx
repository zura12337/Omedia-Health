import React, { Component } from "react";
import Table from "./common/table";
import mealService from "../services/mealService";
import authService from "../services/authService";
class MealDetailsTable extends Component {
  state = { date: {} };
  columns = [
    { path: "name", label: "Name" },
    {
      path: "date",
      label: "Date (YYYY-MM-DD)",
    },
    { path: "mealCalories", label: "Calories" },
  ];

  editColumn = {
    key: "edit",
    content: (meal) => (
      <button
        onClick={() => this.handleEdit(meal)}
        className="btn btn-primary btn-sm btn-edit"
      >
        Edit
      </button>
    ),
  };
  handleEdit = (meal) => {
    this.props.history.push(`/meal/${meal.id}`);
  };
  constructor() {
    super();
    const user = authService();
    if (user) this.columns.push(this.editColumn);
  }

  componentDidMount() {
    let meal = mealService();
    const date = this.props.match.params.date;
    meal = meal.filter((item) => item.date == date);
    this.setState({ data: meal });
  }
  render() {
    return (
      <>
        <Table
          columns={this.columns}
          data={this.state.data}
          name="desiredMealCalories"
          dimension="mealCalories"
        />
      </>
    );
  }
}

export default MealDetailsTable;
