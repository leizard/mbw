// glue all components - services, routes, resources, controllers - together for the Angular app.
// use dependency injection and setup the Angular application

// sampleApp is in index.html
angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'NerdCtrl', 'NerdService']);