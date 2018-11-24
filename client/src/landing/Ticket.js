import React from 'react';
import {Link} from "react-router-dom";

export const Ticket = ({id, ticketId}) => {

    return (
        <li key={id}>
            <Link to={`/voting/${ticketId}`}>
                {ticketId}
            </Link>
        </li>
    )

};

export default Ticket;