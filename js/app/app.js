/**
 * The main controller
 * 
 * @module app
 * @controller
 */
define(["models/game", "views/view"], function(game, view) {

    return {

        start: function(pointOfView) {
            game.start([{ name: "Jason", character: 0 }, { name: "Henk", character: 0 }]);
            view.init(game, pointOfView);
            view.render();
        }

    }

});