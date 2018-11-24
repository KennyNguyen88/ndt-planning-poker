import openSocket from 'socket.io-client';
const port = 8000;
const socket = openSocket('http://localhost:'+port);

const createVote = (vote, cb) => {
    socket.on('createVoteSuccess',cb);
    socket.emit('createVote', vote);
};

const subscribeToVotes = (ticketId, cb) => {
    socket.on('votes', cb);
    socket.emit('subscribeToVotes',ticketId);
};

const unsubscribeToVotes = () => {
    socket.off('votes');
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
    unsubscribeToTickets,
    subscribeToVotes,
    unsubscribeToVotes
}