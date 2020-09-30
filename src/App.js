import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import SchedulesList from "./components/schedules";
import InterviewerList from "./components/interviewerList";
import NewInterviewer from "./components/newinterviewer";
import NewSchedule from "./components/newschedule";
import Newinterviewee from "./components/newinterviewee";
import IntervieweeList from "./components/intervieweeList";
import ViewSchedule from "./components/viewSchedule";
import EditSchedule from "./components/editSchedule";

function App() {
  return (
    <Router>
      <Link to="/schedules">Schedules </Link>
      <Link to="/interviewers">Interviewers</Link>
      <Link to="/interviewees">Interviewees</Link>
      <div className="App">
        <Route exact path="/" component={SchedulesList} />
        <Route exact path={"/schedules/:id"} component={ViewSchedule} />
        <Route exact path={"/schedules/:id/edit"} component={EditSchedule} />
        <Route exact path={"/schedules"} component={SchedulesList} />
        <Route exact path={"/newSchedule"} component={NewSchedule} />
        <Route exact path={"/newInterviewer"} component={NewInterviewer} />
        <Route exact path={"/newinterviewee"} component={Newinterviewee} />
        <Route exact path={"/interviewees"} component={IntervieweeList} />
        <Route exact path={"/interviewers"} component={InterviewerList} />
      </div>
    </Router>
  );
}

export default App;
