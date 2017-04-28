var users = require('../controllers/users.js')

module.exports = function(app){

	app.get('/users', function(req, res) {
		console.log('routes: index')
		users.index(req, res);
	});

	app.get('/users/:id', function(req, res) {
		users.show(req, res);
	});

	app.post('/users', function(req, res) {
		if (req.body.action == 'register') {
			console.log('routes: register')
			users.register(req, res);
		} else if (req.body.action == 'login') {
			console.log('routes: login')
			users.login(req, res);
		}
	});

	app.put('/users/:id', function(req, res) {
		users.update(req, res);
	});

	app.delete('/users/:id', function(req, res) {
		users.delete(req, res);
	});

}
