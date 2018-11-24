import React, {Component} from "react";

import Tickets from "./Tickets";
import {subscribeToTickets,unsubscribeToTickets} from "../api";

class Landing extends Component {

    state = {
        tickets: []
    };

    constructor(props){
        super(props);

        const {currentSprint} = props;

        subscribeToTickets(currentSprint, (tickets) => {
            this.setState(prevState => ({
                tickets
            }))
        })
    }

    componentWillUnmount(){
        unsubscribeToTickets();
    }

    render(){

        const {tickets} = this.state;

        return (

            <div>
                <h1>Planning Poker</h1>
                <h3>Choose tickets to play</h3>
                <Tickets tickets={tickets} />
            </div>

        )
    }

}

export default Landing;