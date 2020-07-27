import { Component } from "react";
class Logout extends Component {
  componentDidMount() {
    localStorage.clear();
    window.location = "/Omedia-Health";
  }
  render() {
    return null;
  }
}

export default Logout;
