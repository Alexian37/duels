/**
 * The main controller
 * 
 * @module app
 * @controller
 */
define(["controllers/gameController"], function(gameController) {

    return {

        /**
         * This function is the entry point of the whole app.
         * It has to dispatch the control to the required module, depending on the game phase, and the player using the app (pointOfView)
         * 
         * @method
         */
        start: function(pointOfView) {
            gameController.start(pointOfView);
        }

    }

});