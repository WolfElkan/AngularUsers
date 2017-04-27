var User = require('../models/user.js')

var users = {}

users.index  = function(request, response) {
	User.find({},function(error,result) {
		response.json({'users':result})
	})
}

users.show   = function(request, response) {
	var id = request.params.id
	User.find({'_id':id},function(error,result) {
		response.json(result)
	})
}

users.create = function(request,response) {
	new_user = new User({
		field   : request.body.field,
		temp_id : request.body.temp_id,
	})
	new_user.save(function(error,result) {
		if (error) {
			// console.log(500,error)
		} else {
			// console.log(201)
			response.json(result)
		}
	})
}

users.update = function(request, response) {
	var id = request.params.id
	var query = request.body.query
	var patch = request.body.patch
	User.update(query,patch,function(error,result) {
		if (error) {
			// console.log(500,error)
		} else {
			// console.log(201.5)
			response.json(result)
		}
	})
}

users.delete = function(request, response) {
	var id = request.params.id
	User.remove({'_id':id},function(error,result) {
		if (error) {
			// console.log(500,error)
		} else {
			// console.log(201.9)
			response.json(result)
		}
	})
}

module.exports = users
