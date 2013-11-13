requirejs.config({
    enforceDefine: false,
    paths: {
        'text': '//cdn.jsdelivr.net/requirejs/2.1.9/plugins/text',
        'durandal':'//cdn.jsdelivr.net/durandal/2.0.1/js/',
        'plugins' : '//cdn.jsdelivr.net/durandal/2.0.1/js/plugins/',
        'transitions' : '//cdn.jsdelivr.net/durandal/2.0.1/js/transitions/',
        'knockout': '//cdn.jsdelivr.net/knockout/2.3.0/knockout',
        'bootstrap': '//cdn.jsdelivr.net/bootstrap/3.0.2/js/bootstrap',
        'jquery': '//cdn.jsdelivr.net/jquery/2.0.3/jquery-2.0.3',
        'Q' : '//rawgithub.com/kriskowal/q/v0.9/q',
        'toastr' : '//cdn.jsdelivr.net/toastr/1.3.0/toastr.min'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    }
});

define('ko', ['knockout'], function (ko) { return ko; });

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'],  function (system, app, viewLocator) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'BitCoin Stats';

    //specify which plugins to install and their configuration
    app.configurePlugins({
        router:true,
        dialog: true
    });

    app.start().then(function () {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application.
        app.setRoot('viewmodels/shell', 'entrance');
    });
});
