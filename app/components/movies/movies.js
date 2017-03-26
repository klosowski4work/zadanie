angular.module( 'app.movies',[    
    'app.movies.history',
    'app.movies.results',
    'app.movies.form'
] )  
.controller( 'MoviesCtrl',  function ($scope) {
    function compare(event,movies){
        var movieIds = [];
        movies.forEach(function(item,index){
            movieIds.push(item.imdbID);
        });
        $scope.$broadcast('app.movies:compare',movieIds);        
    }
    $scope.$on('compare:fromForm', compare);    
    $scope.$on('compare:fromHistory', compare);    
    
});