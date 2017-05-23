/**
 * Holds players'data for a game
 * 
 * @module players
 * @model
 */
define(function() {

    /**
     * Each player is instanciated through this class
     * The services will enrich the player's data
     * 
     * @class Player
     */
    var Player = function(name, characterIndex, version) {

        if (name != undefined) this.name = name;
        if (characterIndex != undefined) this.character = characterIndex;
        if (version == undefined) version = 0;
        this.characterVersion = version;
        this.health = 20;

    };

    return {

        Player: Player,

        get: function(name) {
            if (this.players != undefined) {

                if (typeof name == "number") {
                    return this.players[name];
                } else {
                    for (var i = 0; i < this.players.length; i++) {
                        if (this.players[i].name == name) {
                            return this.players[i];
                        }
                    }
                }
            }
            return undefined;
        },

        add: function(name, characterIndex) {
            if (this.players == undefined) {
                this.players = [];
            }
            this.players.push(new Player(name, characterIndex));
        },

        list: function() {
            return this.players;
        },

        init: function() {
            this.players = [];
        }

    }

});