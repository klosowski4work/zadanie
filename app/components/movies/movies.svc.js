'use strict';
angular.module( 'app.movies' )
.service( 'MoviesSvc', function ($http) {
    this.getByTitle = function(title, page){
        page = page || 1;
        return $http({
            method: 'GET',
            url:'http://www.omdbapi.com/',
            params:{
                s: title,
                type: 'movie',
                page: page
            }
        });
    };
    this.getById = function(id){
        return $http({
            method: 'GET',
            url:'http://www.omdbapi.com/',
            params:{
                i: id,
                type: 'movie'
            }
        });
    };
    this.getByIds = function(moviesIds){
        var promises = [];        
        var MoviesSvc = this;
        var movies = [];
        return new Promise(function(resolve,reject){            
            moviesIds.forEach(function(item,index,arr){
                promises.push(MoviesSvc.getById(item));
                if(index === arr.length - 1){
                    Promise.all(promises).then( function(results){
                        resolve(results);                                              
                    });
                }
            });
        });
    };
}); 