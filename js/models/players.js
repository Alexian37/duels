define(function() {
    var Player = function(name) {
        this.kill = function() {
            this.status = "dead";
        }
        if (name != undefined) this.name = name;
    };

    return {
        Player: Player
    }
});