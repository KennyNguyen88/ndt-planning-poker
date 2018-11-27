import React, {Component} from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import {subscribeToVotes, unsubscribeToVotes, clearVotes} from "../api";

class Dashboard extends Component {

    state = {
        data: []
    };

    constructor(props){

        super(props);

        const ticketId = "TPL-001";
        const cb = (newVal) => {

            this.setState(prevState => {
                return {
                    data: [
                        ...prevState.data,
                        newVal
                    ]
                }
            })
        };

        subscribeToVotes(ticketId, cb);
    }

    componentWillUnmount(){
        unsubscribeToVotes();
    }

    handleClear = () => {
        clearVotes(() => this.setState(prevState => ({data: []})));
    };

    render(){

        const {data} = this.state;

        return (
            <div>
                <h1> This is Dashboard</h1>
                <button type="button" onClick={this.handleClear}> Clear </button>

                <BarChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="playerName"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="score" fill="#82ca9d" />
                </BarChart>

            </div>

        )
    }

}

export default Dashboard;