(function(angular) {

    angular.module('amc-power').controller('HomeController', ['$scope', HomeController]);

    function HomeController($scope) {

        $scope.sampleMessage = "Home Content";

    }
}(angular));
