import { Component } from "react";
class Logout extends Component {
  componentDidMount() {
    localStorage.clear();
    window.location = "/dashboard";
  }
  render() {
    return null;
  }
}

export default Logout;
