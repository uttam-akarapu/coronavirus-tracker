import React from 'react';
import "../Tabs/Tabs.css"

const PersonTemplate = (props) => {
    let myself,mother ="";

if(props.myname == "Uttam Akarapu")
    {
        myself="Myself";
    }
    if(props.myname == "Naveen Akarapu" || props.myname == "Srikanth Akarapu")
    {
        myself="Brother";
    }    

    if(props.myname == "VidyaSagar Akarapu")
    {
        myself="Father";
    }
    if(props.spouse == "Swaroopa Akarapu")
    {
        mother=<b>Mother</b>;
    }

    return(

       <div className="persons">
           <b>{myself}</b>
           <p><h2>{props.myname}</h2><span>{props.occupation}</span></p>
           <div className="persondetails"> 
            {mother}         
    <span>{props.spouse != "Swaroopa Akarapu" && <b>Spouse : </b>}{props.spouse}</span>
           {props.spouse != "Swaroopa Akarapu" && <b>Children :</b>}
           <span>{props.kid1}</span>
           <span>{props.kid2}</span>
           </div>
       </div>
    )


}

export default PersonTemplate;