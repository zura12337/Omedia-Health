import React, { Component } from "react";
import Table from "./common/table";
import authService from "../services/authService";

class ActivityTable extends Component {
  columns = [
    {
      path: "activityType",
      label: "Type",
    },
    {
      path: "date",
      label: "Date (YYYY-MM-DD)",
    },
    { path: "distance", label: "Distance" },
    { path: "activityCalories", label: "Calories" },
  ];

  editColumn = {
    key: "edit",
    content: (activity) => (
      <button
        onClick={() => this.handleEdit(activity)}
        className="btn btn-primary btn-sm"
      >
        Edit
      </button>
    ),
  };

  handleEdit = (activity) => {
    this.props.handleEdit(activity);
  };
  constructor() {
    super();
    const user = authService();
    if (user) this.columns.push(this.editColumn);
  }
  render() {
    const { data, sortColumn, onSort } = this.props;
    return (
      <>
        <Table
          columns={this.columns}
          data={data}
          name="desiredActivityCalories"
        />
      </>
    );
  }
}

export default ActivityTable;
