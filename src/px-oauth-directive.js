define(['angular',  'angular-ui-router', 'oauth-ng'], function (angular) {
    'use strict';

    var module = angular.module('predix.oauth', ['ui.router', 'oauth'])
        .config(function($stateProvider) {
            $stateProvider
                .state('secure', {
                    template: '<ui-view/>',
                    abstract: true,
                    resolve: {
                        token: function ($q, $rootScope, AccessToken, Endpoint) {

                            var q = $q.defer();
                            var token = AccessToken.get();

                            // If we have the token, resolve
                            if (token && token.access_token) {
                                q.resolve(token);
                            }
                            // Otherwise, redirect to the login page
                            else {
                                Endpoint.redirect();
                            }

                            return q.promise;
                        }
                    }
                });
        });

    module.directive('pxOauth', function () {
        return {
            scope: {
                site: '=',         // (required) set the oauth server host (e.g. http://oauth.example.com)
                clientId: '=',     // (required) client id
                redirectUri: '='   // (required) client redirect uri
            },
            restrict: 'AE',
            template: '<oauth ng-hide="true" site="{{site}}" client-id="{{clientId}}" redirect-uri="{{redirectUri}}"></oauth>'
        };
    });

    return module;
});

