import imgNoam from "../images/noam.JPG";
import imgDaniel from "../images/daniel.jpg";
import imgGilad from "../images/gilad.jpg";
import imgBrad from "../images/Brad.jpg";
import imgYair from "../images/yair.jpg";
import imgSara from "../images/sara.jpg";
import imgGal from "../images/galGadot.png";
import imgBibi from "../images/bibi.jpg";

const data = [
  {
    id: 1,
    name: "Noam Keren Zvi",
    gender: "male",
    age: 30,
    height: 177,
    location: "ruppin",
    image: imgNoam,
    premium: false
  },
  {
    id: 2,
    name: "Daniel Alexandroni",
    gender: "female",
    age: 27,
    height: 174,
    location: "Zichron Yaakov",
    image: imgDaniel,
    hobbies: ["Ceramics", "Pilatis"],
    premium: true
  },
  {
    id: 3,
    name: "Gilad Ram",
    gender: "male",
    age: 27,
    height: 186,
    location: "Raanana",
    image: imgGilad,
    premium: false
  },
  {
    id: 3,
    name: "Brad Pit",
    gender: "male",
    age: 40,
    height: 180,
    location: "Haifa",
    image: imgBrad,
    premium: true,
    hobbies: ["book", "movie", "food"]
  },
  {
    id: 4,
    name: "Gal Gadot",
    gender: "female",
    age: 32,
    height: 180,
    location: "Tel Aviv",
    image: imgGal,
    premium: false
  },
  {
    id: 5,
    name: "Binyamin Netanyahu",
    gender: "male",
    age: 50,
    height: 182,
    location: "Jerusalem",
    image: imgBibi,
    premium: false
  },
  {
    id: 6,
    name: "Sarah Netanyahu",
    gender: "female",
    age: 51,
    height: 167,
    location: "Jerusalem",
    image: imgSara,
    premium: true,
    hobbies: ["Ceramics", "Pilatis"]
  },
  {
    id: 7,
    name: "Yair Lapid",
    gender: "male",
    age: 55,
    height: 175,
    location: "Haifa",
    image: imgYair,
    premium: false
  }
];

export { data };
