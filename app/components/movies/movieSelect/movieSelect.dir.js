angular.module( 'app.movies.movieSelect' )
.directive('movieSelect',function(){    
    return {
        restrict: "E",
        require: 'ngModel',
        templateUrl: 'components/movies/movieSelect/movieSelect.html',
        controller: 'MovieSelectCtrl',
        scope: { 
           
        },
        link: function(scope, element, attrs, ngModel){
            scope.$watch('selected.value', function() {  
//                console.log('asd');
                ngModel.$setViewValue(scope.selected.value);
            });
            ngModel.$modelValue = scope.selected;
            var rand = new Date().getTime();
            scope.input = {
                id : attrs.id || 'movieSelect_'+rand,
                name : attrs.name || 'movieSelect_'+rand
            };
        }
    };
    
});