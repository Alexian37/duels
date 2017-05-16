/**
 * Main module for the view. 
 * Place here all the render/refresh functions, and call them accordingly
 * 
 * @module views
 * @view
 */
define(["views/menu", "views/board"], function(menu, board) {

    return {
        menu: menu,
        board: board,

        init: function(game) {
            this.game = game;
            this.menu.init(game);
            this.board.init(game);
        },

        render: function() {
            this.menu.refresh();
            this.board.refresh();
        }
    };

});