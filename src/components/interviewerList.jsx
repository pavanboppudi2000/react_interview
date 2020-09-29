import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewInterviewer from "./newinterviewer";

class InterviewerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/interviewers")
      .then((response) => {
        this.setState({ list: response["data"]["content"] });
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
          <Link to="/newinterviewer">New Interviewer </Link>

          <Switch>
            <Route
              exact
              path="/newinterviewer"
              component={NewInterviewer}
            ></Route>
          </Switch>
        </Router>
        {this.state.list.map((lio) => (
          <div key={lio.id}>
            <h3>Email : {lio.email}</h3>
            <h3>Name : {lio.name}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default InterviewerList;
