'use strict';

clueApp.controller('SomeCtrl', ['$scope', "clue_websocket",
    function($scope, ws) {

        $scope.check = function(query) {
            ws.send(query);
        };

        $scope.user = {
            name: "paio"
        }
    }
])