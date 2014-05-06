var server = require("http").createServer(),
    socket_broadcast = require("./ilpaijin_modules/websocket/broadcast");

socket_broadcast.installHandlers(server, {
    prefix: '/broadcast'
});

server.listen(3001);