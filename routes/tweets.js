var express = require('express')
var router = express.Router()

//Show Tweets in homepage

router.get('/', function(req,res){
	res.render('index')
})


module.exports = router