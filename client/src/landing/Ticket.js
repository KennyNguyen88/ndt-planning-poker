import React from 'react';
import {Link} from "react-router-dom";

export const Ticket = ({id, ticketId,ticketName}) => {

    return (
        <Link to={`/voting/${ticketId}`}>
            <div key={id} className="notice notice-success d-flex">
                <strong className="pr-1 d-block ">{ticketId}</strong>
                <span className="d-block">{ticketName} So long So long So long</span>
            </div>
        </Link>
    )
};

export default Ticket;