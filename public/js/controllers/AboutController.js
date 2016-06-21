(function(angular) {

    angular.module('amc-power').controller('AboutController', ['$scope', AboutController]);

    function AboutController($scope) {

        $scope.sampleMessage = "About Content";

    }
}(angular));
