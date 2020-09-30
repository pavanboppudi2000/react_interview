import React, { Component } from "react";

import axios from "axios";
class Newinterviewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    axios
      .post("http://localhost:3001/interviewers", {
        email: this.state.email,
        name: this.state.name,
      })
      .then((response) => {
        console.log(response);
        alert("Successfull in Interviewer Creation");
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  }
  handleEvent(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <br></br>
          Email:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleEvent}
            required
          />
          <br></br>
          <br></br>
          Name :
          <input
            name="name"
            value={this.state.name}
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

export default Newinterviewer;
