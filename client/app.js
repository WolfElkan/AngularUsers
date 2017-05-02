var app = angular.module('app', ['ngRoute','ngCookies'])

app.config(function($routeProvider) {
	var $cookies;
	angular.injector(['ngCookies']).invoke(['$cookies', function(_$cookies_) {
		$cookies = _$cookies_;
	}])
	$routeProvider.when('/',{
		templateUrl : $cookies.get('user_id') ? 'partials/home.html' : 'partials/users/entrance.html',
		controller  : 'users_cxr'
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

// myApp.config(function() {

//   // here you can use $cookies as usual
// });