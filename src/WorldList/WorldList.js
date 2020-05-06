import React, { Component } from 'react';

import './WorldList.css';

import CoronaData from '../data/coronadata.json';

import axios from 'axios'



export default class WorldList extends Component {

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

        return (

            <div>



                <table className="worldListTable">



                    {posts.length
                        ? posts.map(post => {

                            return (

                                <tbody>

                                    <tr><td>New Confirmed -- {post.data.Global.NewConfirmed}</td></tr>

                                    <tr><td>Total Confirmed -- {post.data.Global.TotalConfirmed}</td></tr>

                                    <tr><td>New Deaths -- {post.data.Global.NewDeaths}</td></tr>

                                    <tr><td>Total Deaths -- {post.data.Global.TotalDeaths}</td></tr>

                                    <tr><td>New Recovered -- {post.data.Global.NewRecovered}</td></tr>

                                    <tr><td>Total Recovered -- {post.data.Global.TotalRecovered}</td></tr>

                                </tbody>



                            )

                        }

                        )

                        : null}



                </table>

                {errorMsg ? <div>{errorMsg}</div> : null}





            </div>

        )

    }

}