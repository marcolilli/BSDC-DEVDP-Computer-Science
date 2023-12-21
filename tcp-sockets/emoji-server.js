const net = require('net');

const EMOJIS = ["❄️", "🌨️", "☃️", "⛄️", "🏂", "🎿", "🛷", "🏔️", "🌬️"];
const PORT = 8081;

const server = net.createServer(function (socket) {
    socket.on('connection', () => {
        console.log('A client connected!');
    });

    socket.on('data', function (data) {
        const dataString = data.toString();

        console.log(socket.remoteAddress + ":" + socket.remotePort + "> " + dataString);

        if (dataString.toLowerCase().includes("send me an emoji")) {
            const randomEmoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
            socket.write(randomEmoji);
        }
    });
})

server.listen(PORT, function () {
    console.log('Server listening on port ' + PORT + '...');
})
