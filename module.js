define(['angular', 'angular-ui-router', 'oauth'], function(angular) {

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

    return module;
});
