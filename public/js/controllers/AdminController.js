(function(angular) {

    angular.module('amc-power').controller('AdminController', ['$scope', AdminController]);

    function AdminController($scope) {

        $scope.sampleMessage = "Admin Content";
        $scope.data = {};

        $scope.func = {};
        var func = $scope.func;

        /**
         *
         */
        func.createProduct = function() {
            console.log("Creating product!");

        };

    }
}(angular));
