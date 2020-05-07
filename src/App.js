import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

import Aboutus from './aboutus/aboutus';

import Home from './home/home';

import Header from './header/header';

import Corona from './countrylist/countrylist';

import WorldList from './WorldList/WorldList';

import {

  BrowserRouter as Router,

  Switch,

  Route,

  Link

} from 'react-router-dom';

 

class App extends Component {

 

  render() {

      return (

        <Router basename={window.location.pathname || ''}>

        <div className = "container-fluid ">

             <Header/>

             <Switch>

             <Route path="/" exact component = {Home}/>

             <Route path="/aboutus" component={Aboutus}/>

             <Route path="/corona" component = {Corona}/>                   

             </Switch> 

        </div>

        </Router>

      );

  }

 

}

 

    export default App;

 