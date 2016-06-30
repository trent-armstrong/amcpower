angular.module('amc-power')
    .factory('Api', ['$http', ApiService]);

function ApiService($http) {

    var service = {
        getProducts: getProducts,
        createProduct: createProduct
    };

    return service;

    /**
     *
     */
    function getProducts () {
        return $http({
            method: 'GET',
            url: '/api/v1/products'
        });
    }

    /**
     *
     */
    function createProduct (data) {
        return $http({
            method: 'POST',
            url: '/api/v1/product',
            data: data
        });
    }
}