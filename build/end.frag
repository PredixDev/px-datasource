
    define('angular',[],function(){
        if (window.angular){
            return window.angular;
        }
        else{
            throw new Error("Missing required dependency: px-datasource requires angular, please include angular to your application");
        }
    });

    define('underscore',[],function(){
        if (window._){
            return window._;
        }
        else{
            throw new Error("Missing required dependency: px-datasource requires underscore, please include underscore to your application");
        }
    });

    //The modules for your project will be inlined above
    //this snippet. Ask almond to synchronously require the
    //module value for 'main' here and return it as the
    //value to use for the public API for the built file.
    return require('px-datasource');
}));
