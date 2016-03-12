angular.module('myApp')
.directive('enter',function(){
	return function(scope,element){
		element.bind("mouseenter",function(){
			alert("enter in");
		})
	
}
})

.directive('testd',function(){
	return {
		restrict: 'E',
		templateUrl:'views/header.html',
		controller:'test1'
	}
})