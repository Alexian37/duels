define(["ref/reference", "views/labels", "views/cardText"], function(R, L, cardText) {

    var giveFormattedNumber = function(value, leftOrRight) {
        if (value < 0 || leftOrRight !== RIGHT) {
            return "" + value;
        } else {
            return "+" + value;
        }
    }

    var giveCharacteristic = function(type, value, leftOrRight) {
        var characStr = $('#t_card_value').html();
        var valueStr = value;
        if (value == "n") {
            valueStr = "N/A";
        } else if (value == "x") {
            valueStr = "X";
        } else if (typeof value == "object" && value.length == 2) {
            valueStr = giveFormattedNumber(value[0], leftOrRight) + "~" + giveFormattedNumber(value[1], leftOrRight);
        } else if (typeof value == "number") {
            valueStr = giveFormattedNumber(value, leftOrRight)
        }
        characStr = characStr.replace("$2", valueStr);

        switch (type) {
            case TARGET:
                characStr = characStr.replace("$1", "target");
                characStr = characStr.replace("$3", L.target);
                break;
            case STRENGTH:
                characStr = characStr.replace("$1", "strength");
                characStr = characStr.replace("$3", L.strength);
                break;
            case SPEED:
                characStr = characStr.replace("$1", "speed");
                characStr = characStr.replace("$3", L.speed);
                break;
        }

        return characStr;
    }

    var giveTextCard = function(card) {
        //  hit, damage,
        var finalString = "";

        if (card.tolerance != undefined) {
            finalString += "<div><b>" + L.upperCaseFirst("tolerance") + " " + card.tolerance + "</b></div>";
        }

        if (card.absorption != undefined) {
            finalString += "<div><b>" + L.upperCaseFirst("absorption") + " " + card.absorption + "</b></div>";
        }

        if (card.permanent != undefined) {
            finalString += "<div>" + cardText.effect(card.permanent) + "</div>";
        }

        if (card.after_action != undefined) {
            var text = $("#t_card_text_titled").html();
            finalString += text.replace("$1", L.upperCaseFirst("after_action") + ": ").replace("$2", cardText.effect(card.after_action));
        }

        if (card.before_action != undefined) {
            var text = $("#t_card_text_titled").html();
            finalString += text.replace("$1", L.upperCaseFirst("before_action") + ": ").replace("$2", cardText.effect(card.before_action));
        }

        if (card.end_turn != undefined) {
            var text = $("#t_card_text_titled").html();
            finalString += text.replace("$1", L.upperCaseFirst("end_turn") + ": ").replace("$2", cardText.effect(card.end_turn));
        }

        if (card.start_turn != undefined) {
            var text = $("#t_card_text_titled").html();
            finalString += text.replace("$1", L.upperCaseFirst("start_turn") + ": ").replace("$2", cardText.effect(card.start_turn));
        }

        if (card.hit != undefined) {
            var text = $("#t_card_text_titled").html();
            finalString += text.replace("$1", L.upperCaseFirst("hit") + ": ").replace("$2", cardText.effect(card.hit));
        }

        if (card.damage != undefined) {
            var text = $("#t_card_text_titled").html();
            finalString += text.replace("$1", L.upperCaseFirst("damage") + ": ").replace("$2", cardText.effect(card.damage));
        }

        return "<div>" + finalString + "</div>";

    }

    var giveCard = function(cardId, characterId) {
        var cardStr = $("#t_card").html();
        var refCard = undefined;
        if (characterId != undefined) {
            refCard = R.cardForCharacter(cardId, characterId);
        } else {
            refCard = R.baseCard(cardId);
        }
        if (refCard != undefined) {
            if (refCard.type === LEFT) {
                cardStr = cardStr.replace('$1', 'left');
            } else if (refCard.type === RIGHT) {
                cardStr = cardStr.replace('$1', 'right');
            }
        }

        var characStr = "";
        if (refCard.target != undefined) {
            characStr += giveCharacteristic(TARGET, refCard.target, refCard.type);
        }
        if (refCard.strength != undefined) {
            characStr += giveCharacteristic(STRENGTH, refCard.strength, refCard.type);
        }
        if (refCard.speed != undefined) {
            characStr += giveCharacteristic(SPEED, refCard.speed, refCard.type);
        }

        cardStr = cardStr.replace("$2", characStr);
        cardStr = cardStr.replace("$3", giveTextCard(refCard));

        var card = $(cardStr);
        card.children('.overlay').data('cardId', cardId);
        if (characterId != undefined) card.children('.overlay').data('characterId', characterId);

        return card;
    }

    return {
        giveCard: giveCard
    }

});