'use strict';

clueApp.directive("clueDynoBackground", ["DYNOBACKGROUND_CONFIG",
    function(DYNOBACKGROUND_CONFIG) {

        var choosenOne = Math.floor((Math.random() * DYNOBACKGROUND_CONFIG.imgsLength) + 1),
            imgUrl = DYNOBACKGROUND_CONFIG.assets + "img/" + DYNOBACKGROUND_CONFIG.imgsPrefix + choosenOne + ".jpg";

        return function(scope, element, attr) {
            element.css({
                backgroundImage: "url('" + imgUrl + "')"
            });
        }
    }
]);