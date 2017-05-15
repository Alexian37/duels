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

            this.turn = 0;

            if (playerMap != undefined) {
                players.init();
                for (var i = 0; i < playerMap.length; i++) {
                    players.add(playerMap[i].name, playerMap[i].character);
                }

                this.players = players;
                setup.startingMaterial(this);
            }

            this.board = [EMPTY, PLAYER1, EMPTY, EMPTY, EMPTY, PLAYER2, EMPTY];

        }

    }

});