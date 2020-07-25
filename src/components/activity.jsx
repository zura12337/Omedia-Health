import React, { Component } from "react";
import ActivityTable from "./activityTable";
import ListGroup from "./common/listGroup";
import { NavLink } from "react-router-dom";
import authService from "../services/authService";
import activityService from "../services/activityService";

class Activity extends Component {
  state = {
    data: [],
    activityTypes: [],
    selectedActivity: null,
  };

  handleActivitySelect = (activity) => {
    this.setState({ selectedActivity: activity });
  };

  componentDidMount() {
    const activityTypes = [
      { name: "All item", id: 0 },
      { name: "Running", id: 1 },
      { name: "Swimming", id: 2 },
      { name: "Hiking", id: 3 },
    ];
    let activity = activityService();
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
    console.log(result);
    this.setState({ activityTypes, data: result });
  }

  getPageData = () => {
    const { data: allActivity, selectedActivity } = this.state;

    let filtered = allActivity;
    if (selectedActivity && selectedActivity.id && allActivity) {
      filtered = allActivity.filter(
        (a) => a.activityType === selectedActivity.name
      );
    }
    return { data: filtered };
  };
  render() {
    const user = authService();
    const { data } = this.getPageData();
    return (
      <div className="row">
        {/* <div className="col-3 mt-5">
          <ListGroup
            items={this.state.activityTypes}
            selectedItem={this.state.selectedActivity}
            onItemSelect={this.handleActivitySelect}
          />
        </div> */}
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
