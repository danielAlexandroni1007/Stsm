import React, { Component } from 'react';
//import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navBar';
import Footer from './components/fotter';


class Tinder extends Component {
    render() {
        return (
            <div id='fill' className="container ">
                <NavBar></NavBar>
                <Footer></Footer>
            </div>
        );
    }
}
export default Tinder;