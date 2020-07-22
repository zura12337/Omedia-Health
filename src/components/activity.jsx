import React, { Component } from "react";
import ActivityTable from "./activityTable";
import ListGroup from "./common/listGroup";
import { NavLink } from "react-router-dom";
import authService from "../services/authService";
import activityService from "../services/activityService";
import { act } from "react-dom/test-utils";

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
    const data = activityService();
    this.setState({ activityTypes, data });
  }

  doEdit = (activity) => {
    this.props.history.push(`/activity/${activity.id}`);
  };

  getPageData = () => {
    const { data: allActivity, selectedActivity } = this.state;

    let filtered = allActivity;
    if (selectedActivity && selectedActivity.id) {
      filtered = allActivity.filter(
        (a) => a.activityType === selectedActivity.name
      );
    }
    return { data: filtered };
  };
  render() {
    const user = authService();
    const { data } = this.getPageData();
    console.log(data);
    return (
      <div className="row">
        <div className="col-3 mt-5">
          <ListGroup
            items={this.state.activityTypes}
            selectedItem={this.state.selectedActivity}
            onItemSelect={this.handleActivitySelect}
          />
        </div>
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
