define(["views/menu"], function(menu) {

    return {
        menu: menu,

        init: function(game) {
            this.game = game;
            this.menu.init(game);
        },

        render: function() {
            this.menu.refresh();
        }
    };

});