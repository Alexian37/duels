define(["views/labels"], function(L) {

    /*

    var MOVE_ONE = 0;
var FORWARD_ONE_OR_TWO = 1;
var BACKWARD_ONE_OR_TWO = 2;
var MOVE_1_2_3 = 3;
var MOVE_1_2_3_INVULNERABLE = 4;

var GAIN_2_INIT_TOKEN = 5;
var STRENGTH_PLUS_1_NEXT_TURN = 6;
var PUSH_1_SPACE_PER_DAMAGE = 7;
var RAISE_ATTACK_2_FROM_LAST_TURN = 8;
var IGNORE_ABSORPTION_PRIORITY_MORE_7 = 9;
var NO_HIT_FURTHER_TARGET_3 = 10;
var EXACTLY_3_INIT_TOKEN = 11;
var FORWARD_0_TO_3_SPACES_LOSE_1_PER_SPACE = 12;
var IGNORE_TOLERANCE_IF_INIT_6 = 13;
var SPECIAL_LIFE_ABSORPTION = 14;
var SPECIAL_NO_BID = 15;
var SPECIAL_NO_ABSORPTION_AND_TOLERANCE = 16;
var GAIN_SPEED_PER_DAMAGE_LIMIT5 = 17;

    */

    var specificText = function(flag) {
        switch (flag) {
            case BACKWARD_ONE_OR_TWO:
                return "Move backward 1 or 2 " + L.space + "s";
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
                outputString += specificText(ref[i]) + " ";
            }

            return outputString;
        }

    }

});