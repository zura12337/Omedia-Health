import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class ActivityForm extends Form {
  state = {
    data: { id: 0 },
    errors: {},
  };

  schema = {
    id: Joi.number(),
    distance: Joi.number().required().label("Distance"),
    date: Joi.date().required().label("Date"),
    activityType: Joi.string().required().label("Activity Type"),
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

    const activityId = this.props.match.params.id;
    if (activityId === "add") {
      activity.push(this.state.data);
      if (this.state.data === "Running") {
        this.state.data.activityCalories = this.state.data.distance * 140;
      } else if (this.state.data === "Hiking") {
        this.state.data.activityCalories = this.state.data.distance * 40;
      } else {
        this.state.data.activityCalories = this.state.data.distance * 300;
      }
      this.state.data.id++;
      localStorage.setItem("activity", JSON.stringify(activity));
      this.props.history.push("/activity");
      window.location.reload(false);
    } else {
      for (var i = 0; i < activity.length; i++) {
        if (activity[i].id === parseInt(activityId)) {
          activity[i] = this.state.data;
          break;
        }
      }
      if (this.state.data === "Running") {
        this.state.data.activityCalories = this.state.data.distance * 140;
      } else if (this.state.data === "Hiking") {
        this.state.data.activityCalories = this.state.data.distance * 40;
      } else {
        this.state.data.activityCalories = this.state.data.distance * 300;
      }
      localStorage.setItem("activity", JSON.stringify(activity));

      this.props.history.push("/activity");
      window.location.reload(false);
    }
  };

  populateActivity() {
    try {
      const activityId = this.props.match.params.id;
      if (activityId === "add") return;
      let activity = localStorage.getItem("activity");
      activity = activity ? JSON.parse(activity) : [];

      for (var obj in activity) {
        if (parseInt(activityId) === activity[obj].id) {
          this.setState({ data: this.mapToViewModel(activity[obj]) });
        }
      }
    } catch (ex) {
      this.props.history.push("/not-found");
    }
  }

  componentDidMount() {
    this.populateActivity();
  }

  mapToViewModel(activity) {
    return {
      id: activity.id,
      activityType: activity.activityType,
      distance: activity.distance,
      date: activity.date,
    };
  }

  render() {
    return (
      <>
        <h1 className="mt-5">Add Activity</h1>
        {this.renderInput("distance", "Distance:", "number")}
        {this.renderSelect(
          "activityType",
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
