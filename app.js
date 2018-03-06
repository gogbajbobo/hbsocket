const io = require('socket.io')();
const debug = require('debug')('hbsocket:app');

io.on('connection', client => {
    debug(client.conn.id + " connection");
});

io.listen(3000);