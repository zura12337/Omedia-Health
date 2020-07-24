import React, { Component } from "react";
import Table from "./common/table";
import authService from "../services/authService";
import { Link } from "react-router-dom";

class ActivityTable extends Component {
  columns = [
    // {
    //   path: "activityType",
    //   label: "Type",
    // },
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

  // editColumn = {
  //   key: "edit",
  //   content: (activity) => (
  //     <button
  //       onClick={() => this.handleEdit(activity)}
  //       className="btn btn-primary btn-sm btn-edit"
  //     >
  //       Edit
  //     </button>
  //   ),
  // };

  // handleEdit = (activity) => {
  //   this.props.handleEdit(activity);
  // };
  // constructor() {
  //   super();
  //   const user = authService();
  //   if (user) this.columns.push(this.editColumn);
  // }
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
