define(["models/players"], function(P) {
    return {

        start: function() {
            var p1 = new P.Player("Bob");
            console.log(p1);
        }

    }
});