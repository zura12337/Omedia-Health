import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import RegisterForm from "./components/registerForm";
import Dashboard from "./components/dashboard";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import Logout from "./components/logout";
import LoginForm from "./components/loginForm";
import Profile from "./components/profile";
import WeightForm from "./components/weightForm";
import Weight from "./components/weight";
import EditProfile from "./components/editProfile";
import ProtectedRoute from "./components/common/protectedRoute";
import MealForm from "./components/mealForm";
import Meal from "./components/meal";
import ActivityForm from "./components/activityForm";
import Activity from "./components/activity";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/dashboard" component={Dashboard} />
            <ProtectedRoute path="/profile/edit" component={EditProfile} />
            <Route path="/profile" component={Profile} />
            <ProtectedRoute path="/weight/:id" component={WeightForm} />
            <Route path="/weight" component={Weight} />
            <ProtectedRoute path="/meal/:id" component={MealForm} />
            <Route path="/meal" component={Meal} />
            <ProtectedRoute path="/activity/:id" component={ActivityForm} />
            <Route path="/activity" component={Activity} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/logout" component={Logout} />
            <Redirect from="/" exact to="/dashboard" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
