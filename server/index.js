const io = require('socket.io')();
const r = require('rethinkdb');

function subscribeToVotes({client, connection, ticketId}) {
    r.table('votes')
        .filter(r.row("ticketId").eq(ticketId))
        .changes({include_initial: true})
        .run(connection)
        .then(cursor => {
            cursor.each((err, {new_val}) => {
                client.emit('votes', new_val);
            })
        })
}

function createVote({client, connection, vote}) {
    r.table('votes')
        .insert({...vote})
        .run(connection)
        .then(() => client.emit('createVoteSuccess'));
}

function clearVotes({client, connection}){
    r.table('votes')
        .delete()
        .run(connection)
        .then(() => client.emit('clearVotesSuccess'));
}

function subscribeToTickets({client, connection, sprintId}) {
    r.table('tickets')
        .filter(r.row("sprintId").eq(sprintId))
        .run(connection)
        .then(cursor => {
            cursor.toArray((err, result) => {
                client.emit('tickets', result);
            })
        })
}

r.connect({
    host: 'localhost',
    port: 28015,
    db: 'bizloan'
}).then(connection => {
    io.on('connection', client => {
        client.on('createVote', (vote) => {createVote({client, connection, vote});});
        client.on('subscribeToTickets', (sprintId) => subscribeToTickets({client, connection,sprintId}));
        client.on('subscribeToVotes', (ticketId) => subscribeToVotes({client, connection,ticketId}));
        client.on('clearVotes', () => clearVotes({client, connection}));
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);