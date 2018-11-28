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
        clearVotes();
    }

    handleClear = () => {
        clearVotes(() => this.setState(prevState => ({data: []})));
    };

    render(){

        const {data} = this.state;

        return (
            <div className="container pt-5">
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button type="button" className="btn btn-danger" onClick={this.handleClear}> Clear </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center"> Voting result for Ticket</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
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
                </div>




            </div>

        )
    }

}

export default Dashboard;