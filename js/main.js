/**
 * Starting class for the app.
 * Rely on require.js
 * 
 * @module main
 * @link http://requirejs.org
 */
requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'lib/jquery-3.0.0.min'
    }
});

// Start the main app logic.
requirejs(['jquery', 'app/app', 'ref/reference'],
    function($, app, R) {
        app.start();

        //console.log(R.cardsForCharacter(0))
    }
);