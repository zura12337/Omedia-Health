import React, { Component } from "react";
import Table from "./common/table";
import activityService from "../services/activityService";
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
  state = {};

  componentDidMount() {
    let activity = activityService();
    const date = this.props.match.params.date;
    activity = activity.filter((item) => item.date == date);
    console.log(activity);
    this.setState({ data: activity });
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
