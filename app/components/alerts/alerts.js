angular.module( 'app.alerts', [])
.controller('AlertsCtrl',function($scope){
    $scope.alerts = [];
    $scope.addAlert = function(type,msg){
        $scope.alerts.push({
            type:type,
            msg:msg,
            id: parseInt(Math.random()*100,10)+new Date().getTime()
        });
    };
    $scope.removeAlert = function(id){
        $scope.alerts.filter(function(value,index,array){
            if(value.id === id){
                array.splice(index,1);
            }
            return false;
        });
    };
});