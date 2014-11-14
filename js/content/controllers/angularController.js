angular.module('app')
.controller('mainController', function($scope, search) {
    $scope.currentPage = 1;
    $scope.itemsPerPage = 6;
    $scope.content = [];

    $scope.lunchSearch = function(){
        var promise = search.getResults({
            'page' : $scope.currentPage,
            'items_per_page' : $scope.itemsPerPage
        });

        promise.then(function(result){
            $scope.content = result.nodes;
            $scope.totalItems = result.total;
        });
    };

    $scope.lunchSearch();

    $scope.pageChanged = function(){
        $scope.lunchSearch();
    };
});