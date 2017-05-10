define(["models/game"], function(game) {

    return {

        start: function() {
            game.start([{ name: "Jason", character: "Indiana" }, { name: "Henk", character: "The Green One" }]);
            console.log(game.players.list());
        }

    }

});