app.controller('security',['$scope','$cookies','$location',function($scope,$cookies,$location) {
	console.log('security: redirecting')
	if ($cookies.get('user_id')) {
		$location.url('/home')
	} else {
		$location.url('/login')
	}
}])