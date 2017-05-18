define(["views/labels"], function(L) {

    var specificText = function(flag) {
        switch (flag) {
            case MOVE_ONE:
                return "Move 1 " + L.space;
            case BACKWARD_ONE_OR_TWO:
                return "Move backward 1 or 2 " + L.space + "s";
            case FORWARD_ONE_OR_TWO:
                return "Move forward 1 or 2 " + L.space + "s";
            case MOVE_1_2_3:
                return "Move 1, 2 or 3 " + L.space + "s";
            case MOVE_1_2_3_INVULNERABLE:
                return "Move 1, 2 or 3 " + L.space + "s. If you switch side with your opponent, he cannot hit you this " + L.turn;
            case GAIN_2_INIT_TOKEN:
                return "Gain 2 " + L.init_token + "s";
            case STRENGTH_PLUS_1_NEXT_TURN:
                return "You have +1 " + L.strength + " next " + L.turn;
            case PUSH_1_SPACE_PER_DAMAGE:
                return "Push the opponent 1 " + L.space + " per point of damage dealt";
            case RAISE_ATTACK_2_FROM_LAST_TURN:
                return "If you hit the opponent last " + L.turn + ", this attack has +2 " + L.strength;
            case IGNORE_ABSORPTION_PRIORITY_MORE_7:
                return "This attack ignores " + L.absorption + " if your " + L.speed + " is 7 or greater";
            case NO_HIT_FURTHER_TARGET_3:
                return "This attack does not hit opponents at range 3 or greater";
            case EXACTLY_3_INIT_TOKEN:
                return "Gain or lose " + L.init_token + " until you have exactly 3";
            case FORWARD_0_TO_3_SPACES_LOSE_1_PER_SPACE:
                return "Move forward up to 3 " + L.space + ". You have -1 " + L.strength + " for each " + L.space + " moved by this effect (to a minimum of 0)";
            case IGNORE_TOLERANCE_IF_INIT_6:
                return "This attack ignores " + L.tolerance + " if your " + L.speed + " is 6 or greater";
            case SPECIAL_LIFE_ABSORPTION:
                return "If this attack hit, you may spend 2 or 4 " + L.init_token + ". For every 2 tokens you spent, the opponent you hit loses 1 " + L.health_point + ", and you gain 1 " + L.health_point;
            case SPECIAL_NO_BID:
                return "The opponent is " + L.ko + " and is not able to declare " + L.bid + " for the rest of the " + L.duel + " (except mandatory " + L.bid + " dictated by his " + L.hero_power + ")";
            case SPECIAL_NO_ABSORPTION_AND_TOLERANCE:
                return "The opponent is " + L.ko + " and loses all " + L.absorption + " and " + L.tolerance + " for the rest of the " + L.duel;
            case GAIN_SPEED_PER_DAMAGE_LIMIT5:
                return "begins a " + L.duel + " with 3 " + L.init_token + "s. Each time she hits an opponent with an attack, she gains one " + L.init_token + " per point of damage dealt. She cannot possess more than 5 " + L.init_token + "s at any time. She can " + L.bid + " " + L.init_token + " for +1 " + L.speed + " each ";

        }
        return "";
    }

    return {

        effect: function(flag) {
            var ref = flag;
            if (typeof flag == "number") {
                ref = [flag];
            }

            var outputString = ""

            for (var i = 0; i < ref.length; i++) {
                outputString += specificText(ref[i]) + ". ";
            }

            return outputString;
        }

    }

});