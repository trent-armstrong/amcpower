(function(angular) {

    angular.module('amc-power').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider

            // Home
            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'HomeController'
            })

            // About
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutController'
            })

            // Contact
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactController'
            })

            // Admin
            .when('/admin', {
                templateUrl: 'views/admin.html',
                controller: 'AdminController'
            })

            // Otherwise, use the home page.
            .otherwise( {
                templateUrl: 'views/home.html',
                controller: 'HomeController'
            });

        $locationProvider.html5Mode(true);

    }]);


}(angular));