angular.module( 'app.movies.results')
.directive('moviesResults',function(){
    return {
        restrict: "E",
        templateUrl: 'components/movies/results/movies_results.html',
        controller: 'MoviesResultsCtrl'
    };
});