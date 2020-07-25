import React, { Component } from "react";
import Table from "./common/table";
import activityService from "../services/activityService";
import authService from "../services/authService";
class ActivityDetailsTable extends Component {
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
    { path: "activityCalories", label: "Burned Calories" },
  ];

  editColumn = {
    key: "edit",
    content: (activity) => (
      <button
        onClick={() => this.handleEdit(activity)}
        className="btn btn-primary btn-sm btn-edit"
      >
        Edit
      </button>
    ),
  };
  state = {};

  componentDidMount() {
    let activity = activityService();
    const date = this.props.match.params.date;
    activity = activity.filter((item) => item.date == date);
    console.log(activity);
    this.setState({ data: activity });
  }
  handleEdit = (activity) => {
    this.props.history.push(`/activity/${activity.id}`);
  };
  constructor() {
    super();
    const user = authService();
    if (user) this.columns.push(this.editColumn);
  }
  render() {
    return (
      <>
        <Table
          columns={this.columns}
          data={this.state.data}
          name="desiredActivityCalories"
          dimension="activityCalories"
        />
      </>
    );
  }
}

export default ActivityDetailsTable;
