(function(angular) {

    angular.module('amc-power').controller('ProductController', ['$scope', 'Api', ProductController]);

    function ProductController($scope, $api) {

        // Data
        $scope.data = {};
        $scope.vm = {};
        var data = $scope.data,
            vm = $scope.vm;

        data.name = "";
        data.description = "";
        data.outputs = {
            min: 0,
            max: 0
        };
        data.outputVoltage = "";
        data.outputPower = "";
        data.operatingTemp = "";

        vm.products = [];
        vm.currentProduct = {};

        // Functions
        $scope.func = {};
        var func = $scope.func;

        /**
         *
         */
        func.createProduct = function () {

            $api.createProduct(data).then(
                // Success
                function () {
                    func.refreshProducts();
                },
                // Failure
                function (err) {
                    console.log(err);
                }
            );
        };

        /**
         *
         * @param id
         */
        func.updateProduct = function (id) {

        };

        /**
         *
         * @param id
         */
        func.deleteProduct = function (id) {

            $api.deleteProduct(id).then(
                function () {
                    func.refreshProducts();
                },
                function (err) {
                    console.error('Error deleting product with id: ' + id);
                }
            )
        };

        /**
         *
         */
        func.refreshProducts = function () {

            $api.getProducts().then(
                function (products) {
                    vm.products = products.data;
                },
                function (err) {
                    console.log(err);
                }
            )
        };


        func.refreshProducts();

    }
}(angular));
