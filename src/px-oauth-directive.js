define(['angular', './module', 'oauth-ng'], function (angular, module) {
    'use strict';

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
