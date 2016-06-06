var mainController = angular.module('mainController', []);

mainController.controller('mainCtrl', ['$scope', '$routeParams', '$http',		
	function($scope, $routeParams, $http) {
		$scope.owner = owner;
		$scope.input_field = '';
		$scope.submit = function(){ // fungsi ajaib gara2 ada directive 
			alert($scope.input_field);
		}		
}]);

mainController.directive('ngEnter', function(){
	return function(scope, element, attrs){
		element.bind("keydown press", function (event){
			if (event.which == 13){
				scope.$apply(function(){
					scope.$eval(attrs.ngEnter);
				});
				event.preventDefault();
			}
		})
	}
});