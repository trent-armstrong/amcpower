(function(angular) {

    angular.module('amc-power').controller('MainController', ['$scope', MainController]);

    function MainController($scope) {


        $scope.$on('$locationChangeStart', function(event) {

            // TODO: set up google analytics.
            //console.log("LOADING START");
        });

        $scope.$on('$viewContentLoaded', function(event) {

            // TODO: set up google analytics.
            //console.log(window.location.pathname);
            //console.log("LOADING COMPLETE");
        });

    }
}(angular));
