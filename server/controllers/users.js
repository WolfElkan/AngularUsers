var User  = require('../models/user.js').model
var equip = require('../models/user.js').equip
var users = {}

users.login = function(request, response) {
	console.log('server: login')
	console.log(request.body.username)
	User.find({username: request.body.username},function(error,result) {
		var user = equip(result)
		console.log(user)
		console.log(user.check(request.body.password))
	})
}

users.register = function(request,response) {
	console.log('server: register')
	var new_user = new User({
		username : request.body.username,
		password : request.body.password,
	})
	console.log(request.body)
	console.log(new_user)
	if (new_user.password) { // Placeholder validation, keeps bcrypt from crashing the server
		new_user.save(function(error,result) {
			if (error) {
				console.log(500,error)
			} else {
				console.log(201)
				response.json(result)
			}
		})
	}
}

users.index = function(request, response) {
	console.log('server: index')
	User.find({},function(error,result) {
		console.log(error,result)
		response.json({'users':result})
	})
}

users.show = function(request, response) {
	var id = request.params.id
	User.find({'_id':id},function(error,result) {
		response.json(result)
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
