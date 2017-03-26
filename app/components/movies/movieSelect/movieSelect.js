angular.module( 'app.movies.movieSelect' , [
    'ui.select', 
    'ngSanitize',
    'app.movies'
])
.controller('MovieSelectCtrl',function($scope,MoviesSvc){
    $scope.items = [];
    $scope.itemArray = [];
    $scope.page = 1;
    $scope.selected = {};
    $scope.showLoadMore = true;
    $scope.refreshSuggestions = function($select, $event){
        if (!$event) {
            $scope.page = 1;
            $scope.items = [];
        } else {
            $event.stopPropagation();
            $event.preventDefault();
            $scope.page++;
        }
        $scope.loading = true;
        MoviesSvc.getByTitle($select.search,$scope.page).then(function(res){     
            $scope.items = $scope.items.concat(res.data.Search); 
            $scope.showLoadMore = res.data.totalResults > $scope.page * 10 && $scope.items.length > 0;

        })['finally'](function() {
            $scope.loading = false;
        });;
    };


});