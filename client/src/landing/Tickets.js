import React from 'react';
import Ticket from "./Ticket";

export const Tickets = ({tickets}) => {

    const ticketList = tickets.map(t => {
        const {id, ticketId,ticketName} = t;
        return (
            <Ticket key={id} {...t} />
        )
    });

    return (
        <div className="ticket-container">
            {ticketList}
        </div>

    )

};

export default Tickets;