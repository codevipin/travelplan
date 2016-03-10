var app = angular.module('myApp',['ui.router']);

app
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('app',{
		url:'/',
		views:{
			'header':{
				templateUrl:'views/header.html',
				controller:'test1'
			},
			'content':{
				templateUrl:'views/content.html',
				controller:'test1',
			},
			'footer':{
				templateUrl:'views/footer.html',
				controller:'test1'
			}
		}
	})

	.state('app.test',{
		url:'test',
		views:{
			'header@':{
				template:'<h1>No Service</h1><br><br>'
			},
			'content@':{
				templateUrl:'views/test.html'
			}
		}
	});
	$urlRouterProvider.otherwise('/');
});