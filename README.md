px-oauth  [![Build Status](http://alpha.menlo-ci.sw.ge.com:11112/job/px-oauth/badge/icon)](http://alpha.menlo-ci.sw.ge.com:11112/job/px-oauth/)
========  

You can use the px-oauth module in your application to add implicit grant support for Cloud Foundry UAA.

Add the directive to your index file...
```
    <px-oauth
        site="site"
        client-id="clientId"
        redirect-uri="redirectUri">
    </px-oauth>
```

... and the scope properties. 
```
        // Example UAA Configuration
        $scope.site = 'https://predixuaa.ges-apps.ice.ge.com';  // The location of your UAA server. The /oauth/token routes will be added by predix.oauth.
        $scope.clientId = 'app';                                // Your app id that you registered with Cloud Foundry.
        $scope.redirectUri = $location.absUrl();                // Where the UAA server should redirect the user on successful login. Typically, the last page the user was visiting.
```

Then secure your routes by adding 'secure' as their parent.
```
            .state('home', {
                url: '/home', 
                ...
                parent: 'secure'
            })
```


See the predix-seed for an example.

This is a wrapper for  [OAuthNG ](http://andreareginato.github.io/oauth-ng/ "OAuthNG")
