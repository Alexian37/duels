/**
 * Reference module describing cards 
 * 
 * BASE_CARDS are the common fighting cards
 * HERO_CARDS has one entry per character (fighter), containing all the combat cards for this fighter
 * 
 * @module cards
 */
define({

    BASE_CARDS: [
        { target: 1, strength: 4, speed: 3, tolerance: 5, type: LEFT },
        { target: [1, 4], strength: 3, speed: 2, tolerance: 2, type: LEFT },
        { target: 1, strength: 2, speed: 5, hit: MOVE_OPPONENT_ONE, default_discard: 1, type: LEFT },
        { target: 1, strength: 3, speed: 4, before_action: FORWARD_ONE_OR_TWO, type: LEFT },
        { target: [2, 3], strength: 3, speed: 1, start_turn: BACKWARD_ONE_OR_TWO, type: LEFT },
        { target: "n", strength: "n", speed: 9, after_action: [MOVE_1_2_3_INVULNERABLE], default_discard: 0, type: LEFT },
    ],

    HERO_CARDS: [
        [
            { target: [0, 1], strength: -1, speed: 0, after_action: BACKWARD_ONE_OR_TWO, end_turn: [GAIN_2_INIT_TOKEN, STRENGTH_PLUS_1_NEXT_TURN], type: RIGHT },
            { target: [0, 1], strength: 0, speed: 0, damage: PUSH_1_SPACE_PER_DAMAGE, end_turn: FORWARD_ONE_OR_TWO, type: RIGHT },
            { target: 0, strength: 2, speed: 0, hit: RAISE_ATTACK_2_FROM_LAST_TURN, permanent: [IGNORE_ABSORPTION_PRIORITY_MORE_7, NO_HIT_FURTHER_TARGET_3], type: RIGHT },
            { target: 0, strength: 1, speed: 2, hit: MOVE_ONE, end_turn: EXACTLY_3_INIT_TOKEN, default_discard: 0, type: RIGHT },
            { target: 0, strength: 0, speed: -1, before_action: FORWARD_0_TO_3_SPACES_LOSE_1_PER_SPACE, default_discard: 1, type: RIGHT },
            { target: [1, 2], strength: 3, speed: 2, type: LEFT, permanent: IGNORE_TOLERANCE_IF_INIT_6, after_action: SPECIAL_LIFE_ABSORPTION },
            { target: 1, strength: 3, speed: 3, type: COMBINED, damage: SPECIAL_NO_BID },
            { target: 1, strength: 3, speed: 3, type: COMBINED, damage: SPECIAL_NO_ABSORPTION_AND_TOLERANCE },
        ],
        [

        ]
    ]

});