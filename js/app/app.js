/**
 * The main controller
 * 
 * @module app
 * @controller
 */
define(["models/game", "views/view"], function(game, view) {

    return {

        /**
         * This function is the entry point of the whole app.
         * It has to dispatch the control to the required module, depending on the game phase, and the player using the app (pointOfView)
         * 
         * @method
         */
        start: function(pointOfView) {
            game.start([{ name: "Jason", character: 0 }, { name: "Henk", character: 0 }]);
            view.init(game, pointOfView);
            view.render();
        }

    }

});