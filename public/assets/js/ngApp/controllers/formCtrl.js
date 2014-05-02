'use strict';

clueApp.controller('FormCtrl', ['$scope', "clue_websocket",
    function($scope, ws) {

        $scope.publishInWebsocket = function(query) {
            ws.send(query);
        };

        $scope.user = {
            name: "paio"
        }
    }
])