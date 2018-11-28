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
            this.setState(prevState => (
                {
                    tickets
                }
            ))
        })
    }

    componentWillUnmount(){
        unsubscribeToTickets();
    }

    render(){

        const {tickets} = this.state;

        return (

            <div className="container">
                <div className="row">
                    <div className="col-12 pt-5">
                        <div className="row mb-5">
                            <div className="col-12">
                                <h1 className="text-center">Planning Poker</h1>
                                <h3 className="text-center">Choose tickets to play</h3>
                            </div>
                        </div>
                       <div className="row">
                           <div className="col-12">
                               <Tickets tickets={tickets} />
                           </div>
                       </div>

                    </div>
                </div>
            </div>

        )
    }

}

export default Landing;