var app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider) {
	$routeProvider.when('/users',{
		templateUrl : 'partials/users/index.html',
		controller  : 'users_cxr'
	})
	$routeProvider.when('/users/new',{
		templateUrl : 'partials/users/new.html',
		controller  : 'users_cxr'
	})
	$routeProvider.when('/users/entrance',{
		templateUrl : 'partials/users/entrance.html',
		controller  : 'users_cxr'
	})
	$routeProvider.when('/users/show/:id',{
		templateUrl : 'partials/users/show.html',
		controller  : 'users_cxr'
	})
	$routeProvider.when('/users/edit/:id',{
		templateUrl : 'partials/users/edit.html',
		controller  : 'users_cxr'
	})
	$routeProvider.otherwise({
		redirectTo: '/users'
	})
})
