var app = angular.module('app', ['ngRoute','ngCookies'])

app.config(function($routeProvider) {
	var $cookies;
	angular.injector(['ngCookies']).invoke(['$cookies', function(cookies) {
		$cookies = cookies;
	}])
	if ($cookies.get('user_id')) {
		$routeProvider.when('/home',{
			templateUrl : 'partials/home.html',
			controller  : 'users_cxr'
		})
		$routeProvider.otherwise({
			redirectTo: '/home'
		})
	} else {	
		$routeProvider.when('/login',{
			templateUrl : 'partials/users/entrance.html',
			controller  : 'users_cxr'
		})
		$routeProvider.otherwise({
			redirectTo: '/login'
		})
	}
	$routeProvider.when('/users',{
		templateUrl : 'partials/users/index.html',
		controller  : 'users_cxr'
	})
})