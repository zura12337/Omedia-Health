import React from "react";
import Form from "./common/form";

class MealForm extends Form {
  state = {
    data: { id: 0 },
  };

  doSubmit = () => {
    let meal = localStorage.getItem("meal");
    meal = meal ? JSON.parse(meal) : [];
    this.state.data.id = meal.length;
    meal.push(this.state.data);
    console.log(this.state.data);
    localStorage.setItem("meal", JSON.stringify(meal));
    this.props.history.push("/meal");
    window.location.reload(false);
  };

  render() {
    return (
      <>
        <h1 className="mt-5">Add Meal</h1>
        {this.renderInput("name", "Name:", "tet")}
        {this.renderInput("date", "Enter Date:", "date")}
        {this.renderInput("calories", "Calories:", "number")}
        {this.renderButton("Add")}
      </>
    );
  }
}

export default MealForm;
