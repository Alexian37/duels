/**
 * the main module for a game.
 * 
 * @module Game module
 */
define(["models/players", "services/setup"], function(players, setup) {

    return {

        /** 
         * @param playerMap : tab with players' names and characters
         *      example : [{name: "Jason", character: "Indiana"}, {name: "Henk", character: "The Green One"}]
         */
        start: function(playerMap) {

            if (playerMap != undefined) {
                players.init();
                for (var i = 0; i < playerMap.length; i++) {
                    players.add(playerMap[i].name, playerMap[i].character);
                }

                this.players = players;
                setup.startingMaterial(this);
            }

            this.board = [EMPTY, PLAYER1, EMPTY, EMPTY, EMPTY, PLAYER2, EMPTY];

            this.workflow = {
                turn: 1,
                phase: CHOOSE_CARDS,
                turnOrder: Math.random() < 0.5 ? [0, 1] : [1, 0]
            };
            this.workflow.currentPlayer = this.workflow.turnOrder[0];

        }

    }

});