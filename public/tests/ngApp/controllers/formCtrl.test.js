'use strict';

describe("FormCtrl", function() {
    var scope, ctrl;

    beforeEach(module("clueApp"));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller("FormCtrl", {
            $scope: scope,
            clue_websocket: {
                send: function(q) {
                    return q;
                }
            }
        })
    }));

    it("should create user model", function() {
        expect(scope.user.name).toBe("paio");
    });

    it("should call send method on ws", function() {

        scope.publishInWebsocket("Fake Msg");
        expect(ctrl.send).toHaveBeenCalled();
    });


});