'use strict';

clueApp.directive("clueDynoBackground", ["config_dynoBackground",
    function(cfg_dynob) {
        return function(scope, element, attr) {
        element.css({
                backgroundImage: "url('" + cfg_dynob.init.imgUrl + "')"
            });
        }
    }
]);