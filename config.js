'use strict';
/**
 * This file sets up the basic module libraries you'll need
 * for your application.
 */
/**
 * RequireJS Config
 * This is configuration for the entire application.
 */
require.config({
    baseUrl: 'src',
    paths: {
        angular: '../bower_components/angular/angular.min',
        'restangular': '../bower_components/restangular/dist/restangular.min',
        'underscore': '../bower_components/lodash/dist/lodash.min'
    },
    shim: {
        'restangular': {
            deps: ['underscore', 'angular']
        }
    }
});
