angular.module('myApp')
.service('testService',function(){
	
		var names = [
						{name:'vipin'},
						{name:'vipin1'},
						{name:'vipin2'}
						]
		this.view1 = function(){
			return names;
		}				



})