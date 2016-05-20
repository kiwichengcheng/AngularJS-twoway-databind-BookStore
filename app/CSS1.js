var myModule = angular.module("MyCSSModule",[]);

myModule.controller("CSSCtrl",["$scope",
	function($scope){
		$scope.color="red";
		$scope.setGreen=function(){
			$scope.color="green";
		}
}]);