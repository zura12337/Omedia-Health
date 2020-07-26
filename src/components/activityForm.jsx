import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import generateId from "../services/idGeneration";

class ActivityForm extends Form {
  state = {
    data: { id: 0 },
    errors: {},
  };

  schema = {
    id: Joi.string(),
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
    this.state.data.distance = this.state.data.distance + " Km";
    const activityId = this.props.match.params.id;

    if (activityId === "add") {
      this.state.data.id = generateId();
      let distance = parseInt(this.state.data.distance.slice(0, -2));
      activity.push(this.state.data);
      if (this.state.data === "Running") {
        this.state.data.activityCalories = distance * 140;
      } else if (this.state.data === "Hiking") {
        this.state.data.activityCalories = distance * 40;
      } else {
        this.state.data.activityCalories = distance * 300;
      }
      localStorage.setItem("activity", JSON.stringify(activity));
      this.props.history.push("/activity");
    } else {
      for (var i = 0; i < activity.length; i++) {
        if (activity[i].id === activityId) {
          activity[i] = this.state.data;
          break;
        }
      }
      let distance = parseInt(this.state.data.distance.slice(0, -2));
      if (this.state.data.activityType === "Running") {
        this.state.data.activityCalories = distance * 140;
      } else if (this.state.data.activityType === "Hiking") {
        this.state.data.activityCalories = distance * 40;
      } else {
        this.state.data.activityCalories = distance * 300;
      }
      localStorage.setItem("activity", JSON.stringify(activity));
      this.props.history.push("/activity");
    }
  };

  populateActivity() {
    try {
      const activityId = this.props.match.params.id;
      if (activityId === "add") return;
      let activity = localStorage.getItem("activity");
      activity = activity ? JSON.parse(activity) : [];

      for (var obj in activity) {
        if (activityId === activity[obj].id) {
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
    let distance = parseInt(activity.distance.slice(0, -2));

    return {
      id: activity.id,
      distance: distance,
      activityType: activity.activityType,
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
        {this.renderButton("Submit")}
      </>
    );
  }
}

export default ActivityForm;
