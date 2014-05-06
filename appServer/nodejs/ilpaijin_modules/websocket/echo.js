var socket = require("sockjs").createServer();

socket.on("connection", function(socket) {

    console.info(socket.headers["user-agent"]);

    socket.write(JSON.stringify({
        id: socket.id
    }));
});

module.exports = socket;