clueApp.controller('SomeCtrl', ['$scope',
    function($scope) {

        var socket = new SockJS(clue.config.NodeAppServer[location.host]);

        socket.onopen = function() {
            // console.info("open");
        };

        socket.onmessage = function(msg) {
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

        socket.onclose = function(a) {
            console.info(a);
        };

        $scope.check = function(query) {
            socket.send(query);
        };

        $scope.user = {
            name: "paio"
        }
    }
])