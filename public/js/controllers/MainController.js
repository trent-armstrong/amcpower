(function(angular) {

    angular.module('amc-power').controller('MainController', ['$scope', MainController]);

    function MainController($scope) {

        $scope.sampleMessage = "Main Content";

    }
}(angular));
