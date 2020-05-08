import React, { Component } from 'react';

import './countrylist.css';

import CoronaData from '../data/coronadata.json';

import axios from 'axios'

import WorldList from '../WorldList/WorldList';



export default class coronaDetails extends Component {

    constructor(props) {

        super(props)



        this.state = {

            posts: [],
            countryRow :[],
            selectedCountry :"",

            errorMsg: ''

        }

    }



    componentDidMount() {

        axios.get('https://api.covid19api.com/summary')

            .then(response => {

                console.log(response)

                let postdata = [];

                postdata.push(response);

                this.setState({ posts: postdata })

            })

            .catch(error => {

                console.log(error)

                this.setState({ errorMsg: 'Error retrieving data' })

            })

    }

    

    countrySelectHandler = (event) =>
    {
        
        this.setState({
            selectedCountry : event.target.value
        })

        let cData = [];
       this.state.posts.filter(obj => {
            obj.data.Countries.filter(cntry => {
                if(cntry.Country==event.target.value){
                    cData.push(cntry)
                    }

            })
           })

           this.setState({
               countryRow : cData
           })
           
    }

  fullListhandler = () => {
        console.log("inside full list handler")
            this.setState({
                countryRow : []
            })
        }
    
    
    

    render() {
       



        const { posts, countryRow, errorMsg } = this.state

                

        console.log(posts.length);
       
        
        const list_date = posts.length
            ? posts.map(post => {
               
                let date = new Date(post.data.Date);
                let convertedDate = date.toDateString();
                return (
                    <p className = "date"><b>Date : {convertedDate}</b>
                    {countryRow.length > 0 &&
                 <button onClick = {this.fullListhandler} className="fulllist btn btn-primary">Full List</button>  
                    }
                    </p>

                )
            }):null


         let selectCountries = posts.length

            ? posts.map(post => <select  value= {this.state.selectedCountry} onChange = {this.countrySelectHandler.bind(this)} className ="selectCountryList form-control"><option>--Select--</option>{post.data.Countries.map(ctry => {

                return (
                   
                    <option>{ctry.Country}</option>                                            
                )

            }

            )}</select>)

            : null

            
            let selectedCountrySection = countryRow.length ?
                 countryRow.map(selectedRow => {
                     return (
                         <div className="countryBlock">
                             <div className="CountryName">
                                 <h5>{selectedRow.Country}</h5>
                             </div>
                             <div className ="countryBlockDetails">
                                 <div><p><h4>New Confirmed</h4></p><span>{selectedRow.NewConfirmed}</span></div>
                                 <div><p><h4>New Deaths</h4></p><span>{selectedRow.NewDeaths}</span></div>
                                 <div><p><h4>Total Recovered</h4></p><span>{selectedRow.TotalRecovered}</span></div>
                                 <div><p><h4>Total Deaths</h4></p><span>{selectedRow.TotalDeaths}</span></div>
                             </div>

                         </div>
                         
                         )
                 }) :null                      
            

             
            

        return (

            <div className="countryListContainer">
                {list_date}

                <div className = " searchCountryBox form-group">
                 {selectCountries} 
                </div>
                
                <div className="col-sm-12 coronaPage">
                

                    <div className="col-sm-3">

                        <WorldList />

                    </div>

                    <div className="col-sm-9">
                        

                        {countryRow.length ?

                        selectedCountrySection
                        :
                        
                        <table className="countryTable table"><thead><tr>

                            <td>Country</td>

                            <td>New Confirmed</td>

                            <td>Total Confirmed</td>

                            <td>New Deaths</td>

                            <td>Total Deaths</td>

                            <td>New Recovered</td>

                            <td>Total Recovered</td>

                        </tr></thead>

                            {posts.length

                                ? posts.map(post => <tbody>{post.data.Countries.map(ctry => {

                                    return (

                                        <tr>

                                            <td>{ctry.Country}</td>

                                            <td>{ctry.NewConfirmed}</td>

                                            <td>{ctry.TotalConfirmed}</td>

                                            <td>{ctry.NewDeaths}</td>

                                            <td>{ctry.TotalDeaths}</td>

                                            <td>{ctry.NewRecovered}</td>

                                            <td>{ctry.TotalRecovered}</td>

                                        </tr>

                                    )

                                }

                                )}</tbody>)

                                : null}

                        </table>

                            }

                    </div>

                </div>



                {errorMsg ? <div>{errorMsg}</div> : null}





            </div>

        )

    }

}

