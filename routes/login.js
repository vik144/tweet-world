var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var db = require('../models/index.js')
var user = db.User


router.get('/login', function(request,response){
	response.render('login')
})

router.post('/login',function(request,response){
	//getting form data
	var userName = request.body.username
	var password = request.body.password;

	//Creating bcrypt hash
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync("password", salt);

	//create db entry

	var users = new user({
		userName: userName,
		password: hash
	})

	//saving to DB
	users.save(function(err,data){
		if(err){
			console.log(err)
		}else{
			console.log(data)
			response.redirect('/')
		}
	})
})


module.exports = router;