define(['models/game'], function(game) {

    describe("Game model", function() {

        it("should be defined", function() {
            expect(game).toBeDefined();
            expect(game.players).toBeUndefined();
        });

        it("should not start with wrong parameters", function() {
            expect(function() { game.start([{ name: "Player 1", character: 0 }]) }).toThrowError();
            expect(game.players).toBeUndefined();
        });

        it("should start when asked", function() {
            game.start([{ name: "Player 1", character: 0 }, { name: "Player 2", character: 0 }]);
            expect(game.players.list().length).toBe(2);
            expect(game.players.get(0).name).toBe("Player 1");
        });

    })

});