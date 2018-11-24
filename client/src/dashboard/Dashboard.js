import React from 'react';
import { withState, withHandlers, compose } from "recompose";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

const enhance = compose(

);

export const Dashboard = () => {

    const data = [
        {name: '001', uv: 1, amt: 1},
        {name: '002', uv: 2, amt: 2},
        {name: '003', uv: 3, amt: 3},
        {name: '005', uv: 4, amt: 4},
        {name: '008', uv: 5, amt: 5},
        {name: '013', uv: 6, amt: 6}
    ];

    return (
        <div>
            <h1> This is Dashboard</h1>

            <BarChart width={600} height={300} data={data}
                      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>

        </div>
    )
};

export default Dashboard;