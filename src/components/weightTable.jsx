import React, { Component } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";
import weightService from "../services/weightService";

class WeightForm extends Component {
  columns = [
    {
      path: "date",
      label: "Date (YYYY-MM-DD)",
      content: (weight) => (
        <Link to={`/weight/${weight.id}`}>{weight.date}</Link>
      ),
    },
    { path: "weight", label: "Weight" },
  ];

  render() {
    const data = weightService();
    return (
      <>
        <Table
          columns={this.columns}
          label={"Weight"}
          data={data}
          name="desired-weight"
          dimension="weight"
        />
      </>
    );
  }
}

export default WeightForm;
