/**
 * The only place to have labels on the webpage.
 * Might be useful later if translation is needed ?
 * 
 */
define({

    upperCaseFirst: function(key) {
        var str = this[key];
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    health: "health",
    health_point: "health point",
    turn: "turn",
    round: "round",
    target: "target",
    strength: "strength",
    speed: "speed",
    space: "space",
    tolerance: "tolerance",
    absorption: "absorption",
    before_action: "before action",
    after_action: "after action",
    start_turn: "start of turn",
    end_turn: "end of turn",
    hit: "on hit",
    damage: "on damage",
    init_token: "speed token",
    ko: "knocked-out",
    hero_power: "hero power",
    bid: "bid",
    duel: "duel"

});