define(['app/reference'], function(R) {

    describe("reference", function() {

        it("should provide cards for a given character", function() {
            expect(R.cardsForCharacter).toBeDefined();
            expect(R.cardsForCharacter.length).toBeGreaterThan(0);
        });

    });

});