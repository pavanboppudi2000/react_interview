import React, { Component } from "react";
import axios from "axios";

class ViewSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: {},
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get("http://localhost:3001/schedules/" + id)
      .then((response) => {
        this.setState({ schedule: response["data"] });
      })
      .then(() => {
        console.log(this.state.schedule);
      });
  }
  render() {
    return (
      <div>
        <h1>Hi {this.props.match.params.id}</h1>
        <h1>{this.state.schedule["email1"]}</h1>
        <h1>{this.state.schedule["email2"]}</h1>
        <h1>{this.state.schedule["st"]}</h1>
        <h1>{this.state.schedule["end"]}</h1>
      </div>
    );
  }
}

export default ViewSchedule;
