// here defined the Angular routes
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    // risky layout incoming ...
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutController'
    });

  $locationProvider.html5Mode(true);
}]);