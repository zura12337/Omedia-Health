import React, { Component } from "react";
import authService from "../services/authService";
import WeightTable from "./weightTable";
import { NavLink } from "react-router-dom";
import weightService from "../services/weightService";

class Weight extends Component {
  state = { data: [] };

  componentDidMount() {
    const data = weightService();
    this.setState({ data });
  }

  doEdit = (weight) => {
    this.props.history.push(`/weight/${weight.id}`);
  };
  render() {
    const user = authService();
    const { data } = this.state;
    return (
      <div className="col">
        {user && (
          <NavLink className="btn btn-primary mt-5" to={`/weight/add`}>
            Add Weight
          </NavLink>
        )}
        <WeightTable data={data} handleEdit={this.doEdit} />
      </div>
    );
  }
}

export default Weight;
