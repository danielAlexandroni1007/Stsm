import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    minAge: "",
    maxAge: "",
    gender: ""
  };

  submit = e => {
    // e.preventDefault();

    this.props.onSubmit(this.state);
  };
  handelMin = () => {
    console.log(this);
  };

  render() {
    return (
      <div className="form-group col-md-12">
        <label>Choose partner gender</label>
        <select
          id="inputState"
          onChange={gender => this.setState({ gender: gender.target.value })}
          className="form-control w-100"
        >
          <option selected disabled hidden>
            Choose partner gender
          </option>
          <option>Female</option>
          <option>Male</option>
        </select>
        <br />
        <label> Choose partner age</label>
        <br />
        <label>Between</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="min Age"
          value={this.state.minAge}
          onChange={v => this.setState({ minAge: v.target.value })}
        />

        <label>And</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="max Age"
          value={this.state.maxAge}
          onChange={v => this.setState({ maxAge: v.target.value })}
        />
        <br />
        <br />

        <div className="text">
          <Link to="/About">
            <button
              type="button"
              className="btn btn-info display-2s text"
              onClick={e => this.submit(e)}
            >
              <span className="glyphicon glyphicon-search text" /> Search
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
