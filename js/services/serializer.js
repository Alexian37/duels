/**
 * Use this to serialize/unserialize all the game data (dynamic).
 * 
 * 
 * @module serializer
 */
define(["app/reference", "models/players"], function(R, players) {

    var exportPlayer = function(obj) {
        var tab = [];

        tab.push(obj.name);
        tab.push(R.characterIndex(obj.character));
        tab.push(obj.characterVersion);
        tab.push(obj.health);

        if (obj.token != undefined) {
            tab.push(obj.token.concat([]));
        } else {
            tab.push(undefined);
        }

        if (obj.hand != undefined) {
            tab.push(obj.hand.concat([]));
        } else {
            tab.push(undefined);
        }

        return tab;
    }

    var importPlayer = function(tab) {
        var obj = new players.Player();

        obj.name = tab[0];
        obj.character = tab[1];
        obj.characterVersion = tab[2];
        obj.health = tab[3];
        if (tab[4] != undefined) {
            obj.token = tab[4];
        }
        if (tab[5] != undefined) {
            obj.hand = tab[5];
        }

        return obj;
    }

    return {

        export: function(obj, type) {
            switch (type) {
                case "Player":
                    return exportPlayer(obj);
            }
        },

        import: function(tab, type) {
            switch (type) {
                case "Player":
                    return importPlayer(tab);
            }
        }

    }

});