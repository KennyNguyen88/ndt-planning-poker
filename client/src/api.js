import openSocket from 'socket.io-client';
// import {fromEventPattern} from "rxjs";

const socket = openSocket('http://localhost:8000');

// const createDrawing = name => {
//     socket.emit('createDrawing',{name});
// };

const createVote = (vote, cb) => {
    socket.on('createVoteSuccess',cb);
    socket.emit('createVote', vote);
};

const subscribeToTickets = (sprintId,cb) => {
    socket.on('tickets', cb);
    socket.emit('subscribeToTickets',sprintId);
};

const unsubscribeToTickets = () => {
    socket.off('tickets');
};

export {
    createVote,
    subscribeToTickets,
    unsubscribeToTickets
}