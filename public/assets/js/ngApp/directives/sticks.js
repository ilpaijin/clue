'use strict';

clueApp.directive("sticks", [

    function(websocket) {

        return function(scope, elm, attrs, ctrl) {
            scope.$watch('websocket.onmessage', function(d) {
                var newEl = "<div class='ciao'>";
                elm.append(newEl);
                console.info(d);
                console.info("fore");
            });
        }
    }
]);