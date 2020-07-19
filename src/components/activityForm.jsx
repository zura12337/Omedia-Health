import React from "react";
import Form from "./common/form";

class ActivityForm extends Form {
  state = {
    data: { id: 0 },
  };

  activityTypes = [
    { name: "Running", id: 0 },
    { name: "Swimming", id: 1 },
    { name: "Hiking", id: 2 },
  ];

  doSubmit = () => {
    let activity = localStorage.getItem("activity");
    activity = activity ? JSON.parse(activity) : [];
    this.state.data.id = activity.length;
    this.state.data.activity = this.state.data.activity + " Kg";

    activity.push(this.state.data);

    this.state.data.id++;
    localStorage.setItem("activity", JSON.stringify(activity));
    this.props.history.push("/activity");
    window.location.reload(false);
  };

  render() {
    return (
      <>
        <h1 className="mt-5">Add Activity</h1>
        {this.renderInput("distance", "Distance:", "number")}
        {this.renderSelect(
          "activity-types",
          "Activity Type:",
          this.activityTypes
        )}
        {this.renderInput("date", "Enter Date:", "date")}
        {this.renderButton("Add")}
      </>
    );
  }
}

export default ActivityForm;
