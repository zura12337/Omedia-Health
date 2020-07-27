import React, { Component } from "react";
import Table from "./common/table";
import Services from "../services/service";
import ListGroup from "./common/listGroup";
class ActivityDetailsTable extends Component {
  state = {
    data: [],
    activityTypes: [],
    selectedActivity: null,
  };
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
  constructor() {
    super();
    const user = Services("user");
    if (user) this.columns.push(this.editColumn);
  }

  componentDidMount() {
    const activityTypes = [
      { name: "All item", id: 0 },
      { name: "Running", id: 1 },
      { name: "Swimming", id: 2 },
      { name: "Hiking", id: 3 },
    ];
    let activity = Services("activity");
    const date = this.props.match.params.date;
    activity ? activity.filter((item) => item.date == date) : (activity = []);
    this.setState({ activityTypes, data: activity });
  }

  handleEdit = (activity) => {
    this.props.history.push(`/activity/${activity.id}`);
  };

  handleActivitySelect = (activity) => {
    this.setState({ selectedActivity: activity });
  };

  getPageData = () => {
    const { data: allActivity, selectedActivity } = this.state;

    let filtered = allActivity;
    if (selectedActivity && selectedActivity.id && allActivity) {
      filtered = allActivity.filter(
        (a) => a.activityType === selectedActivity.name
      );
      console.log(filtered);
    }
    return { data: filtered };
  };

  render() {
    const { data } = this.getPageData();

    return (
      <div className="row">
        <div className="col-3 mt-5">
          <ListGroup
            items={this.state.activityTypes}
            selectedItem={this.state.selectedActivity}
            onItemSelect={this.handleActivitySelect}
          />
        </div>
        <div className="col mt-4">
          <Table
            columns={this.columns}
            data={data}
            name="desiredActivityCalories"
            dimension="activityCalories"
          />
        </div>
      </div>
    );
  }
}

export default ActivityDetailsTable;
