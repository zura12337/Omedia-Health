import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class MealForm extends Form {
  state = {
    data: { id: 0 },
    errors: {},
  };

  schema = {
    id: Joi.number(),
    name: Joi.string().required(),
    date: Joi.date().required(),
    mealCalories: Joi.number().required(),
  };

  doSubmit = () => {
    let meal = localStorage.getItem("meal");
    meal = meal ? JSON.parse(meal) : [];
    const mealId = this.props.match.params.id;

    if (mealId === "add") {
      meal.push(this.state.data);
      this.state.data.id = meal.length;
      this.state.data.id++;
      localStorage.setItem("meal", JSON.stringify(meal));
      this.props.history.push("/meal");
      window.location.reload(false);
    } else {
      for (var i = 0; i < meal.length; i++) {
        if (meal[i].id === parseInt(mealId)) {
          meal[i] = this.state.data;
          break;
        }
      }
      localStorage.setItem("meal", JSON.stringify(meal));
      this.props.history.push("/meal");
      window.location.reload(false);
    }
  };

  populateMeal() {
    try {
      const mealId = this.props.match.params.id;
      if (mealId === "add") return;
      let meal = localStorage.getItem("meal");
      meal = meal ? JSON.parse(meal) : [];

      for (var obj in meal) {
        if (parseInt(mealId) === meal[obj].id) {
          this.setState({ data: this.mapToViewModel(meal[obj]) });
        }
      }
    } catch (ex) {
      this.props.history.replace("/not-found");
    }
  }

  componentDidMount() {
    this.populateMeal();
  }

  mapToViewModel(meal) {
    return {
      id: meal.id,
      name: meal.name,
      date: meal.date,
      mealCalories: meal.mealCalories,
    };
  }

  render() {
    return (
      <>
        <h1 className="mt-5">Add Meal</h1>
        {this.renderInput("name", "Name:", "text")}
        {this.renderInput("date", "Enter Date:", "date")}
        {this.renderInput("mealCalories", "Calories:", "number")}
        {this.renderButton("Submit")}
      </>
    );
  }
}

export default MealForm;
