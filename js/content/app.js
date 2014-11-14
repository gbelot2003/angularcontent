'uses strict';

jQuery(document).ready(function() {
    angular.bootstrap(document.getElementsByClassName('all-angular'), ['app']);
    
});


var app = angular.module('app', ['ui.bootstrap', 'ngRoute', 'ngAnimate']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  		.when('/', {
  			templateUrl: '/test/sites/all/modules/angularcontent/js/content/partials/main.html', 
  			controller: 'mainController'
  			}
  		)
  		.when('/nosotros', {
  			templateUrl: '/test/sites/all/modules/angularcontent/js/content/partials/nosotros.html',
  			controller: 'nosotrosController'
  		}
  	);
}]);



