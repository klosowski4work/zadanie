'use strict';

angular.module('app', [
    'ngRoute',
    'ngSanitize',
    'app.view',
    'app.movies',
    'ui.select'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view'});
}])  
.controller('ApplicationCtrl', function ($scope) {
    $scope.init = function(){
        
    };
//        $scope.messages = [];
//        appScope = $scope;
//        $scope.init = function(){
//            console.log('init');
//            if(!!window.localStorage.token){
//                $http.defaults.headers.common['X-Auth'] = window.localStorage.token;
//                UserSvc.getUser()
//                .then(function(response){
//                    $scope.currentUser = response.data;
//                });
//            };            
//
//        };
//        $scope.$on('login', function (_, user) {
//            $scope.currentUser = user;
//        });
//        $scope.$on('logout', function(){
//            $scope.currentUser = false;
//        }); 
//        
//        $scope.$on('addMessage', function (_, message) {
//            $scope.messages.push(message);
//        });
});

//$(document).ready(function(){
//    $.material.init();
//});

//'use strict';
//
//// Declare app level module which depends on views, and components
//angular.module('myApp', [
//  'ngRoute',
//  'myApp.view1',
//  'myApp.version'
//])