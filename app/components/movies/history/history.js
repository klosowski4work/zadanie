angular.module( 'app.movies.history',[])  
.controller( 'MoviesHistoryCtrl',  function ($scope) {
    function getFromHistory(){
        if($scope.isSupport && localStorage.history !== undefined){
            return JSON.parse(localStorage.history);
        } else {
            return [];
        }
    };
    function addToHistory(movies){
        $scope.history.push(movies);
        localStorage.history = JSON.stringify($scope.history);       
    };
    function clearHistory(){
        $scope.history = [];
        localStorage.history = JSON.stringify($scope.history);
    };
    $scope.history = [];

    $scope.init = function(){
        $scope.history = getFromHistory();
    };
    
    $scope.$on('compare:fromForm',function(event, movieIds){
        addToHistory(movieIds);
    });
    $scope.compareFromHistory = function(movies){
        $scope.$emit('compare:fromHistory',movies);
        $scope.closeModal();
    };
    $scope.closeModal = function(){
        $('#'+$scope.id).modal('hide');
    };
    $scope.clearHistory = clearHistory;
});
