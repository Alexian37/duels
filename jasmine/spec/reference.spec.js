define(['ref/reference'], function(R) {

    describe("Reference", function() {

        it("should provide 6 base cards", function() {
            expect(R.baseCards).toBeDefined();
            expect(R.baseCards().length).toBe(6);
        });

        it("should provide 8 cards for a given character", function() {
            expect(R.cardsForCharacter).toBeDefined();
            expect(R.cardsForCharacter(0).length).toBe(8);
        });

        it("should provide character attributes", function() {
            expect(R.characterAttributes).toBeDefined();
            expect(R.characterAttributes(0, 0).version_name).toBe("Original");
        });

    });

});