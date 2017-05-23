/**
 * View for the top bar
 * 
 * @module menu
 * @view
 */
define(["views/labels"], function(L) {

    return {
        init: function(game) {
            this.game = game;
        },

        refresh: function() {

            $("#main .menu").empty();

            if (this.game != undefined) {
                if (this.game.players != undefined && this.game.workflow != undefined && this.game.workflow.turnOrder != undefined) {

                    for (var i = 0; i < this.game.workflow.turnOrder.length; i++) {
                        var player = this.game.players.get(i);
                        var $elem = $('#t_player').html();
                        $elem = $elem.replace("$1", player.name).replace("$2", CHARACTERS[player.character]).replace("$3", player.health);
                        $elem = $($elem);
                        if (i == this.game.workflow.currentPlayer) {
                            $elem.addClass('current');
                        }
                        $("#main .menu").append($elem);
                    }

                }
            }

        }
    }

});