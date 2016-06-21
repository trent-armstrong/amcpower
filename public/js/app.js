angular.module('amc-power', ['ngRoute'])
    .config(['$compileProvider', function ($compileProvider) {
        // disable debug info
        $compileProvider.debugInfoEnabled(false);
    }]);