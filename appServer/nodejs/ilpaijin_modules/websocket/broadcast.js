var socket = require("sockjs").createServer(),
    redis = require("redis"),
    redisPublisher = redis.createClient();

socket.on("connection", function(socket) {

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
            channel: channel,
            msg: msg
        }))
    });

    r.subscribe("queries");
    //receiving msgs
    socket.on("data", function(q) {
        redisPublisher.publish("queries", JSON.stringify({
            query: q,
            socketClientId: socket.id
        }));
    });
});

module.exports = socket;