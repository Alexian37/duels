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
        jquery: 'lib/jquery-3.0.0.min',
        'const': ['ref/const']

    },
    // shim: makes external libraries compatible with requirejs (AMD)
    shim: {
        'jquery': {
            deps: ['const']
        }
    }
});

// Start the main app logic.
requirejs(['jquery', 'app/app', 'ref/reference'],
    function($, app, R) {
        app.start(0);
    }
);