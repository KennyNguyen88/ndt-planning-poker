//action types

export const GET_TICKETS = 'landing/GET_TICKETS';
export const GET_TICKETS_SUCCESS = 'landing/GET_TICKETS_SUCCESS';
export const GET_TICKETS_FAIL = 'landing/GET_TICKETS_FAIL';

//actions

const getTickets = (sprintId = '') => {
    return {
        type: GET_TICKETS,
        payload: sprintId
    }
};

const getTicketsSuccess = (datas) => {
    return {
        type: GET_TICKETS_SUCCESS,
        payload: datas
    }
};

const getTicketsFail = () => {
    return {
        type: GET_TICKETS_FAIL
    }
};


export default {
    getTickets,
    getTicketsSuccess,
    getTicketsFail
};