import React from "react";
import Form from "./common/form";

class WeightForm extends Form {
  state = {
    data: { id: 0 },
  };

  doSubmit = () => {
    let weight = localStorage.getItem("weight");
    weight = weight ? JSON.parse(weight) : [];
    this.state.data.weight = this.state.data.weight + " Kg";
    const weightId = this.props.match.params.id;
    console.log(weightId);
    if (weightId == "add") {
      this.state.data.id = weight.length;
      console.log("here");
      weight.push(this.state.data);
      this.state.data.id++;
      localStorage.setItem("weight", JSON.stringify(weight));
      this.props.history.push("/weight");
      window.location.reload(false);
    } else {
      for (var i = 0; i < weight.length; i++) {
        if (parseInt(weightId) === weight[i].id) {
          weight[i] = this.state.data;
          break;
        }
      }
      localStorage.setItem("weight", JSON.stringify(weight));
      this.props.history.push("/weight");
      window.location.reload(false);
    }
  };

  populateWeight() {
    try {
      const weightId = this.props.match.params.id;
      if (weightId === "new") return;
      let weight = localStorage.getItem("weight");
      weight = weight ? JSON.parse(weight) : [];

      for (var obj in weight) {
        if (parseInt(weightId) === weight[obj].id) {
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
      weight: parseInt(onlyWeight),
    };
  }

  render() {
    return (
      <>
        <h1 className="mt-5">Add Weight</h1>
        {this.renderInput("date", "Enter Date:", "date")}
        {this.renderInput("weight", "Weight:", "number")}
        {this.renderButton("Add")}
      </>
    );
  }
}

export default WeightForm;
