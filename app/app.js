'use strict';

angular.module('app', [
    'ngRoute',
    'ngSanitize',
    'app.alerts',
    'app.view',
    'app.movies',
    'ui.select'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view'});
}])  
.controller('ApplicationCtrl', function ($scope) {
    
});
