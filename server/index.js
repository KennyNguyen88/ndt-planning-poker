const io = require('socket.io')();
const r = require('rethinkdb');

// //listen to client
// function createDrawing({connection, name}) {
//     r.table('drawing')
//         .insert({name, timestamp: new Date()})
//         .run(connection)
//         .then(() => console.log('created a drawing with name: ', name));
// }
//
// //notify client
// function subscribeToDrawing({client, connection}) {
//     r.table('drawing')
//         .changes({include_initial: true})
//         .run(connection)
//         .then(cursor => {
//             cursor.each((err, drawingRow) => client.emit('drawing',drawingRow.new_val))
//         })
// }

function createVote({client, connection, vote}) {
    r.table('planningPoker')
        .insert({...vote, timestamp: new Date()})
        .run(connection)
        .then(() => client.emit('createVoteSuccess'));
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
    db: 'awesome_whiteboard'
}).then(connection => {
    io.on('connection', client => {
        // client.on('createDrawing', ({name}) => {createDrawing({connection, name});});
        client.on('createVote', (vote) => {createVote({client, connection, vote});});
        client.on('subscribeToTickets', (sprintId) => subscribeToTickets({client, connection,sprintId}));
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);