/**
 * the board view
 * 
 * @module board
 * @view
 */
define(["views/card", "services/playerService"], function(cardView, playerService) {

    return {
        init: function(game, pointOfView) {
            this.game = game;
            this.pov = pointOfView;
        },

        refresh: function() {
            this.refreshBoard();
            this.refreshPlayerHand([101, 1]);
            //this.refreshPlayerHand();
            this.refreshPlayerDiscards();
        },

        refreshBoard: function() {
            $("#main .board").empty();

            $("#main .board").append($('#t_spaces').html());
            if (this.game != undefined) {
                for (var i = 0; i < this.game.board.length; i++) {
                    if (this.game.board[i] != EMPTY) {
                        var $space = $($('#t_generic_fighter').html());
                        $space.css({
                            left: 50 + 120 * i + "px",
                            top: "-70px"
                        });
                        if (i > 3) $space.addClass('turn');
                        $("#main .board .space_holder").append($space);
                    }
                }
            }
        },

        refreshPlayerHand: function(activeCards) {

            $("#main .playerHand .hand.right").empty();
            $("#main .playerHand .hand.left").empty();

            var player = this.game.players.players[0];

            if (activeCards == undefined) {
                activeCards = [];
                $("#main .playerHand").removeClass('choosing');
            } else {
                $("#main .playerHand").addClass('choosing');
            }

            var rightCards = playerService.availableCards(player, RIGHT);
            if (rightCards != undefined) {
                for (var i = 0; i < rightCards.length; i++) {
                    if (activeCards.indexOf(rightCards[i]) == -1) {
                        if (rightCards[i] >= 100) {
                            $("#main .playerHand .hand.right").append(cardView.giveCard(rightCards[i] - 100, player.character));
                        } else {
                            $("#main .playerHand .hand.right").append(cardView.giveCard(rightCards[i]));
                        }
                    }
                }
            }

            if (activeCards != undefined) {
                for (var i = 0; i < activeCards.length; i++) {
                    var $card = undefined;
                    if (activeCards[i] >= 100) {
                        $card = cardView.giveCard(activeCards[i] - 100, player.character);
                    } else {
                        $card = cardView.giveCard(activeCards[i]);
                    }
                    $card.addClass('active');
                    $("#main .playerHand .hand.selected").append($card);
                }
            }

            var leftCards = playerService.availableCards(player, LEFT);
            if (leftCards != undefined) {
                for (var i = 0; i < leftCards.length; i++) {
                    if (activeCards.indexOf(leftCards[i]) == -1) {
                        if (leftCards[i] >= 100) {
                            $("#main .playerHand .hand.left").append(cardView.giveCard(leftCards[i] - 100, player.character));
                        } else {
                            $("#main .playerHand .hand.left").append(cardView.giveCard(leftCards[i]));
                        }
                    }
                }
            }
        },

        refreshPlayerDiscards: function() {
            $("#main .discard").empty();

            var players = this.game.players.list();
            for (var i = 0; i < players.length; i++) {
                var player = players[i];
                if (player.discard != undefined) {

                    var $playerDiscard = $($('#t_discard_player').html());
                    for (var j = player.discard.length - 1; j >= 0; j--) {
                        var element = player.discard[j];

                        var $element = $($('#t_discard_element').html());
                        for (var k = 0; k < element.length; k++) {
                            if (element[k] >= 100) {
                                $element.append(cardView.giveCard(element[k] - 100, player.character));
                            } else {
                                $element.append(cardView.giveCard(element[k]));
                            }

                            $playerDiscard.append($element);
                        }
                    }
                    if (i == 0) {
                        $playerDiscard.addClass('left');
                    } else {
                        $playerDiscard.addClass('right');
                    }
                    $("#main .discard").append($playerDiscard);
                }
            }
        }
    }

});