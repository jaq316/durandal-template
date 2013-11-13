define(['durandal/system', 'durandal/plugins/router', 'services/logger', 'durandal/app', 'Q'], 
function (system, router, logger, app, Q) {

        //#region Initialization functions
        var initializers = [];
        //#endregion
        
        //#region Internal Methods

        function activate() {
            return Q.all(initializers).then(boot);

        };
        
        function boot() {
            router.map([
                { route: '',                    moduleId: 'viewmodels/home/index'                                          },
                { route: 'home',                moduleId: 'viewmodels/home/index',                             nav: true   }
            ]).buildNavigationModel();
 
            return router.activate();        
        }

        function log(msg, data, showToast) {
            logger.info(msg, data, system.getModuleId(shell));
        };
        
        //#endregion
        
        //#region Public Properties
        
        var shell = {
            activate: activate,
            router: router
        };

        return shell;

});
