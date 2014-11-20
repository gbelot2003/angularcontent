angular.module('app')
.controller('mainController', function($scope, search) {
    $scope.currentPage = 1;
    $scope.itemsPerPage = 6;
    $scope.alimentos = [];

    $scope.lunchSearch = function(){
        var promise = search.getResults({
            'items_per_page' : $scope.itemsPerPage,
            'page' : $scope.currentPage

        });

        promise.then(function(result){
            $scope.alimentos = result.nodes;
            $scope.totalItems = result.total;
        });
    };

    $scope.lunchSearch();

    $scope.pageChanged = function(){
        $scope.lunchSearch();
    };
});