import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NewSchedule from "./newschedule";
import Newinterviewer from "./newinterviewer";
import InterviewerList from "./interviewerList";
import SchudelsList from "./schedules";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    var ele = <h1>Hello world</h1>;
    return (
      <Router>
        <div>
          <Link to="/left">Form</Link>
          <Link to="/schedules">Schedules</Link>
          <Link to="/topics">Topics</Link>
          <Link to="/interviewers">Interviewers</Link>

          <Switch>
            <Route path="/schedules">
              <SchudelsList />
            </Route>
            <Route path="/topics">
              <NewSchedule />
            </Route>
            <Route path="/left">
              <Newinterviewer />
            </Route>
            <Route path="/interviewers">
              <InterviewerList />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Counter;
