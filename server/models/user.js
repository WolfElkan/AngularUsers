var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
	field   : String,
	temp_id : Number,
},{	timestamps: { 
		createdAt: 'created_at', 
		updatedAt: 'updated_at',
	} 
});

mongoose.model('users',UserSchema);

module.exports = mongoose.model('users');
