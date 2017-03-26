angular.module( 'app.movies.form', [    
    'app.movies.movieSelect'
])
.controller('MoviesFormCtrl',function ($scope) {
    $scope.firstMovie = {};
    $scope.secondMovie = {};
    $scope.compare = function(){   
        var movies = [];
        if(!!$scope.firstMovie && $scope.firstMovie.hasOwnProperty('imdbID')){
            movies.push({
                imdbID:$scope.firstMovie.imdbID,
                title:$scope.firstMovie.Title
            });
        } else {
            $scope.firstMovie = {
                error : 'Field is required'
            };
        }
        if(!!$scope.secondMovie && $scope.secondMovie.hasOwnProperty('imdbID')){         
            movies.push({
                imdbID:$scope.secondMovie.imdbID,
                title:$scope.secondMovie.Title
            });
        } else {
            $scope.secondMovie = {
                error : 'Field is required'
            };
        }
        if(movies.length < 2){
            return;
        } else if(movies[0].imdbID === movies[1].imdbID){
            $scope.secondMovie = {
                error : 'The "Movie 2" field should be distinct from the "Movie 1 field'
            };
            return;
        }        
        $scope.$emit('compare:fromForm', movies);
    };
});
