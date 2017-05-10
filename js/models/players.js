define(function() {

    var Player = function(name, characterName) {
        if (name != undefined) this.name = name;
        if (characterName != undefined) this.character = characterName;
        this.health = 20;
    };

    return {

        get: function(name) {
            if (this.players != undefined) {
                for (var i = 0; i < this.players.length; i++) {
                    if (this.players[i].name == name) {
                        return this.players[i];
                    }
                }
            }
            return undefined;
        },

        add: function(name, characterName) {
            if (this.players == undefined) {
                this.players = [];
            }
            this.players.push(new Player(name, characterName));
        },

        list: function() {
            return this.players;
        },

        init: function() {
            this.players = [];
        }

    }

});