import React, { Component } from "react";

import axios from "axios";

class NewSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email1: "",
      email2: "",
      st: new Date(),
      end: new Date(),
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    axios
      .post("http://localhost:3001/schedules", {
        email1: this.state.email1,
        st: this.state.st,
        end: this.state.end,
        email2: this.state.email2,
      })
      .then((response) => {
        console.log(response["data"]["eor"]);
        if (response["data"]["eor"].length === 0) alert("success");
        else alert("Failure");
      });
    // .catch((error) => {
    //   console.log(error["data"]);
    // });
    event.preventDefault();
  }
  handleEvent(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    event.preventDefault();
  }
  state = {};
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <br></br>
          Email1:
          <input
            type="email"
            name="email1"
            value={this.state.email1}
            onChange={this.handleEvent}
            required
          />
          <br></br>
          <br></br>
          Email2:
          <input
            type="email"
            name="email2"
            value={this.state.email2}
            onChange={this.handleEvent}
            required
          />
          <br></br>
          <br></br>
          Start Time :
          <input
            type="datetime"
            name="st"
            value={this.state.st}
            onChange={this.handleEvent}
            required
          />
          <br></br>
          <br></br>
          End Time :
          <input
            type="datetime"
            name="end"
            value={this.state.end}
            onChange={this.handleEvent}
            required
          />
          <br></br>
          <br></br>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default NewSchedule;
