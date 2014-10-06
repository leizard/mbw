// glue all components - services, routes, resources, controllers - together for the Angular app.
// use dependency injection and setup the Angular application
// mbwApp is in index
angular.module('mbwApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'BestCtrl']);
