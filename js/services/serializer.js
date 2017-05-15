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

        return tab;
    }

    var importPlayer = function(tab) {
        var obj = new players.Player();

        obj.name = tab[0];
        obj.character = tab[1];
        obj.characterVersion = tab[2];
        obj.health = tab[3];

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