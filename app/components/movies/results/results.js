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
        return new Promise(function(resolve,reject){           
            moviesArr.forEach(function(movie,index,arr){
                var actors = splitAndTrim(movie.Actors,','),
                    directors = splitAndTrim(movie.Director,',');
                compared.commonActors = intersection(compared.commonActors, actors); 
                compared.commonDirectors = intersection(compared.commonDirectors, directors);                
                if (index === arr.length - 1){ 
                    if(!compared.commonActors.length && !compared.commonActors.length){                        
                        reject('Common actors and directors not found.');
                    } 
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
                $scope.loading = false;
                if(!compared.commonActors.length){
                    $scope.addAlert('warning','Common Actors not found.');
                } else if(!compared.commonDirectors.length){
                    $scope.addAlert('warning','Common Directors not found.');
                } 
                $scope.addAlert('success','The comparison was successful.');
              
                $scope.$apply(function () {
                    $scope.compared = compared;
                });
            }, function(msg){
                $scope.addAlert('warning',msg);
                $scope.$apply(function () {
                    $scope.compared = '';
                });
            });
        }).catch(function(err){
            $scope.loading = false;
            console.log(err);
        });

    });
})