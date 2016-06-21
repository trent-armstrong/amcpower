(function(angular) {

    angular.module('amc-power').controller('main.controller', ['$scope', MainController]);

    function MainController($scope) {

        $scope.sampleMessage = "Main Content";

    }
}(angular));
