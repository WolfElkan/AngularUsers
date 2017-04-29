app.controller('security',['$cookies','$location',function($cookies,$location) {
	console.log('security')
	if ($cookies.get('user_id')) {
		$location.url('/home')
	} else {
		$location.url('/login')
	}
}])