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

    socket.write(JSON.stringify({
        myId: socket.id
    }));

    redisPublisher.publish("nuovo.socket", socket.id);

    var r = redis.createClient();

    r.subscribe("nuovo.socket");
    r.on("message", function(channel, msg) {
        socket.write(JSON.stringify({
            newId: msg
        }))
    });

    // client.hkeys("io.clients", function(err, keys) {
    //     keys.forEach(function(key, i) {
    //         key = JSON.parse(key);
    //         key.write({
    //             id: socket.id
    //         });
    //     });
    // });


    // client.hset("io.clients", socket.id, socket);
    // client.hincrby("io.clients", "length", 1);

});

sockjs_echo.installHandlers(server, {
    prefix: '/echo'
});

sockjs_broadcast.installHandlers(server, {
    prefix: '/broadcast'
});

server.listen(3001);