define(["ref/reference"], function(R) {

    return {

        availableCards: function(player, type) {
            var cards = [];
            if (player != undefined && player.hand != undefined) {
                for (var i = 0; i < player.hand.length; i++) {

                    var index = player.hand[i];
                    var cardRef = undefined;
                    if (index >= 100) {
                        cardRef = R.giveCard(index - 100, player.character);
                    } else {
                        cardRef = R.giveCard(index);
                    }
                    if (cardRef.type == type) {
                        cards.push(index);
                    }
                }
            }

            return cards;
        }

    }

});