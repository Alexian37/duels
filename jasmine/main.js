/**
 * https://www.airpair.com/jasmine/posts/javascriptintegrating-jasmine-with-requirejs-amd
 * 
 */

// Requirejs Configuration Options
require.config({
    // to set the default folder
    baseUrl: '../js',
    // paths: maps ids with paths (no extension)
    paths: {
        'jasmine-lib': ['../jasmine/lib/jasmine-2.6.1/jasmine'],
        'jasmine-html': ['../jasmine/lib/jasmine-2.6.1/jasmine-html'],
        'jasmine-boot': ['../jasmine/lib/jasmine-2.6.1/boot'],
        'const': ['app/const']
    },
    // shim: makes external libraries compatible with requirejs (AMD)
    shim: {
        'jasmine-html': {
            deps: ['jasmine-lib']
        },
        'jasmine-boot': {
            deps: ['jasmine-lib', 'jasmine-html', 'const']
        }
    }
});

require(['jasmine-boot'], function() {
    require(['../jasmine/spec/reference.spec'], function() {
        //trigger Jasmine
        window.onload();
    })
});