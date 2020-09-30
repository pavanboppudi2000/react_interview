import React, { Component } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
class EditSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email1: "",
      email2: "",
      st: "",
      end: "",
    };
    this.handleEven = this.handleEven.bind(this);
    this.handleSubmi = this.handleSubmi.bind(this);
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get("http://localhost:3001/schedules/" + id).then((response) => {
      this.setState({
        email1: response["data"]["email1"],
        email2: response["data"]["email2"],
        st: response["data"]["st"],
        end: response["data"]["end"],
      });
    });
  }
  handleSubmi(event) {
    const id = this.props.match.params.id;
    axios
      .put("http://localhost:3001/schedules/" + id, {
        email1: this.state.email1,
        st: this.state.st,
        end: this.state.end,
        email2: this.state.email2,
      })
      .then((response) => {
        console.log(response["data"]["eor"]);
      });
    // .catch((error) => {
    //   console.log(error["data"]);
    // });
    event.preventDefault();
  }
  handleEven(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    event.preventDefault();
  }
  state = {};
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmi}>
          <br></br>
          Email1:
          <input
            type="email"
            name="email1"
            value={this.state.email1}
            onChange={this.handleEven}
            required
          />
          <br></br>
          <br></br>
          Email2:
          <input
            type="email"
            name="email2"
            value={this.state.email2}
            onChange={this.handleEven}
            required
          />
          <br></br>
          <br></br>
          Start Time :
          <input
            type="datetime"
            name="st"
            value={this.state.st}
            onChange={this.handleEven}
            required
          />
          <br></br>
          <br></br>
          End Time :
          <input
            type="datetime"
            name="end"
            value={this.state.end}
            onChange={this.handleEven}
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

export default EditSchedule;
