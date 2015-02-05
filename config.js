'use strict';
/**
 * This file sets up the basic module libraries you'll need
 * for your application.
 */
requirejs.onError = function(err) {
    if (err.requireType === 'timeout') {
    }
    throw err;
};
/**
 * RequireJS Config
 * This is configuration for the entire application.
 */
require.config({
    enforceDefine: false,
    xhtml: false,
    waitSeconds: 15,
    config: {
        text: {
            env: 'xhr'
        }
    },
    baseUrl: 'src',
    paths: {
        angular: '../bower_components/angular/angular.min',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router.min',
        ngstorage: '../bower_components/ngstorage/ngStorage.min',
        'oauth-ng': '../bower_components/oauth-ng/dist/oauth-ng'
    }
});