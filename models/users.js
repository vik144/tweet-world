var mongoose = require('mongoose');


var userSchema = mongoose.Schema({
	userName: String,
	password: String
})

var User = mongoose.model('user', userSchema)

module.exports = User;