angular.module('myApp')
.controller('test1',['$scope','testService', function($scope,testService){
	$scope.testdata = testService.view1();
}])