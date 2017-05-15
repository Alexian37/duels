/**
 * 
 * Belongs to services. Use this to code all the specifities during setup.
 * 
 * Services are stateless modules. Always pass the model object in parameter, because no game specific state should be retained here.
 * 
 * @module setup
 * @service
 */
define(["app/reference"], function(R) {

    var applySetupToPlayer = function(player, setup) {

        if (player != undefined && setup != undefined) {
            if (setup.length % 2 == 0) {
                if (player.token == undefined) {
                    player.token = [];
                }
                for (var i = 0; i < setup.length / 2; i++) {
                    player.token.push({
                        type: setup[i * 2],
                        number: setup[i * 2 + 1]
                    });
                }
            }
        }

    }

    return {

        startingMaterial: function(game) {

            if (game.players != undefined) {
                var players = game.players.list();
                for (var i = 0; i < players.length; i++) {
                    var fighter = R.characterAttributes(players[i].character, players[i].characterVersion);
                    if (fighter != undefined && fighter.setup != undefined) {
                        applySetupToPlayer(players[i], fighter.setup);
                        console.log(players[i])
                    }
                }
            }

        }

    }

});