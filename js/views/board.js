/**
 * the board view
 * 
 * @module board
 * @view
 */
define(["views/card", "services/playerService"], function(cardView, playerService) {

    return {
        init: function(game) {
            this.game = game;
        },

        refresh: function() {
            this.refreshBoard();
            this.refreshPlayerHand();
        },

        refreshBoard: function() {
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
        },

        refreshPlayerHand: function() {
            //playerHand
            $("#main .playerHand .hand.right").empty();
            $("#main .playerHand .hand.left").empty();

            var player = this.game.players.players[0];

            var rightCards = playerService.availableCards(player, RIGHT);
            if (rightCards != undefined) {
                for (var i = 0; i < rightCards.length; i++) {
                    if (rightCards[i] >= 100) {
                        $("#main .playerHand .hand.right").append(cardView.giveCard(rightCards[i] - 100, player.character));
                    } else {
                        $("#main .playerHand .hand.right").append(cardView.giveCard(rightCards[i]));
                    }
                }
            }

            var leftCards = playerService.availableCards(player, LEFT);
            if (leftCards != undefined) {
                for (var i = 0; i < leftCards.length; i++) {
                    if (leftCards[i] >= 100) {
                        $("#main .playerHand .hand.left").append(cardView.giveCard(leftCards[i] - 100, player.character));
                    } else {
                        $("#main .playerHand .hand.left").append(cardView.giveCard(leftCards[i]));
                    }
                }
            }


        }
    }

});