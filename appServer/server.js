var http = require("http"),
    app = http.createServer(HTTPHandler),
    io = require("socket.io").listen(app);

function HTTPHandler(req, res) {
    res.write("ciao");
    res.end();
}

io.sockets.on("connection", function(socket) {
    // console.info(socket.id);
    socket.emit("event", {
        id: socket.id,
        data: "dati da appServer"
    });
});

app.listen(3001);