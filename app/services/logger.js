define(['durandal/system', 'toastr'],
    function (system, toastr) {
        var logger = {
            error: error,
            info: info,
            success: success,
            warning: warning,
            debug: debug
        };

        toastr.options.positionClass = 'toast-bottom-right';
        toastr.options.backgroundpositionClass = 'toast-bottom-right';

        return logger;

        function debug(message, data, source, title) {
            logIt(message, data, source, true, 'debug', title);
        };
        function error(message, data, source, title) {
            logIt(message, data, source, true, 'error', title);
        };
        function info(message, data, source, title) {
            logIt(message, data, source, false, 'info', title);
        };
        function success(message, data, source, title) {
            logIt(message, data, source, true, 'success', title);
        };
        function warning(message, data, source, title) {
            logIt(message, data, source, true, 'warning', title);
        };

        function log(message, data, source, showToast) {
            logIt(message, data, source, showToast, 'info');
        }

        function logError(message, data, source, showToast) {
            logIt(message, data, source, showToast, 'error');
        }

        function logIt(message, data, source, showToast, toastType, title) {
            source = source ? '[' + source + '] ' : '';
            if (data) {
                system.log(source, message, data);
            } else {
                system.log(source, message);
            }
            if (showToast) {
                switch (toastType) {
                    case 'error':
                        toastr.error(message, title);
                        break;
                    case 'success':
                        toastr.success(message, title);
                        break;
                    case 'warning':
                        toastr.warning(message, title);
                        break;
                    default:
                        toastr.info(message, title);
                        break;
                }

            }

        }
    });
