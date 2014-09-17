// here defined the Angular routes
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    // risky layout incoming ...
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })
    .when('/nerds', {
      templateUrl: 'views/nerd.html',
      controller: 'NerdController'
    });

  $locationProvider.html5Mode(true);
}])