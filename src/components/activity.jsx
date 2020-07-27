import React, { Component } from "react";
import ActivityTable from "./activityTable";
import { NavLink } from "react-router-dom";
import Service from "../services/service";

class Activity extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    let activity = Service("activity");
    let dates = [];
    let result = [];
    activity ? activity.map((item) => dates.push(item.date)) : (activity = []);
    dates = dates.filter((v, i) => dates.indexOf(v) === i);
    dates.forEach((date) => {
      result.push({ date });
    });

    result.forEach((item) => {
      item.totalActivity = new Array();
      item.totalDistance = new Array();
      for (var i = 0; i < activity.length; i++) {
        if (activity[i].date === item.date) {
          item.totalDistance.push(activity[i].distance);
          item.totalActivity.push(activity[i].activityCalories);
        }
      }
      item.totalActivityCalories = item.totalActivity.reduce(
        (a, b) => parseInt(a) + parseInt(b),
        0
      );
      item.totalDistance = item.totalDistance.reduce(
        (a, b) => parseInt(a) + parseInt(b),
        0
      );
    });
    this.setState({ data: result });
  }

  render() {
    const user = Service("user");
    const { data } = this.state;
    return (
      <div className="row">
        <div className="col">
          {user && (
            <NavLink className="btn btn-primary mt-5" to={`activity/add`}>
              Add Activity
            </NavLink>
          )}
          <ActivityTable data={data} handleEdit={this.doEdit} />
        </div>
      </div>
    );
  }
}

export default Activity;
