//  Eligor, Shekhtur, Malandrax, and Joal

requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'lib/jquery-3.0.0.min'
    }
});

// Start the main app logic.
requirejs(['jquery', 'app/app'],
    function($, app) {
        app.start();
    });