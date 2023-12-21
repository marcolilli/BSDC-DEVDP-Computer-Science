const net = require('net');

const PORT = 8080;

const server = net.createServer(function (socket) {
    socket.on('connection', () => {
        console.log('a client connected!');
    });

    socket.on('data', function (data) {
        const dataString = data.toString();

        console.log(socket.remoteAddress + ':' + socket.remotePort + '> ' + dataString);
    });
})

server.listen(PORT, function () {
    console.log('Server listening on port ' + PORT + '...');
})
