import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import generateId from "../services/idGeneration";

class WeightForm extends Form {
  state = {
    data: { id: 0, date: {}, weight: "" },
    errors: {},
  };

  schema = {
    id: Joi.any(),
    date: Joi.date().required().label("Date"),
    weight: Joi.number().required().label("Weight"),
  };

  doSubmit = () => {
    let weight = localStorage.getItem("weight");
    weight = weight ? JSON.parse(weight) : [];
    this.state.data.weight = this.state.data.weight + " Kg";
    const weightId = this.props.match.params.id;
    console.log(weightId, this.state.data.weight);
    console.log();
    if (weightId == "add") {
      this.state.data.id = weight.length;
      weight.push(this.state.data);
      this.state.data.id = generateId();
      console.log(this.state.data.id);
      localStorage.setItem("weight", JSON.stringify(weight));
      this.props.history.push("/weight");
    } else {
      for (var i = 0; i < weight.length; i++) {
        if (weightId === weight[i].id) {
          weight[i] = this.state.data;
          break;
        }
      }
      localStorage.setItem("weight", JSON.stringify(weight));
      this.props.history.push("/weight");
    }
  };

  populateWeight() {
    try {
      const weightId = this.props.match.params.id;
      if (weightId === "new") return;
      let weight = localStorage.getItem("weight");
      weight = weight ? JSON.parse(weight) : [];

      for (var obj in weight) {
        if (weightId === weight[obj].id) {
          this.setState({ data: this.mapToViewModel(weight[obj]) });
        }
      }
    } catch (ex) {
      this.props.history.replace("/not-found");
    }
  }

  componentDidMount() {
    this.populateWeight();
  }

  mapToViewModel(weight) {
    const onlyWeight = weight.weight.slice(0, -2);
    return {
      id: weight.id,
      date: weight.date,
      weight: parseFloat(onlyWeight),
    };
  }

  render() {
    return (
      <>
        <h1 className="mt-5">Add Weight</h1>
        {this.renderInput("date", "Enter Date:", "date")}
        {this.renderInput("weight", "Weight:", "number")}
        {this.renderButton("Submit")}
      </>
    );
  }
}

export default WeightForm;
