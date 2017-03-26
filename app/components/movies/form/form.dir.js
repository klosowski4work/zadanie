angular.module( 'app.movies.form' )
.directive( 'moviesForm', function () {
    return {
        restrict: "E",
        templateUrl: 'components/movies/form/form_view.html',
        controller: 'MoviesFormCtrl',
        link: function(scope, element, attrs){
            angular.element(document).ready(function () {
                $.material.init();
            });
        }
    };
});

