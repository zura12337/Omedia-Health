import React, { Component } from "react";
import Service from "../services/service";
import WeightTable from "./weightTable";
import { NavLink } from "react-router-dom";

class Weight extends Component {
  state = { data: [] };

  componentDidMount() {
    const data = Service("weight");
    this.setState({ data });
  }

  doEdit = (weight) => {
    this.props.history.push(`/weight/${weight.id}`);
  };
  render() {
    const user = Service("user");
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
