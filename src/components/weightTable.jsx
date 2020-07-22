import React, { Component } from "react";
import Table from "./common/table";
import authService from "../services/authService";

class WeightForm extends Component {
  columns = [
    {
      path: "date",
      label: "Date (YYYY-MM-DD)",
    },
    { path: "weight", label: "Weight" },
  ];

  editColumn = {
    key: "edit",
    content: (weight) => (
      <button
        onClick={() => this.handleEdit(weight)}
        className="btn btn-primary btn-sm"
      >
        Edit
      </button>
    ),
  };

  handleEdit = (weight) => {
    this.props.handleEdit(weight);
  };

  constructor() {
    super();
    const user = authService();
    if (user) this.columns.push(this.editColumn);
  }

  render() {
    const { data } = this.props;
    return (
      <>
        <Table
          columns={this.columns}
          data={data}
          name="desiredWeight"
          dimension="weight"
        />
      </>
    );
  }
}

export default WeightForm;
