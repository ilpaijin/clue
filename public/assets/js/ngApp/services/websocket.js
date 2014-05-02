'use strict';

clueApp.factory("clue_websocket", ["config_webservice",
    function(cfg_ws) {

        var wsocket = new SockJS(cfg_ws.NodeAppServer[location.host]);

        wsocket.onopen = function() {
            // console.info("open");
        };

        wsocket.onmessage = function(msg) {
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

        wsocket.onclose = function(a) {
            // console.info(a);
        };

        var service = wsocket;

        return service;
    }
]);