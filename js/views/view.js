/**
 * Main module for the view. 
 * Place here all the render/refresh functions, and call them accordingly
 * 
 * @module views
 * @view
 */
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