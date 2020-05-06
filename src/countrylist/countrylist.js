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

            errorMsg: ''

        }

    }



    componentDidMount() {

        axios

            .get('https://api.covid19api.com/summary')

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



    render() {



        const { posts, errorMsg } = this.state

        console.log(posts.length);
        
        const list_date = posts.length
            ? posts.map(post => {
               
                let date = new Date(post.data.Date);
                let convertedDate = date.toDateString();
                return (
                    <p className = "date"><b>Date : {convertedDate}</b></p>

                )
            }):null


            


        return (

            <div className="countryListContainer">
                {list_date}
                   
                <div className="col-sm-12 coronaPage">

                    <div className="col-sm-3">

                        <WorldList />

                    </div>

                    <div className="col-sm-9">

                        <select id="sel" onchange="show(this)">

                            <option value="">-- Select --</option>

                        </select>



                        <table className="countryTable"><thead><tr>

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



                    </div>

                </div>



                {errorMsg ? <div>{errorMsg}</div> : null}





            </div>

        )

    }

}

