import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import About from "./about";
import Home from "./home";
//import { data } from "./data";

class NavBar extends Component {
  state = {
    minAge: "",
    maxAge: "",
    gender: "",
    personFromDB: [],
    error: "",
    personResult: []
  };
  componentDidMount() {
    fetch("http://proj.ruppin.ac.il/bgroup80/test1/tar4/api/persons")
      .then(response => response.json())
      .then(parsedJSON =>
        parsedJSON.map(p => ({
          id: p.Id,
          name: p.Name + " " + p.FamilyName,
          age: p.Age,
          gender: p.Gender,
          height: p.Height,
          location: p.Address,
          image: p.Image,
          premium: false
        }))
      )
      .then(people =>
        this.setState({
          personFromDB: people
        })
      )
      .catch(eror => console.log("parse eror: ", eror));
  }

  styles = theme => ({
    fab: {
      margin: theme.spacing.unit
    },
    extendedIcon: {
      marginRight: theme.spacing.unit
    }
  });

  onSubmit = value => {
    const gender = value.gender;
    const minAge = value.minAge;
    const maxAge = value.maxAge;
    this.setState({
      gender: gender,
      minAge: minAge,
      maxAge: maxAge
    });
    console.log(this.state.personFromDB);
    const personResult = this.state.personFromDB.filter(
      person =>
        person.gender === gender && person.age >= minAge && person.age <= maxAge
    );
    console.log(personResult);
    this.setState({ personResult: personResult });
  };

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-danger bg-dark text-danger">
            <span className="navbar-brand">Tinder</span>
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">
                    <span className="glyphicon glyphicons-check">Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/About">
                    About
                  </Link>
                </li>
                <li />
              </ul>
            </div>
          </nav>
          <Switch>
            <Route
              path="/About"
              component={value => <About person={this.state.personResult} />}
            />
            <Route
              path="/"
              component={value => (
                <Home onSubmit={value => this.onSubmit(value)} />
              )}
              exact
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavBar;
