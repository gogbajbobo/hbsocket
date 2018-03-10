const io = require('socket.io')();
const debug = require('debug')('hbsocket:app');

io.on('connection', client => {
    debug(client.conn.id + " connection");
});

const port = 3000;
io.listen(port);
debug('HomeBudget SocketIO started on: ' + port);
