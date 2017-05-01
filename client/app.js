var app = angular.module('app', ['ngRoute','ngCookies'])

app.config(function($routeProvider) {
	$routeProvider.when('/',{
		templateUrl : 'partials/security.html',
		controller  : 'security'
	})
	$routeProvider.when('/login',{
		templateUrl : 'partials/users/entrance.html',
		controller  : 'users_cxr'
	})
	$routeProvider.when('/users',{
		templateUrl : 'partials/users/index.html',
		controller  : 'users_cxr'
	})
	$routeProvider.when('/home',{
		templateUrl : 'partials/home.html',
		controller  : 'users_cxr'
	})
	// $routeProvider.when('/users/show/:id',{
	// 	templateUrl : 'partials/users/show.html',
	// 	controller  : 'users_cxr'
	// })
	// $routeProvider.when('/users/edit/:id',{
	// 	templateUrl : 'partials/users/edit.html',
	// 	controller  : 'users_cxr'
	// })
	$routeProvider.otherwise({
		redirectTo: '/'
	})
})
