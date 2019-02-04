import React, { Component } from "react";
import Avatar from "../images/img_avatar2.png";

class About extends Component {
  constructor(props) {
    super(props);
    var nameP = "No Result";
    var genderP = "";
    var ageP = "";
    var heightP = "";
    var locationP = "";
    var imageP = Avatar;
    var premiumP = "";
    var hobbieP = "";
    var i = 0;

    if (this.state.listPerson.length !== 0) {
      const personL = this.state.listPerson.filter((c, index) => i === index);

      nameP = personL.map(c => c.name);
      genderP = personL.map(c => c.gender);
      ageP = personL.map(c => c.age);
      heightP = personL.map(c => c.height);
      locationP = personL.map(c => c.location);
      imageP = personL.map(c => c.image);
      premiumP = personL.map(c => c.premium);

      if (premiumP[0] === true) {
        hobbieP = personL.map(c => c.hobbies);
      }
      if (i >= this.state.listPerson.length - 1) i = -1;

      this.state = {
        listPerson: this.props.person,
        i: i + 1,
        name: nameP[0],
        gender: genderP[0],
        age: ageP[0],
        height: heightP[0],
        location: locationP[0],
        image: imageP[0],
        premium: premiumP[0],
        hobbies: hobbieP[0]
      };
    } else {
      this.state = {
        listPerson: this.props.person,
        i: i + 1,
        name: nameP,
        gender: genderP,
        age: ageP,
        height: heightP,
        location: locationP,
        image: imageP,
        premium: premiumP,
        hobbies: hobbieP
      };
    }

    console.log(this.state);
  }
  state = {
    listPerson: this.props.person,
    i: 0,

    id: "",
    name: "",
    gender: "",
    age: "",
    height: "",
    location: "",
    image: "",
    premium: "",
    hobbies: ""
  };

  render() {
    return (
      <div className="text-center">
        <h1>Name: {this.state.name}</h1>
        <br />
        <img
          id="imgPerson"
          alt=""
          src={this.state.image !== "" ? this.state.image : Avatar}
        />
        <br />
        <br />
        <button type="button">like</button> &nbsp;
        <button type="button" onClick={this.click}>
          next
        </button>
        <br />
        <br />
        <p>Age: {this.state.age}</p>
        <p>Height: {this.state.height}</p>
        <p>Location: {this.state.location}</p>
        {this.randerHobbie()}
      </div>
    );
  }
  click = () => {
    if (this.state.listPerson.length !== 0) {
      var i = this.state.i;
      const personL = this.state.listPerson.filter((c, index) => i === index);

      const nameP = personL.map(c => c.name);
      const genderP = personL.map(c => c.gender);
      const ageP = personL.map(c => c.age);
      const heightP = personL.map(c => c.height);
      const locationP = personL.map(c => c.location);
      const imageP = personL.map(c => c.image);
      const premiumP = personL.map(c => c.premium);
      var hobbieP = "";
      if (premiumP[0] === true) {
        hobbieP = personL.map(c => c.hobbies);
      }

      if (i >= this.state.listPerson.length - 1) i = -1;
      this.setState({
        i: i + 1,
        name: nameP[0],
        gender: genderP[0],
        age: ageP[0],
        height: heightP[0],
        location: locationP[0],
        image: imageP[0],
        premium: premiumP[0],
        hobbies: hobbieP[0]
      });
    }
  };
  randerHobbie = () => {
    var str = "";
    if (this.state.premium === true) {
      str += "Hobbies: ";
      str += this.state.hobbies.map(c => {
        return c + " ";
      });
    }
    return str;
  };
}

export default About;
