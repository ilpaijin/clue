describe("dynoBackground directive", function() {
    var elm,
        scope;

    beforeEach(module("clueApp"));

    beforeEach(inject(function($rootScope, $compile, DYNOBACKGROUND_CONFIG) {
        scope = $rootScope.$new();
        scope.DYNOBACKGROUND_CONFIG = DYNOBACKGROUND_CONFIG;
        element = angular.element("<div clue-dyno-background></div>");
        $compile(element)($rootScope);
    }));

    it("should contain a random image", function() {
        scope.$digest();
        expect(element.css("background")).toContain(scope.DYNOBACKGROUND_CONFIG.assets + "img/" + scope.DYNOBACKGROUND_CONFIG.imgsPrefix);
    });
});