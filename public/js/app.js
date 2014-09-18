// glue all components - services, routes, resources, controllers - together for the Angular app.
// use dependency injection and setup the Angular application
// mbwApp is in index.html
angular.module('mbwApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'AboutCtrl']);