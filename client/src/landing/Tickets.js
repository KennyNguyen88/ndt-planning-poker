import React from 'react';
import Ticket from "./Ticket";

export const Tickets = ({tickets}) => {

    const ticketList = tickets.map(t => {
        const {id, ticketId} = t;
        return (
            <Ticket key={id} ticketId={ticketId} />
        )
    });

    return (
        <ul>
            {ticketList}
        </ul>
    )

};

export default Tickets;