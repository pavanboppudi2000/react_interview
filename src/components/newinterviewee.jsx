import React, { Component } from "react";

import axios from "axios";
class Newinterviewee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      clg: "",
      resume: "",
      cgpa: "",
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    axios
      .post("http://localhost:3001/interviewees", {
        email: this.state.email,
        name: this.state.name,
        resume: this.state.resume,
        clg: this.state.clg,
        cgpa: this.state.cgpa,
      })
      .then((response) => {
        console.log(response);
        if (response["eor"].length === 1)
          alert("Successfull in Interviewer Creation");
      })
      .catch((error) => {
        console.log(error);
        alert("Failure in creating Interviewer, Try again");
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
          <br></br>
          <br></br>
          College :
          <input
            name="clg"
            value={this.state.clg}
            onChange={this.handleEvent}
            required
          />
          <br></br>
          <br></br>
          CGPA :
          <input
            name="cgpa"
            value={this.state.cgpa}
            onChange={this.handleEvent}
            required
          />
          <br></br>
          <br></br>
          Resume :
          <input
            type="file"
            name="resume"
            value={this.state.value}
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

export default Newinterviewee;
