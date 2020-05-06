import React, { Component } from "react";

import './mainmenu.css';

import ReactDOM from 'react-dom';

import {Link} from 'react-router-dom';

 

 

 

class mainmenu extends Component{

    render(){

        return(

            <div>

                <div className = "mainMenuContainer">

                    <ul className ="mainMenu">

                       <Link to="/"><li><a href="javascript:void(0);">Home</a></li></Link>

                       <Link to="/aboutus"><li><a href ="javascript:void(0);">About Us</a></li></Link>

                       <Link to="/corona"><li className="coronaLink"><a href ="javascript:void(0);">CORONA update</a></li></Link>

                    </ul>

                </div>

            </div>

        );

    }

}

 

export default mainmenu;