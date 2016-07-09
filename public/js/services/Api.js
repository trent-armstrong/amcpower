angular.module('amc-power')
    .factory('Api', ['$http', ApiService]);

function ApiService($http) {

    var service = {
        getProducts: getProducts,
        createProduct: createProduct,
        deleteProduct: deleteProduct
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
     * @param data
     * @returns {*}
     */
    function createProduct (data) {
        return $http({
            method: 'POST',
            url: '/api/v1/product',
            data: data
        });
    }

    /**
     *
     * @param id
     * @returns {*}
     */
    function deleteProduct (id) {
        return $http({
            method: 'DELETE',
            url: '/api/v1/product/' + id
        });
    }
}