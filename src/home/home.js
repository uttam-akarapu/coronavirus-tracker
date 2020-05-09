import React, { Component } from "react";
import Persons from "../persons/persons";
import './home.css';

 

export default class Home extends Component{

    constructor(){
        super();

    }
 
    

    render(){
        
        return(

            <div className="homeContainer">
                <Persons/>
            
                <img className="homeImg"></img>

            </div>

           

        );

    }

 

 

}