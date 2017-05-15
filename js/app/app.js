/**
 * The main controller
 * 
 * @module app
 * @controller
 */
define(["models/game", "views/view"], function(game, view) {

    return {

        start: function() {
            game.start([{ name: "Jason", character: 0 }, { name: "Henk", character: 1 }]);
            view.init(game);
            view.render();
        }

    }

});