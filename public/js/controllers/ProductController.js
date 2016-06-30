(function(angular) {

    angular.module('amc-power').controller('ProductController', ['$scope', 'Api', ProductController]);

    function ProductController($scope, $api) {

        // Data
        $scope.data = {};
        var data = $scope.data;

        data.name = "";
        data.description = "";
        data.products = [];
        data.currentProduct = {};

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

        };

        /**
         *
         */
        func.refreshProducts = function () {

            $api.getProducts().then(
                function (products) {
                    data.products = products.data;
                },
                function (err) {
                    console.log(err);
                }
            )
        };


        func.refreshProducts();

    }
}(angular));
