/**
 * The main controller for a running game
 * 
 * @module gameController
 * @controller
 */
define(["models/game", "views/view", "services/utils", "services/playerService", "ref/reference"], function(game, view, utils, playerService, R) {

    var pov = undefined;

    /********************************************************
     * 
     *  CARD SELECTION PHASE
     * 
     ********************************************************/

    var selection;

    function prepareChooseCards() {
        selection = playerService.firstPlayableCouple(game.currentPlayer());

        view.renderActiveCards(selection);
        utils.simpleValueOnClick('.playerHand .card .overlay', ['cardId', 'characterId'], chooseStartingCard, this);
    }

    function chooseStartingCard(cardIndex) {
        var card = cardIndex[0];
        var character = cardIndex[1];

        var cardRef = R.giveCard(card, character);

        if (character != undefined) {
            card += 100;
        }

        if (cardRef.type === LEFT) {
            selection[1] = card;
        } else {
            selection[0] = card;
        }

        view.renderActiveCards(selection);
        utils.simpleValueOnClick('.playerHand .card .overlay', ['cardId', 'characterId'], chooseStartingCard, this);

    }

    return {

        /**
         * This function is the entry point of the whole app.
         * It has to dispatch the control to the required module, depending on the game phase, and the player using the app (pointOfView)
         * 
         * @method
         */
        start: function(pointOfView) {

            game.start([{ name: "Jason", character: 0 }, { name: "Henk", character: 0 }]);
            this.debug();
            view.init(game, pointOfView);

            view.render();

            pov = pointOfView;

            if (utils.povAllowedToPlay(pointOfView, game)) {
                switch (game.workflow.phase) {
                    case CHOOSE_CARDS:
                        prepareChooseCards();
                        break;
                }
            }

            // window.setTimeout(function() { console.log(selection);
            // view.render(selection); }, 500);

        },

        debug: function() {
            game.workflow.turnOrder = [0, 1];
            game.workflow.currentPlayer = 0;
        }

    }

});