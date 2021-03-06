'use strict';

clueApp.factory("websocket", ["WEBSOCKET_CONFIG",

    function(WEBSOCKET_CONFIG) {

        var broadcastSocket = new SockJS(WEBSOCKET_CONFIG.NodeAppServer[location.host].broadcast);


        broadcastSocket.onmessage = function(msg) {
            var data = JSON.parse(msg.data);

            if (data.channel == "queries") {

                var newQuery = JSON.parse(data.msg);

                $('#appendedContainer').append("<div class='appended queries io-q-" + newQuery.socketClientId + "'>" + newQuery.socketClientId + "'s looking for: " + newQuery.query + "</div>");

            } else if (data.myId) {
                $('#appendedContainer').append("<div class='appended me io-client-" + data.myId + "'>I am " + data.myId + "</div>");
            } else {
                $('#appendedContainer').append("<div class='appended other io-client-" + data.msg + "'>Someone new " + data.msg + "</div>");
            }
        };

        broadcastSocket.onclose = function(a) {
            // console.info(a);
        };

        return broadcastSocket;
    }
]);