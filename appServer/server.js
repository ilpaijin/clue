var http = require("http"),
    server = http.createServer(),
    sockjs_echo = require("sockjs").createServer(),
    sockjs_broadcast = require("sockjs").createServer(),
    broadcastList = {};

sockjs_echo.on("connection", function(socket) {

    console.info(socket.headers["user-agent"]);
    socket.write(JSON.stringify({
        id: socket.id
    }));
});

sockjs_broadcast.on("connection", function(socket) {

    socket.write(JSON.stringify({
        myId: socket.id
    }));

    for (var id in broadcastList) {
        broadcastList[id].write(JSON.stringify({
            id: socket.id
        }));
    }

    broadcastList[socket.id] = socket;
});

sockjs_echo.installHandlers(server, {
    prefix: '/echo'
});

sockjs_broadcast.installHandlers(server, {
    prefix: '/broadcast'
});

server.listen(3001);