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

        init: function(game, pointOfView) {
            this.game = game;
            this.menu.init(game);
            this.board.init(game, pointOfView);
            this.pov = pointOfView;
        },

        render: function(selection) {
            this.menu.refresh();
            this.board.refresh(selection);
        },

        renderActiveCards: function(cards) {
            this.board.refreshPlayerHand(cards);
        }
    };

});