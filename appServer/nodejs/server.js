var http = require("http"),
    server = http.createServer(),
    sockjs_echo = require("sockjs").createServer(),
    sockjs_broadcast = require("sockjs").createServer(),
    redis = require("redis"),
    redisPublisher = redis.createClient();

sockjs_echo.on("connection", function(socket) {

    console.info(socket.headers["user-agent"]);
    socket.write(JSON.stringify({
        id: socket.id
    }));
});

sockjs_broadcast.on("connection", function(socket) {

    //welcome the new socket
    socket.write(JSON.stringify({
        myId: socket.id
    }));

    // welcome the others
    redisPublisher.publish("nuovo.socket", socket.id);

    //add it to the redis channel 
    var r = redis.createClient();

    r.subscribe("nuovo.socket");
    r.on("message", function(channel, msg) {
        socket.write(JSON.stringify({
            newId: msg
        }))
    });
});

sockjs_echo.installHandlers(server, {
    prefix: '/echo'
});

sockjs_broadcast.installHandlers(server, {
    prefix: '/broadcast'
});

server.listen(3001);