angular.module( 'app.movies.results',[]) 
.controller('MoviesResultsCtrl',function ($scope, MoviesSvc) {
    $scope.moviesDetails = [];
    $scope.compared = [];
    
    function intersection(array1,array2){
        return array1.filter(function(n) {
            return array2.indexOf(n) !== -1;
        });
    }
    function splitAndTrim(arr,splitSign){
        return arr.replace(/\s+,/g, splitSign).replace(/,\s+/g,splitSign).split(splitSign);
    }
    function compare(movies){
        var moviesArr = [];
        angular.copy(movies, moviesArr);
        var first = moviesArr.pop(),
            compared = {
                commonActors:splitAndTrim(first.Actors,','),
                commonDirectors:splitAndTrim(first.Director,',')
            };        
        return new Promise(function(resolve){           
            moviesArr.forEach(function(movie,index,arr){
                var actors = splitAndTrim(movie.Actors,','),
                    directors = splitAndTrim(movie.Director,',');
                compared.commonActors = intersection(compared.commonActors, actors); 
                compared.commonDirectors = intersection(compared.commonDirectors, directors);                
                if (index === arr.length - 1){ 
                    resolve(compared);
                }
           });
        });
        
    }
    $scope.$on('app.movies:compare', function(event, movieIds) { 
        
        MoviesSvc.getByIds(movieIds).then(function(res){
            $scope.loading = true;
            var movies = [];
            res.forEach(function(item,idx,arr){
                movies.push(item.data);
            });
            $scope.$apply(function () {
                $scope.moviesDetails = movies;
                $scope.colStyle = {
                    'width': parseInt(100/movies.length,10)+'%'
                };
            });
            compare(movies).then(function(compared){
//                    $scope.loading = false;
                $scope.$apply(function () {
                    $scope.compared = compared;
                });
            });
        }).catch(function(err){
//            $scope.loading = false;
            console.log(err);
        });

    });
})