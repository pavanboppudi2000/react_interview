import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import NewSchedule from "./newschedule";
class SchedulesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/schedules")
      .then((response) => {
        this.setState({ schedule: response["data"]["content"] });
      })
      .then(() => {
        console.log(this.state.schedule);
      });
  }
  render() {
    return (
      <div>
        <h1>Schedules</h1>
        <Router>
          <Link to="/newSchedule">New Schedule </Link>

          <Switch>
            <Route exact path="/newschedule" component={NewSchedule}></Route>
          </Switch>
        </Router>

        {this.state.schedule.map((sch) => (
          <div key={sch.id}>
            <h3>Email : {sch.email1}</h3>
            <h3>Name : {sch.email2}</h3>
            <h3>Start : {sch.st}</h3>
            <h3>End : {sch.end}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default SchedulesList;
