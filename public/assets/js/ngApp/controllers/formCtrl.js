'use strict';

clueApp.controller('FormCtrl', ['$scope', "websocket",
    function($scope, ws) {

        $scope.publishInWebsocket = function(query) {
            ws.send(query);
        };

        $scope.user = {
            name: "paio"
        }
    }
])