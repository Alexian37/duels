define(["views/labels"], function(L) {

    return {
        init: function(game) {
            this.game = game;
        },

        refresh: function() {

            $("#main .menu").empty();

            if (this.game != undefined) {
                if (this.game.players != undefined) {
                    var players = this.game.players.list()
                    for (var i = 0; i < players.length; i++) {
                        var player = players[i];
                        var $elem = $('#t_player').html();
                        $elem = $elem.replace("$1", player.name).replace("$2", player.health);
                        $("#main .menu").append($elem);
                    }
                }
            }

        }
    }

});