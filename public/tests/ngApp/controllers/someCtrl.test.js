describe("SomeCtrl", function() {
    var scope, ctrl;

    beforeEach(module("clueApp"));

    beforeEach(inject(function($controller) {
        scope = {};
        ctrl = $controller("SomeCtrl", {
            $scope: scope
        });
    }));

    it("should create user model", function() {
        expect(scope.user.name).toBe("paio");
    });
});