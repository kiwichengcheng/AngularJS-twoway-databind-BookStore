var userInfoModule = angular.module('UserInfoModule',[]);

userInfoModule.controller('UserInfoCtrl',['$scope',function($scope){
	$scope.userInfo={
		email:"kwiichengcheng@163.com",
		password:"123456",
		autoLogin:true
	};

	$scope.getFormData = function(){
		console.log($scope.userInfo);
	}

	$scope.setFormData = function(){
		$scope.userInfo={
			email:'haha@163.com',
			password:'123',
			autoLogin:false
		}
	}
	$scope.resetFormData=function(){
		$scope.userInfo={
		email:"kwiichengcheng@163.com",
		password:"123456",
		autoLogin:true
	};
	}
}]);