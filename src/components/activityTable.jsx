import React, { Component } from "react";
import Table from "./common/table";
import authService from "../services/authService";
import { Link } from "react-router-dom";

class ActivityTable extends Component {
  columns = [
    {
      path: "date",
      label: "Date (YYYY-MM-DD)",
      content: (item) => (
        <Link to={`/activity/details/${item.date}`}>{item.date}</Link>
      ),
    },
    { path: "totalDistance", label: "Distance" },
    { path: "totalActivityCalories", label: "Burned Calories" },
  ];

  render() {
    const { data } = this.props;
    return (
      <>
        <Table
          columns={this.columns}
          data={data}
          name="desiredActivityCalories"
          dimension="totalActivityCalories"
        />
      </>
    );
  }
}

export default ActivityTable;
