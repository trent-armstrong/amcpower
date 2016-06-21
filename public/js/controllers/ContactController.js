(function(angular) {

    angular.module('amc-power').controller('ContactController', ['$scope', ContactController]);

    function ContactController($scope) {

        $scope.sampleMessage = "Contact Content";

    }
}(angular));
