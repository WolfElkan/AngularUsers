app.controller('users_cxr',['$scope','$location','$routeParams','$cookies','UserFactory',function($scope,$location,$routeParams,$cookies,UserFactory,) {

	var id = $routeParams.id

	$scope.user_log = {}
	$scope.user_reg = {}

	$scope.login = function() {
		console.log('cxr: login')
		UserFactory.login($scope.user_log).then(function(returned) {
			var status = returned.data
			if (status.account) {
				if (status.correct) {
					console.log('cxr: password correct')
				} else {
					console.log('cxr: password incorrect')
				}
			} else {
				console.log('cxr: no account')				
			}
		})
		$scope.user_log = {}
	}

	$scope.register = function() {
		console.log('cxr: register')
		var res = UserFactory.register($scope.user_reg)
		console.log('cxr:',res)
		$location.url('/users')
		$scope.user_reg = {}
	}

	$scope.user_index = UserFactory.all()
	UserFactory.load().then(function(returned) {
		$scope.user_index = returned.data.users
	})

	$scope.isbcrypt = function(pw) {
		var bcrypt = /^\$2[ay]?\$\d{2}\$[./0-9A-Za-z]{53}$/
		return Boolean(bcrypt.exec(pw))
	}

	// $scope.user_show = UserFactory.find(id)
	// $scope.user_create = function() {
	// 	UserFactory.create($scope.user_new)
	// 	$location.url('/users')
	// }

	// $scope.user_edit = UserFactory.find(id)
	// $scope.user_update = function() {
	// 	UserFactory.update(id,$scope.user_edit)
	// 	$location.url('/users')
	// }

	$scope.user_delete = function(id) {
		UserFactory.delete(id)
	}

	$scope.print = function() {
		// console.log('cxr:',$scope.user_index)
		UserFactory.print( )
	}

}])
