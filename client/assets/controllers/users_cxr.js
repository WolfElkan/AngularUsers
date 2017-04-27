app.controller('users_cxr',['$scope','$location','$routeParams','UserFactory',function($scope,$location,$routeParams,UserFactory,) {

	var id = $routeParams.id

	$scope.User = UserFactory

	UserFactory.load( ).then(function(returned) {
		$scope.user_index = returned.data.users
	})

	$scope.user_show = UserFactory.find(id)

	$scope.user_new = {}
	$scope.user_create = function() {
		UserFactory.create($scope.user_new)
		$location.url('/users')
	}

	$scope.user_edit = UserFactory.find(id)
	$scope.user_update = function() {
		UserFactory.update(id,$scope.user_edit)
		$location.url('/users')
	}

	$scope.user_delete = function(id) {
		UserFactory.delete(id)
	}

	$scope.print = function() {
		UserFactory.print( )
	}

}])
