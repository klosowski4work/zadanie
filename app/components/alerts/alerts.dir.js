angular.module( 'app.alerts')  
.directive('alerts',function(){
    return {
        restrict: "E",
        templateUrl: 'components/alerts/alerts.html',
        link: function(scope, element, attrs){
           
        },
        controller:'AlertsCtrl'
    };
});