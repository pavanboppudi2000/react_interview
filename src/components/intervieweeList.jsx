import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Newinterviewee from "./newinterviewee";

class IntervieweeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      resumes: {},
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/interviewees")
      .then((response) => {
        this.setState({ list: response["data"]["content"] });
        this.setState({ resumes: response["data"]["resumes"] });
        console.log(response);
      })
      .then(() => {
        //console.log(this.state.list);
      });
  }

  render() {
    // console.log(this.state.list);
    return (
      <div>
        <h2>All Interviews</h2>
        <Router>
          <Link to="/newinterviewee">New Interviewee </Link>

          <Switch>
            <Route
              exact
              path="/newinterviewee"
              component={Newinterviewee}
            ></Route>
          </Switch>
        </Router>
        {this.state.list.map((lio) => (
          <div key={lio.id}>
            <h3>Email : {lio.email}</h3>
            <h3>Name : {lio.name}</h3>
            <h3>College :{lio.clg}</h3>
            <h3>CGPA : {lio.cgpa}</h3>
            <h3> {this.state.resumes[lio.id]}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default IntervieweeList;
