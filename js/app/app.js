define(["models/game", "views/view"], function(game, view) {

    return {

        start: function() {
            game.start([{ name: "Jason", character: "Indiana" }, { name: "Henk", character: "The Green One" }]);
            view.init(game);
            view.render();
        }

    }

});