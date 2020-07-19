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
import WeightTable from "./components/weightTable";
import EditProfile from "./components/editProfile";
import ProtectedRoute from "./components/common/protectedRoute";
import MealForm from "./components/mealForm";
import MealTable from "./components/mealTable";
import activityForm from "./components/activityForm";
import ActivityForm from "./components/activityForm";

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
            <Route path="/weight" component={WeightTable} />
            <ProtectedRoute path="/meal/:id" component={MealForm} />
            <Route path="/meal" component={MealTable} />
            <Route path="/activity" component={ActivityForm} />
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
