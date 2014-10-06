// here defined the Angular routes
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    // risky layout incoming ...
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    })

    .when('/new', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    })

    .when('/best', {
        templateUrl: 'views/best.html',
        controller: 'BestController'
    });

    $locationProvider.html5Mode(true);
}]);
