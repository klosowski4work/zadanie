angular.module( 'app.movies.history')  
.directive('moviesHistory',function(){
    return {
        restrict: "E",
        templateUrl: 'components/movies/history/history_view.html',
        link: function(scope, element, attrs){
            scope.isSupport = true;
            scope.id = attrs.id + '_modal';
            if(Storage === undefined){
                scope.isSupport = false;
            }
        },
        controller:'MoviesHistoryCtrl'
    };
});