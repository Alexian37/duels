/**
 * the board view
 * 
 * @module board
 * @view
 */
define([], function() {

    return {
        init: function(game) {
            this.game = game;
        },

        refresh: function() {
            $("#main .board").empty();

            $("#main .board").append($('#t_spaces').html());
            if (this.game != undefined) {
                for (var i = 0; i < this.game.board.length; i++) {
                    if (this.game.board[i] != EMPTY) {
                        var $space = $($('#t_generic_fighter').html());
                        $space.css({
                            left: 20 + 120 * i + "px",
                            top: "-70px"
                        });
                        if (i > 3) $space.addClass('turn');
                        $("#main .board .space_holder").append($space);
                    }
                }
            }
        }
    }

});