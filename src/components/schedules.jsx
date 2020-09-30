import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import NewSchedule from "./newschedule";
class SchedulesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
      redirect: false,
      sos: 1,
    };
  }
  setRedirect = (id) => {
    this.setState({
      redirect: true,
      sos: id,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      const rou = "/schedules/" + this.state.sos;
      return <Redirect to={rou} />;
    }
  };
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
  Ondelete = (id) => {
    alert("Delete the Schedule?");
    axios.delete("http://localhost:3001/schedules/" + id).then((response) => {
      console.log(response);
    });
    const schedu = this.state.schedule.filter((c) => c.id !== id);
    this.setState({ schedule: schedu });
  };
  render() {
    return (
      <div>
        {this.renderRedirect(this.state.sos)}
        <h1>Schedules</h1>
        {/* <Router>
          <Link to="/newSchedule">New Schedule </Link>

          <Switch>
            <Route exact path="/newschedule" component={NewSchedule}></Route>
          </Switch>
        </Router> */}
        <a href="http://localhost:3000/newschedule">New Interview</a>

        {this.state.schedule.map((sch) => (
          <div key={sch.id}>
            <h3>Email : {sch.email1}</h3>
            <h3>Name : {sch.email2}</h3>
            <h3>Start : {sch.st}</h3>
            <h3>End : {sch.end}</h3>
            <button onClick={() => this.setRedirect(sch.id)}>View</button>
            <button onClick={() => this.Ondelete(sch.id)}>Delete</button>
            <button onClick={() => this.setRedirect(sch.id + "/edit")}>
              Edit
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default SchedulesList;
