import React, { Component } from 'react';
import PersonTemplate from '../Tabs/Tabs'
import PropTypes from 'prop-types';

class persons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons:[
                {name:"VidyaSagar Akarapu" , occupation:"Retired Bank Employee", spouse:"Swaroopa Akarapu",kid1:"",kid2:""},
                {name:"Naveen Akarapu" , occupation:"Software Engineer", spouse:"Uma Akarapu",kid1:"Ishaanvi",kid2:""},
                {name:"Uttam Akarapu" , occupation:"Software Engineer", spouse:"Swetha Akarapu",kid1:"Vivaansh",kid2:"Viraansh"},
                {name:"Srikanth Akarapu" , occupation:"Software Engineer", spouse:"Srilatha Akarapu",kid1:"Riya",kid2:""}                
            ]

        }

    }

    
    render(){
        const {persons} = this.state
        
        
        return(

            <div>

            {persons.map(person => (
                
                <PersonTemplate myname={person.name} spouse={person.spouse} kid1 = {person.kid1} kid2 ={person.kid2} occupation={person.occupation}/>

            ))}
                
                
                <img className="homeImg"></img>

            </div>

           

        );

    }

}

persons.propTypes = {

};

export default persons;