'use strict';

clueApp.constant('config_dynoBackground', {
    init: function() {
        var imgsPrefix = "amsterdam-",
            imgsCount = 4,
            choosenOne = Math.floor((Math.random() * imgsCount) + 1);

        var cfg = {
            assets: "public/assets/"
        }

        cfg.imgUrl = cfg.assets + "img/" + imgsPrefix + choosenOne + ".jpg";

        return cfg;
    }()

});